
import nodemailer from "nodemailer";
import 'dotenv/config'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'keerthanakottapalli2@gmail.com',
    pass: 'tzom hinp hprt pdxo',
  }
});
export const sendMail = (mailData: any) => {
  const mailOptions = {
    from: 'keerthanakottapalli2@gmail.com',
    ...mailData
  }
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        reject(error);
      } else {
        console.log('Email sent:', info.response);
        resolve(info.response);
      }
    });
  });
};