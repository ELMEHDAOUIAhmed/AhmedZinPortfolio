// Email templates for future use (archived)
// These templates can be used when implementing email functionality in the future

// Thank you email template
export const getThankYouTemplate = (senderName, message) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Your Message</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Plus Jakarta Sans', Arial, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td align="center" style="padding: 40px 0;">
            <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td style="padding: 40px 30px; text-align: center;">
                  <!-- Logo/Avatar -->
                  <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, #3B82F6, #8B5CF6); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-size: 32px; font-weight: bold;">A</span>
                  </div>
                  
                  <h1 style="color: #1F2937; font-size: 28px; margin: 0 0 20px 0; font-weight: 700;">Thank You for Your Message!</h1>
                  
                  <p style="color: #6B7280; font-size: 16px; line-height: 24px; margin: 0 0 30px 0;">
                    Hi ${senderName},
                  </p>
                  
                  <p style="color: #6B7280; font-size: 16px; line-height: 24px; margin: 0 0 30px 0;">
                    Thank you for reaching out! I've received your message:
                  </p>
                  
                  <!-- Message Quote -->
                  <div style="background: linear-gradient(135deg, #EBF4FF, #F3E8FF); border-left: 4px solid #3B82F6; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: left;">
                    <p style="color: #374151; font-style: italic; margin: 0; line-height: 1.6;">
                      "${message}"
                    </p>
                  </div>
                  
                  <p style="color: #3B82F6; font-size: 18px; font-weight: 600; margin: 30px 0;">
                    Ahmed has been informed and will get back to you as soon as possible!
                  </p>
                  
                  <p style="color: #6B7280; font-size: 14px; line-height: 21px; margin: 30px 0 0 0;">
                    Best regards,<br>
                    <strong style="color: #1F2937;">ELMEHDAOUI Ahmed</strong><br>
                    Software Engineer
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px; background: linear-gradient(135deg, #F9FAFB, #F3F4F6); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;">
                  <p style="color: #9CA3AF; font-size: 12px; line-height: 18px; margin: 0; text-align: center;">
                    This is an automated message. Please do not reply to this email.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

// Notification email template for Ahmed
export const getNotificationTemplate = (senderName, senderEmail, message) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Message</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Plus Jakarta Sans', Arial, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td align="center" style="padding: 40px 0;">
            <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td style="padding: 40px 30px; text-align: center;">
                  <!-- Alert Icon -->
                  <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, #10B981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-size: 32px;">📧</span>
                  </div>
                  
                  <h1 style="color: #1F2937; font-size: 28px; margin: 0 0 20px 0; font-weight: 700;">New Contact Form Message</h1>
                  
                  <p style="color: #6B7280; font-size: 16px; line-height: 24px; margin: 0 0 30px 0;">
                    You have received a new message through your portfolio contact form.
                  </p>
                  
                  <!-- Contact Details -->
                  <div style="background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 12px; padding: 24px; margin: 20px 0; text-align: left;">
                    <h3 style="color: #1F2937; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Contact Details:</h3>
                    <p style="margin: 8px 0; color: #374151;"><strong>Name:</strong> ${senderName}</p>
                    <p style="margin: 8px 0; color: #374151;"><strong>Email:</strong> <a href="mailto:${senderEmail}" style="color: #3B82F6; text-decoration: none;">${senderEmail}</a></p>
                  </div>
                  
                  <!-- Message Content -->
                  <div style="background: linear-gradient(135deg, #FEF3C7, #FDE68A); border-left: 4px solid #F59E0B; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: left;">
                    <h3 style="color: #92400E; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Message:</h3>
                    <p style="color: #78350F; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </div>
                  
                  <p style="color: #059669; font-size: 16px; font-weight: 600; margin: 30px 0;">
                    Reply to this message as soon as possible!
                  </p>
                  
                  <!-- Quick Reply Button -->
                  <a href="mailto:${senderEmail}?subject=Re: Your Portfolio Message" style="display: inline-block; background: linear-gradient(135deg, #3B82F6, #1D4ED8); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin: 20px 0;">
                    Quick Reply
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px; background: linear-gradient(135deg, #F9FAFB, #F3F4F6); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;">
                  <p style="color: #9CA3AF; font-size: 12px; line-height: 18px; margin: 0; text-align: center;">
                    This notification was sent from your portfolio contact form at ${new Date().toLocaleString()}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};
