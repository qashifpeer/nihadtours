// import nodemailer from "nodemailer";

// // Configure Nodemailer


// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     // Send email
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: "upswarpora@gmail.com",
//       subject: "New Contact Form Submission",
//       text: `Name: ${name}\nContact Number: ${contactNumber}\nQuery: ${query}`,
//     });

//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Error sending email" });
//   }
// } else {
//   res.status(405).json({ message: "Method Not Allowed" });
// }