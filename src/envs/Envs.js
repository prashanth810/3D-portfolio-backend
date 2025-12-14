import "dotenv/config";

const Envs = {

    // server port number 
    PORT: process.env.PORT,

    // nodemailer to send mails 
    USER_MAIL: process.env.USER_MAIL,
    APP_PASS: process.env.APP_PASS,
    PORT_NUMBER: process.env.PORT_NUMBER,
    HOST_MAIL: process.env.HOST_MAIL,

    // front end url 
    FRONT_END: process.env.FRONT_END
}


export default Envs;