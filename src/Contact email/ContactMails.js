const ContactMails = (name, email, message, frontendurl) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Collaboration Request</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f5f6f7;
        margin: 0;
        padding: 0;
    }
    .email-container {
        max-width: 450px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        overflow: hidden;
    }
    .header {
        background: linear-gradient(90deg, #0099ff, #7ab8ff);
        text-align: center;
        padding: 25px 0;
        color: white;
    }
    .header-icon {
        width: 70px;
        height: 70px;
        background-color: white;
        border-radius: 50%;
        display: inline-block;
        margin-bottom: 10px;
    }
    .header h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
    }
    .content {
        padding: 25px;
        color: #333;
    }
    .content h3 {
        color: #1877f2;
        margin-top: 0;
        font-size: 18px;
    }
    .content p {
        line-height: 1.5;
        font-size: 15px;
        margin-bottom: 15px;
    }
    .steps-box {
        background-color: #f0f4ff;
        border-radius: 8px;
        padding: 15px 20px;
        margin-bottom: 25px;
    }
    .steps-box h4 {
        margin: 0 0 10px;
        font-size: 15px;
    }
    .steps-box ul {
        margin: 0;
        padding-left: 18px;
    }
    .steps-box ul li {
        margin-bottom: 6px;
        font-size: 14px;
    }
    .open-btn {
        display: inline-block;
        background-color: #1877f2;
        color: white;
        text-decoration: none;
        padding: 10px 25px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 15px;
    }
    .footer {
        padding: 25px;
        font-size: 13px;
        color: #555;
        line-height: 1.5;
    }
</style>
</head>

<body>
<div class="email-container">

    <div class="header">
        <div class="header-icon"></div>
        <h2>New Collaboration Request 🚀</h2>
    </div>

    <div class="content">
        <h3>Hello Prashanth,</h3>

        <p>You have received a new message from someone who wants to connect and work together.</p>

        <div class="steps-box">
            <h4>Contact Details</h4>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
            </ul>
        </div>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
 
    </div>

    <div class="footer">
        <p>This message was sent from your portfolio contact form.</p>
        <p>You can directly reply to this email to connect with the user.</p>
        <strong>Best regards,<br>3D Portfolio Contact System</strong>
    </div>

</div>
</body>
</html>`;
};

export default ContactMails;
