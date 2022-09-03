const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config()

const PORT=5000||process.env.PORT;
const app = express();

//setting middleware
app.use(cors());
app.use(express.json());
app.use("/", router);


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:process.env.MAIL_USERNAME,
      pass:process.env.MAIL_PASSWORD
    },
  });
  

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const sub=req.body.sub;
    const message = req.body.message; 
    const mail = {
      from:"pandeytk03@gmail.com",
      to: "pandeytk03@gmail.com",
      subject: `${sub}`,
      html: `<p>Name: ${name}</p>
               <p>Sub:${sub}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log(error);
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });


app.listen(PORT, () => console.log("Server Running"));
