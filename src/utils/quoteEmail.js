import emailjs from '@emailjs/browser';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,}$/;

export const validateQuoteFields = (fields) => {
  const errors = {};

  if (!fields.from_name.trim()) errors.from_name = 'Please enter your full name.';
  if (!fields.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!phonePattern.test(fields.phone.replace(/\s+/g, ''))) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!fields.from_email.trim()) {
    errors.from_email = 'Please enter your email address.';
  } else if (!emailPattern.test(fields.from_email)) {
    errors.from_email = 'Please enter a valid email address.';
  }
  if (!fields.address.trim()) errors.address = 'Please enter your address.';
  if (!fields.service) errors.service = 'Please select a service.';
  if (!fields.contact_method) errors.contact_method = 'Please choose a contact method.';

  return errors;
};

export const sendQuoteRequest = (fields) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return Promise.reject(new Error('EmailJS environment variables are missing.'));
  }

  const templateParams = {
    from_name: fields.from_name.trim(),
    phone: fields.phone.trim(),
    from_email: fields.from_email.trim(),
    address: fields.address.trim(),
    service: fields.service,
    contact_method: fields.contact_method,
  };

  console.log('Sending quote request through EmailJS:', templateParams);
  return emailjs.send(serviceId, templateId, templateParams, publicKey);
};
