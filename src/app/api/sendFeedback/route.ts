import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';  // Import SMTPTransport


export async function POST(request: Request) {
  const { name, phone, email, arrivalDate } = await request.json();

  const transporter = nodemailer.createTransport({
    // host: process.env.EMAIL_HOST,
     host: "smtp.hostinger.com",
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      
    },
  }as SMTPTransport.Options);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Lead Generated',
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nArrivalDate: ${arrivalDate}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Quote Received Successfully, We will be in touch with you very soon.' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message); // Access `message` safely
      return NextResponse.json(
        { message: `Failed to send feedback. Error: ${error.message}` },
        { status: 500 }
      );
    } else {
      console.error('Unknown error occurred:', error);
      return NextResponse.json(
        { message: 'Failed to send feedback due to an unknown error.' },
        { status: 500 }
      );
    }
  }
}
