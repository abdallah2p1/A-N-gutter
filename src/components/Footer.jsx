import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, Clock3, CheckCircle2, ChevronDown } from 'lucide-react';
import { sendQuoteRequest, validateQuoteFields } from '../utils/quoteEmail';
import { services } from '../data/services';

const initialForm = {
  from_name: '',
  phone: '',
  from_email: '',
  address: '',
  service: '',
  contact_method: 'Call',
};

// Social Media Icon Components (SVG)
const FacebookIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.16" y="2.16" width="19.68" height="19.68" rx="4.12" ry="4.12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18.5" cy="5.5" r="1.35" fill="currentColor"/>
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
  </svg>
);

export default function Footer() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com' },
    { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com' },
    { icon: GoogleIcon, label: 'Google Business Profile', href: 'https://www.google.com/search?q=A%26N+Gutters' },
  ];

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
    return validateQuoteFields(form);
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
      await sendQuoteRequest(form);
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      setSubmitError('Something went wrong, please try again or call us.');
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 px-6 font-sans">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 border-b border-gray-700 pb-12 mb-8">
        
        {/* Brand & Contact Info - Full width on mobile, 1/2 on tablet, 1/4 on desktop */}
        <div className="lg:col-span-1 flex flex-col">
          <h2 className="text-3xl font-display font-black text-white mb-6">
            A&N <span className="text-sky-400">Gutters</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Professional seamless gutter installation, guards, and repair services since 2018. Quality that protects your home.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mb-10">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-gray-900 text-sky-400 transition-all duration-300 hover:border-sky-400 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-500/20"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <a href="tel:5555555555" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/30 group-hover:bg-sky-500 group-hover:text-white transition-colors flex-shrink-0">
                <Phone size={18} />
              </div>
              <span className="font-medium">(555) 555-5555</span>
            </a>
            <a href="mailto:info@angutters.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/30 group-hover:bg-sky-500 group-hover:text-white transition-colors flex-shrink-0">
                <Mail size={18} />
              </div>
              <span className="font-medium">info@angutters.com</span>
            </a>
            <div className="flex items-center gap-3 text-gray-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/30 transition-colors flex-shrink-0">
                <MapPin size={18} />
              </div>
              <span className="font-medium">Buffalo & Rochester, NY</span>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="lg:col-span-1 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Quick Links</h3>
          <ul className="flex flex-col gap-3 mb-auto">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 text-gray-400 transition-colors hover:text-sky-400 font-medium group"
                >
                  <span className="text-sky-400 text-sm">▸</span>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
                className="flex w-full items-center gap-2 text-left text-gray-400 transition-colors hover:text-sky-400 font-medium group"
              >
                <span className="text-sky-400 text-sm">▸</span>
                <span>Services</span>
                <ChevronDown size={16} className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <ul className="ml-5 mt-3 flex flex-col gap-2 border-l border-sky-500/30 pl-4">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link to="/services" className="text-sm text-gray-400 transition-colors hover:text-sky-400">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Business Hours Card */}
          <div className="mt-8 w-full max-w-md rounded-2xl border border-gray-700 bg-gray-900/50 p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
              <Clock3 size={16} />
              Business Hours
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between gap-4 whitespace-nowrap"><span>Mon - Fri</span><span className="text-gray-300 font-medium">8:00am - 6:00pm</span></li>
              <li className="flex justify-between gap-4 whitespace-nowrap"><span>Saturday</span><span className="text-gray-300 font-medium">9:00am - 2:00pm</span></li>
              <li className="flex justify-between gap-4 whitespace-nowrap"><span>Sunday</span><span className="text-gray-300 font-medium">Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Lead Capture Form */}
        <div className="lg:col-span-1 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Get a Quote</h3>
          <p className="text-sm text-gray-500 mb-6">Leave your details and we'll contact you.</p>
          
          <form className="flex flex-col gap-3 flex-1" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                aria-invalid={Boolean(errors.from_name)}
                aria-describedby={errors.from_name ? 'footer-name-error' : undefined}
                className={`w-full rounded-lg border bg-gray-800 px-4 py-2.5 text-white placeholder-gray-500 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${errors.from_name ? 'border-red-500' : 'border-gray-700 focus:border-sky-400'}`}
              />
              {errors.from_name && <p id="footer-name-error" className="mt-1 text-xs text-red-400">{errors.from_name}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'footer-phone-error' : undefined}
                className={`w-full rounded-lg border bg-gray-800 px-4 py-2.5 text-white placeholder-gray-500 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${errors.phone ? 'border-red-500' : 'border-gray-700 focus:border-sky-400'}`}
              />
              {errors.phone && <p id="footer-phone-error" className="mt-1 text-xs text-red-400">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                placeholder="Email Address"
                aria-invalid={Boolean(errors.from_email)}
                aria-describedby={errors.from_email ? 'footer-email-error' : undefined}
                className={`w-full rounded-lg border bg-gray-800 px-4 py-2.5 text-white placeholder-gray-500 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${errors.from_email ? 'border-red-500' : 'border-gray-700 focus:border-sky-400'}`}
              />
              {errors.from_email && <p id="footer-email-error" className="mt-1 text-xs text-red-400">{errors.from_email}</p>}
            </div>

            <div>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Service Address"
                aria-invalid={Boolean(errors.address)}
                aria-describedby={errors.address ? 'footer-address-error' : undefined}
                className={`w-full rounded-lg border bg-gray-800 px-4 py-2.5 text-white placeholder-gray-500 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${errors.address ? 'border-red-500' : 'border-gray-700 focus:border-sky-400'}`}
              />
              {errors.address && <p id="footer-address-error" className="mt-1 text-xs text-red-400">{errors.address}</p>}
            </div>

            <div>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? 'footer-service-error' : undefined}
                className={`w-full rounded-lg border bg-gray-800 px-4 py-2.5 text-gray-300 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${errors.service ? 'border-red-500' : 'border-gray-700 focus:border-sky-400'}`}
              >
                <option value="">Service Needed</option>
                {services.map((service) => <option key={service.name} value={service.name}>{service.name}</option>)}
              </select>
              {errors.service && <p id="footer-service-error" className="mt-1 text-xs text-red-400">{errors.service}</p>}
            </div>

            <div className="flex gap-3 text-xs text-gray-400">
              <span>Preferred contact:</span>
              {['Call', 'Text', 'Email'].map((method) => (
                <label key={method} className="flex items-center gap-1">
                  <input type="radio" name="contact_method" value={method} checked={form.contact_method === method} onChange={handleChange} />
                  {method}
                </label>
              ))}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
            >
              {sending ? 'Sending...' : 'Send'} <Send size={16} />
            </button>

            {submitted && (
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">
                <CheckCircle2 size={14} className="flex-shrink-0" />
                Thanks! We'll be in touch.
              </div>
            )}
            {submitError && <div className="mt-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">{submitError}</div>}
          </form>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 pt-8 text-center text-xs text-gray-500 md:flex-row md:text-left">
        <p>&copy; {new Date().getFullYear()} A&N Gutters. All rights reserved.</p>
        <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sky-300 font-medium">
          ✓ Licensed & Insured in NY
        </span>
      </div>
    </footer>
  );
}
