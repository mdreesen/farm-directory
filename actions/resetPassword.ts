"use server"
import nodemailer from "nodemailer";
import { nanoid } from "nanoid";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";

export const resetPassword = async (values: any) => {
    const { email } = values;

    // Nanoid creates a unique string
    const token = nanoid(32);

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: process.env.MAILTRAP_USERNAME,
            pass: process.env.MAILTRAP_PASSWORD,
        },
    });

    const htmlBody = `<a href="${process.env.DOMAIN}/authentication/reset-password/${token}">Click here to reset password</a>`

    try {
        await connectDB();
        const userFound = await User.findOne({ email });

        if (!userFound) {
            return {
                error: 'Email not found'
            }
        }

        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: htmlBody, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log(`Updating ${email} with ${token}`)
        await User.findOneAndUpdate({ email: email }, { resetPasswordToken: token })

    } catch (e) {
        console.log(e);
    }
}