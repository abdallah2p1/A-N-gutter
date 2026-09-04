import { useState } from 'react';
import { MapPin, Clock, Mail, Home, Phone, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';
import { sendQuoteRequest, validateQuoteFields } from '../utils/quoteEmail';
import { services } from '../data/services';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  service: '',
  preferredContact: 'Call',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    if (submitted) setSubmitted(false);
    setSubmitError('');
  };

  const validateForm = () => {
    const fieldErrors = validateQuoteFields({
      from_name: form.name,
      phone: form.phone,
      from_email: form.email,
      address: form.address,
      service: form.service,
      contact_method: form.preferredContact,
    });

    if (form.name.trim().length === 1) fieldErrors.from_name = 'Name must be at least 2 characters.';

    return Object.fromEntries(
      Object.entries({
        name: fieldErrors.from_name,
        phone: fieldErrors.phone,
        email: fieldErrors.from_email,
        address: fieldErrors.address,
        service: fieldErrors.service,
        preferredContact: fieldErrors.contact_method,
      }).filter(([, message]) => message),
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitError('');
    setSending(true);

    try {
      await sendQuoteRequest({
        from_name: form.name,
        phone: form.phone,
        from_email: form.email,
        address: form.address,
        service: form.service,
        contact_method: form.preferredContact,
      });
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      setSubmitError('Something went wrong, please try again or call us.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="pt-32 pb-24 px-4 sm:px-6 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <a
            href="tel:5555555555"
            className="inline-flex items-center gap-3 w-fit rounded-full bg-blue-700 px-5 py-3 text-lg font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 mb-5"
          >
            <Phone className="h-5 w-5" />
            (555) 555-5555
          </a>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            Ready to upgrade your gutters? Contact us today to schedule your service. We're here to protect your home.
          </p>
          <p className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm w-fit">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            {/* We respond within 1 business hour. */}
           we will contact you as soon as possible
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="p-3 rounded-2xl bg-blue-100">
                <MapPin className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Service Areas</h4>
                <p className="text-slate-600">Buffalo, NY & Surrounding Areas</p>
                <p className="text-slate-600">Rochester, NY & Surrounding Areas</p>
              </div>
            </div>

            <div className="flex gap-5 items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="p-3 rounded-2xl bg-blue-100">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Email</h4>
                <p className="text-slate-600">7masa.zaatreh@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-5 items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="p-3 rounded-2xl bg-blue-100">
                <Home className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Address</h4>
                <p className="text-slate-600">123 Main Street</p>
                <p className="text-slate-600">Buffalo, NY 14201</p>
              </div>
            </div>
            
            <div className="flex gap-5 items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="p-3 rounded-2xl bg-blue-100">
                <Clock className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Experience</h4>
                <p className="text-slate-600">8 Years in Business (Since 2018)</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-sky-50 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
              <ShieldCheck className="h-5 w-5" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-1 text-amber-500 mb-2" aria-label="5 star rating">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-medium text-slate-700">4.9/5 from local homeowners</span>
            </div>
            <p className="text-slate-700 italic">“Professional, quick, and the gutters look amazing.”</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Free Estimate</p>
            <h3 className="mt-2 text-3xl font-extrabold text-slate-900">Request a Quote</h3>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">Full Name</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full px-5 py-3.5 bg-slate-50 border rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-slate-900 text-base ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
              />
              {errors.name && <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-slate-700 font-semibold mb-2">Phone Number</label>
              <input 
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full px-5 py-3.5 bg-slate-50 border rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-slate-900 text-base ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
              />
              {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">Email Address</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full px-5 py-3.5 bg-slate-50 border rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-slate-900 text-base ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
              />
              {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="address" className="block text-slate-700 font-semibold mb-2">Address</label>
              <input 
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="123 Main Street, Buffalo, NY"
                aria-invalid={Boolean(errors.address)}
                aria-describedby={errors.address ? 'address-error' : undefined}
                className={`w-full px-5 py-3.5 bg-slate-50 border rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-slate-900 text-base ${errors.address ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
              />
              {errors.address && <p id="address-error" className="mt-2 text-sm text-red-600">{errors.address}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block text-slate-700 font-semibold mb-2">Service Needed</label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? 'service-error' : undefined}
                className={`w-full px-5 py-3.5 bg-slate-50 border rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-slate-900 text-base appearance-none ${errors.service ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
              >
                <option value="">Select your service</option>
                {services.map((option) => (
                  <option key={option.name} value={option.name}>{option.name}</option>
                ))}
              </select>
              {errors.service && <p id="service-error" className="mt-2 text-sm text-red-600">{errors.service}</p>}
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-2">Preferred Contact Method</label>
              <div className="flex flex-col sm:flex-row gap-3">
                {['Call', 'Text', 'Email'].map((method) => (
                  <label key={method} className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:border-blue-300">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={method}
                      checked={form.preferredContact === method}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-700 accent-blue-700"
                    />
                    <span className="text-slate-700 font-medium">{method}</span>
                  </label>
                ))}
              </div>
              {errors.preferredContact && <p className="mt-2 text-sm text-red-600">{errors.preferredContact}</p>}
            </div>
            
            <button 
              type="submit"
              disabled={sending}
              className="w-full py-4 mt-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              {sending ? 'Sending...' : 'Request Quote'}
            </button>

            <p className="text-center text-sm text-slate-500">No spam — we'll only contact you about your service.</p>

            {submitted && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 font-medium text-sm">
                Thanks! We'll be in touch shortly.
              </div>
            )}

            {submitError && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 font-medium text-sm">
                {submitError}
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
