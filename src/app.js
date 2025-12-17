import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import Envs from "./envs/Envs.js";
import mailroutes from "./routes/MailRoutes.js";


const app = express({});
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));


// port number
const PORT = Envs.PORT || 7090;


// send mail routes
app.use("/api/auth/mail", mailroutes);


app.get("/", (req, res) => {
    res.status(200).send("3D Portfolio Nodemailer Service is running");
});

app.listen(PORT, () => {
    console.log(`3D Portfolio Nodemailer Service is running on port ${PORT}`);
})