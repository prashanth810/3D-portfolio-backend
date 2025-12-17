import ContactMails from "../Contact email/ContactMails.js";
import Envs from "../envs/Envs.js";
import MailModel from "../model/MailModel.js";

export const sendmailtocontact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        await MailModel.sendMail({
            from: `Portfolio Contact ${name} ${email}`,
            to: Envs.USER_MAIL,
            replyTo: email,                  // ✅ reply goes to USER
            subject: `New Collaboration Request from Portfolio ${name} 🚀`,
            html: ContactMails(name, email, message),
        });

        console.log(req.body);
        console.log(res, 'resssssssssss')

        return res.status(200).json({
            success: true,
            message: "Mail sent successfully",
        });


    } catch (error) {
        console.error("❌ Mail sending failed:", error);
        return res.status(500).json({
            success: false,
            message: "Mail sending failed",
        });
    }
};
