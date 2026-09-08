import emailjs from '@emailjs/browser';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,}$/;

export const validateQuoteForm = (fields) => {
  const errors = {};

  if (!fields.from_name || !fields.from_name.trim()) {
    errors.from_name = 'Please enter your full name.';
  }

  if (fields.phone !== undefined) {
    if (!fields.phone.trim()) {
      errors.phone = 'Please enter your phone number.';
    } else if (!phonePattern.test(fields.phone.replace(/\s+/g, ''))) {
      errors.phone = 'Please enter a valid phone number.';
    }
  }

  if (!fields.from_email || !fields.from_email.trim()) {
    errors.from_email = 'Please enter your email address.';
  } else if (!emailPattern.test(fields.from_email)) {
    errors.from_email = 'Please enter a valid email address.';
  }

  if (Array.isArray(fields.service)) {
    if (fields.service.length === 0) {
      errors.service = 'Please select at least one service.';
    }
  } else if (!fields.service || !fields.service.trim()) {
    errors.service = 'Please select a service.';
  }

  return errors;
};

export const sendQuoteEmail = async (params) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return Promise.reject(new Error('EmailJS environment variables are missing.'));
  }

  const errors = validateQuoteForm(params);
  if (Object.keys(errors).length > 0) {
    return Promise.reject({ validationErrors: errors });
  }

  let bundle_discount = "No bundle discount";
  let formattedService = params.service;

  if (Array.isArray(params.service)) {
    if (params.service.length >= 2) {
      bundle_discount = "Yes — 15% Bundle Discount Applies";
    }
    // Handle the 'Other' custom input if present
    const cleanedServices = params.service.map(s => {
      if (s === 'Other' && params.customService) {
        return `Other (${params.customService.trim()})`;
      }
      return s;
    });
    formattedService = cleanedServices.join(', ');
  }

  const templateParams = {
    from_name: params.from_name.trim(),
    phone: params.phone ? params.phone.trim() : "",
    from_email: params.from_email.trim(),
    address: params.address ? params.address.trim() : "",
    service: formattedService,
    bundle_discount: bundle_discount,
    contact_method: params.contact_method || "",
    message: params.message ? params.message.trim() : "",
  };

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return result;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
