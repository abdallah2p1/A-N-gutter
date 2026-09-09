import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock3, ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { quoteServiceOptions } from '../data/quoteServices';
import ScrollReveal from './ScrollReveal';
import { sendQuoteEmail } from '../utils/sendQuoteEmail';

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSubmitError('');
    setSending(true);

    try {
      await sendQuoteEmail({
        from_name: form.name,
        phone: form.phone,
        from_email: form.email,
        service: form.service,
        message: form.message,
      });
      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (error) {
      if (error.validationErrors) {
        setErrors({
          name: error.validationErrors.from_name,
          phone: error.validationErrors.phone,
          email: error.validationErrors.from_email,
          service: error.validationErrors.service,
        });
      } else {
        setSubmitError('Something went wrong. Please try again or call us directly at (716) 495-3652');
      }
    } finally {
      setSending(false);
    }
  };

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

  return (
    <footer className="bg-slate-900 text-gray-300 py-16 px-6 font-sans relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Footer Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 border-b border-white/10 pb-12 mb-8">
        
        {/* Brand & Contact Info */}
        <ScrollReveal className="lg:col-span-1 flex flex-col">
          <h2 className="text-3xl font-display font-black text-white mb-6">
            A&N <span className="text-blue-400">Gutters</span>
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-gray-900 text-blue-400 transition-all duration-300 hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-700/20"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <a href="tel:+17164953652" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/10 text-blue-400 ring-1 ring-blue-400/30 group-hover:bg-blue-700 group-hover:text-white transition-colors flex-shrink-0">
                <Phone size={18} />
              </div>
              <span className="font-medium">(716) 495-3652</span>
            </a>
            <a href="mailto:info@anconstructionpros.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/10 text-blue-400 ring-1 ring-blue-400/30 group-hover:bg-blue-700 group-hover:text-white transition-colors flex-shrink-0">
                <Mail size={18} />
              </div>
              <span className="font-medium">Info@anconstructionpros.com</span>
            </a>
            <div className="flex items-center gap-3 text-gray-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/10 text-blue-400 ring-1 ring-blue-400/30 transition-colors flex-shrink-0">
                <MapPin size={18} />
              </div>
              <span className="font-medium">Buffalo, Rochester & Surrounding areas</span>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Quick Links */}
        <ScrollReveal delay={0.1} className="lg:col-span-1 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Quick Links</h3>
          <ul className="flex flex-col gap-3 mb-auto">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 text-gray-400 transition-colors hover:text-blue-700 font-medium group"
                >
                  <span className="text-blue-400 text-sm">▸</span>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
                className="flex w-full items-center gap-2 text-left text-gray-400 transition-colors hover:text-blue-700 font-medium group"
              >
                <span className="text-blue-400 text-sm">▸</span>
                <span>Services</span>
                <ChevronDown size={16} className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <ul className="ml-5 mt-3 flex flex-col gap-2 border-l border-blue-400/30 pl-4">
                  {quoteServiceOptions.filter(service => service !== 'Other').map((service) => (
                      <li key={service}>
                      <Link to="/services" className="text-sm text-gray-400 transition-colors hover:text-blue-700">
                          {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Business Hours Card */}
          <div className="mt-8 w-full max-w-md rounded-2xl border border-gray-700 bg-gray-900/50 p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
              <Clock3 size={16} />
              Business Hours
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between gap-4 whitespace-nowrap"><span>Mon - Sat</span><span className="text-gray-300 font-medium">7:00am - 5:00pm</span></li>
              <li className="flex justify-between gap-4 whitespace-nowrap"><span>Sunday</span><span className="text-gray-300 font-medium">Closed</span></li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Call To Action Form */}
        <ScrollReveal delay={0.2} className="lg:col-span-1 flex flex-col">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/20 border border-blue-500/20 rounded-3xl p-6 md:p-8 h-full flex flex-col shadow-lg relative overflow-hidden transition-colors duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[50px]"></div>
            
            <h3 className="text-xl font-display font-bold text-white mb-2 relative z-10">Get a Free Quote</h3>
            <p className="text-blue-100/80 mb-6 text-sm relative z-10">
              Schedule your free, no-obligation estimate today.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10" noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder:text-blue-200/50 text-sm`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.phone ? 'border-red-400' : 'border-white/20'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder:text-blue-200/50 text-sm`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder:text-blue-200/50 text-sm`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
                </div>
              </div>

              <div>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.service ? 'border-red-400' : 'border-white/20'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white text-sm [&>option]:text-slate-900`}
                >
                  <option value="" disabled>Service Needed</option>
                  {quoteServiceOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-xs text-red-300">{errors.service}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  rows={2}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder:text-blue-200/50 text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={sending}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-bold text-white transition-all hover:bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] focus:outline-none"
              >
                {sending ? 'Sending...' : 'Get My Free Quote'} <ArrowRight size={16} />
              </button>

              {submitted && (
                <div className="mt-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 p-3 text-emerald-100 text-sm text-center">
                  Thank you! We've received your request and will be in touch shortly.
                </div>
              )}
              {submitError && (
                <div className="mt-2 rounded-xl bg-red-500/20 border border-red-400/30 p-3 text-red-100 text-sm text-center">
                  {submitError}
                </div>
              )}
            </form>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 pt-8 text-center text-xs text-gray-500 md:flex-row md:text-left">
        <p>&copy; {new Date().getFullYear()} A&N Gutters. All rights reserved.</p>
        <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-blue-400 font-medium">
          ✓ Licensed & Insured in Western NY
        </span>
      </div>
    </footer>
  );
}
