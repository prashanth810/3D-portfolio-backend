import express from 'express';
import { sendmailtocontact } from '../controller/MailController.js';

const mailroutes = express.Router();

mailroutes.post('/send-mail', sendmailtocontact);

export default mailroutes;