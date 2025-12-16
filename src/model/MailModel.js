import nodemailer from "nodemailer";
import Envs from "../envs/Envs.js";

const MailModel = nodemailer.createTransport({
    host: Envs.HOST_MAIL, // ex. gmails
    port: Envs.PORT_NUMBER,  // port number for send emails 
    secure: true,
    auth: {
        user: Envs.USER_MAIL, // ower mail id
        pass: Envs.APP_PASS, // sending mail have password 
    },
    connectionTimeout: 10000, // ⏱ 10 sec
    greetingTimeout: 10000,
    socketTimeout: 10000,
    tls: {
        rejectUnauthorized: false,
    },
    debug: true, logger: true,
})

export default MailModel;

