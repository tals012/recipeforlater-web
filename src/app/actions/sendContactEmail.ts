"use server";

import { env } from "@/env";

const RESEND_API_KEY = env.RESEND_API_KEY;

export const sendContactEmail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  console.log("Sending contact email from:", email);

  if (!name || !email || !message) {
    console.error("Missing required fields");
    return { ok: false, error: "All fields are required" };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { ok: false, error: "Invalid email format" };
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #7dd3c0 0%, #78c9e8 100%);
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 30px;
          }
          .header h1 {
            margin: 0;
            color: white;
            font-size: 24px;
          }
          .content {
            background: #f7f4e2;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 20px;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-weight: 600;
            color: #177654;
            margin-bottom: 5px;
          }
          .field-value {
            color: #0a090b;
          }
          .message-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #177654;
            margin-top: 10px;
          }
          .footer {
            text-align: center;
            color: #7f7d83;
            font-size: 12px;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">From:</div>
            <div class="field-value">${name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">${email}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Message:</div>
            <div class="message-box">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent from the RecipeForLater contact form</p>
        </div>
      </body>
    </html>
  `;

  try {
    console.log("Sending email via Resend API");
    
    const payload = {
      from: "RecipeForLater <no-reply@emailwavesmartflow.com>",
      to: "hello@recipeforlater.com",
      reply_to: email,
      subject: `Contact Form: Message from ${name}`,
      html,
    };

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    console.log("Resend API response status:", res.status);

    if (res.ok) {
      const data = await res.json();
      console.log("Email sent successfully:", data);
      return { ok: true, data };
    } else {
      const errorData = await res.text();
      console.error("Failed to send email. Status:", res.status);
      console.error("Error response:", errorData);
      return { ok: false, error: "Failed to send email" };
    }
  } catch (e) {
    console.error("Exception when sending email:", e);
    return { ok: false, error: "An error occurred while sending the email" };
  }
};

