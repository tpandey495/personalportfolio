const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
require('dotenv').config();
const PORT=process.env.PORT||5000;
const app = express();

//setting middleware
app.use(cors());
app.use(express.json());


if ( process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
 app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}




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
