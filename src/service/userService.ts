import { sendMail } from "./mailService";


export const sendUserCredentials=(user:any)=>{
    const htmlContent = `
                <h2>Welcome to Our Service!</h2>
                <p>Dear ${user.firstName},</p>
                <p>Your account has been successfully created. Here are your login credentials:</p>
                <ul>
                    <li><strong>Username:</strong> ${user.email}</li>
                    <li><strong>Password:</strong> ${user.password}</li>
                </ul>
                <p>Thank you for joining us!</p>
                <p>Best regards,<br>ITCC Team.</p>
            `;
            let mailData = {
                to: user.email,
                subject: 'ITCC Account Credentials',
                html: htmlContent,
            }
            sendMail(mailData);
}
export const generatePassword=(length = 8)=> {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    const getRandomChar = (chars:any) => chars[Math.floor(Math.random() * chars.length)];
    let password = [
      getRandomChar(uppercaseChars),
      getRandomChar(lowercaseChars),
      getRandomChar(numberChars),
      getRandomChar(specialChars),
    ];
    for (let i = password.length; i < length; i++) {
      password.push(getRandomChar(allChars));
    }
    password = password.sort(() => Math.random() - 0.5);
    return password.join('');
  }
