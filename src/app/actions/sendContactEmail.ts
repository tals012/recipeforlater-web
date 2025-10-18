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

  // Auto-reply email HTML
  const autoReplyHtml = `
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
            padding: 40px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            color: white;
            font-size: 28px;
          }
          .content {
            background: #f7f4e2;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 20px;
          }
          .content h2 {
            color: #177654;
            margin-top: 0;
          }
          .content p {
            color: #0a090b;
            margin: 15px 0;
          }
          .highlight {
            background: white;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #177654;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            color: #7f7d83;
            font-size: 12px;
            margin-top: 30px;
          }
          .footer a {
            color: #177654;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>✅ Thank You for Contacting Us!</h1>
        </div>
        
        <div class="content">
          <h2>Hi ${name},</h2>
          
          <p>Thank you for reaching out to RecipeForLater! We've received your message and wanted to let you know that we're on it.</p>
          
          <div class="highlight">
            <strong>What happens next?</strong><br>
            Our team will review your message and get back to you within 72 hours. We're excited to help you with your recipe management needs!
          </div>
          
          <p>In the meantime, feel free to explore our app and discover how RecipeForLater can transform the way you save, organize, and cook your favorite recipes.</p>
          
          <p>If you have any urgent questions, feel free to reply to this email.</p>
          
          <p>Happy cooking! 🍳</p>
          
          <p style="margin-top: 30px;">
            <strong>The RecipeForLater Team</strong>
          </p>
        </div>
        
        <div class="footer">
          <p>
            This is an automated response. Please do not reply to this email.<br>
            For support, contact us at <a href="mailto:hello@recipeforlater.com">hello@recipeforlater.com</a>
          </p>
        </div>
      </body>
    </html>
  `;

  try {
    console.log("Sending emails via Resend API");
    
    // Send email to hello@recipeforlater.com
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

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Failed to send email. Status:", res.status);
      console.error("Error response:", errorData);
      return { ok: false, error: "Failed to send email" };
    }

    const data = await res.json();
    console.log("Email sent successfully to hello@recipeforlater.com:", data);

    // Send auto-reply to the user
    const autoReplyPayload = {
      from: "RecipeForLater <no-reply@emailwavesmartflow.com>",
      to: email,
      subject: "We've received your message - RecipeForLater",
      html: autoReplyHtml,
    };

    const autoReplyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(autoReplyPayload),
    });

    if (autoReplyRes.ok) {
      const autoReplyData = await autoReplyRes.json();
      console.log("Auto-reply sent successfully:", autoReplyData);
    } else {
      console.error("Failed to send auto-reply, but main email was sent");
    }

    return { ok: true, data };
  } catch (e) {
    console.error("Exception when sending email:", e);
    return { ok: false, error: "An error occurred while sending the email" };
  }
};

