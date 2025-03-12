import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, detail } = await req.json();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "aslanov.ibrahim061@gmail.com", // Replace with your email
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage: ${detail}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to send email." }), { status: 500 });
  }
}
