/**
 * EmailJS Configuration for Portfolio Contact Transmission
 * 
 * You can set these keys in a .env file:
 * VITE_EMAILJS_SERVICE_ID=your_service_id
 * VITE_EMAILJS_TEMPLATE_ID=your_template_id
 * VITE_EMAILJS_PUBLIC_KEY=your_public_key
 * 
 * Or update the fallback values directly below:
 */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  recipientEmail: 'sakthikailash500@gmail.com',
};

/**
 * Dispatches message via official EmailJS REST API
 * @param {{ name: string, email: string, subject: string, message: string }} params
 */
export async function sendContactEmail({ name, email, subject, message }) {
  const { serviceId, templateId, publicKey, recipientEmail } = emailjsConfig;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EMAILJS_NOT_CONFIGURED');
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      name: name,
      from_name: name,
      email: email,
      from_email: email,
      reply_to: email,
      subject: subject,
      message: message,
      to_name: 'Sakthi Kailash',
      to_email: recipientEmail,
    },
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `EmailJS error with status ${response.status}`);
  }

  return true;
}
