import { useState, useRef, useEffect } from 'react';
import { MapPin, Clock, Mail, Phone, ShieldCheck, Star, CheckCircle2, ChevronDown, X, Info } from 'lucide-react';
import { sendQuoteEmail } from '../utils/sendQuoteEmail';
import { quoteServiceOptions } from '../data/quoteServices';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  services: [],
  customService: '',
  preferredContact: 'Call',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const handleServiceChange = (serviceOption) => {
    setForm((prev) => {
      const isSelected = prev.services.includes(serviceOption);
      const newServices = isSelected 
        ? prev.services.filter(s => s !== serviceOption)
        : [...prev.services, serviceOption];
        
      return {
        ...prev,
        services: newServices,
        ...(!newServices.includes('Other') ? { customService: '' } : {}),
      };
    });

    setErrors((prev) => ({
      ...prev,
      services: '',
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setSubmitError('');
    setSending(true);

    if (form.services.includes('Other') && !form.customService.trim()) {
      setErrors({ customService: 'Please describe what you need.' });
      setSending(false);
      return;
    }

    try {
      await sendQuoteEmail({
        from_name: form.name,
        phone: form.phone,
        from_email: form.email,
        address: form.address,
        service: form.services,
        customService: form.customService,
        contact_method: form.preferredContact,
        message: "",
      });
      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      if (error.validationErrors) {
        setErrors({
          name: error.validationErrors.from_name,
          phone: error.validationErrors.phone,
          email: error.validationErrors.from_email,
          services: error.validationErrors.service,
        });
      } else {
        setSubmitError('Something went wrong. Please try again or call us directly at (716) 495-3652');
      }
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
            href="tel:+17164953652"
            className="inline-flex items-center gap-3 w-fit rounded-full bg-blue-400 px-5 py-3 text-lg font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 mb-5"
          >
            <Phone className="h-5 w-5" />
            (716) 495-3652
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
            <div className="group flex gap-5 items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-300 cursor-default">
              <div className="p-3 rounded-2xl bg-blue-50 group-hover:bg-blue-400 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">Service Areas</h4>
                <p className="text-slate-600">Buffalo, Rochester & Surrounding areas</p>
              </div>
            </div>

            <a href="mailto:Info@anconstructionpros.com" className="group flex gap-5 items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-300">
              <div className="p-3 rounded-2xl bg-blue-50 group-hover:bg-blue-400 transition-colors duration-300">
                <Mail className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">Email</h4>
                <p className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300">Info@anconstructionpros.com</p>
              </div>
            </a>

            <div className="group flex gap-5 items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-300 cursor-default">
              <div className="p-3 rounded-2xl bg-blue-50 group-hover:bg-blue-400 transition-colors duration-300">
                <Clock className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">Experience</h4>
                <p className="text-slate-600">8 Years in Business (Since 2018)</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-6 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-[40px] group-hover:bg-blue-400/20 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-blue-700 font-bold mb-3 tracking-wide uppercase text-xs">
                <ShieldCheck className="h-5 w-5" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-1 text-amber-500 mb-3" aria-label="5 star rating">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold text-slate-700">4.9/5 from local homeowners</span>
              </div>
              <p className="text-slate-700 font-medium italic text-lg border-l-2 border-blue-400 pl-4 py-1">“Professional, quick, and the gutters look amazing.”</p>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 p-8 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-500/30 border border-blue-300/50">
          
          {/* Decorative Elements */}
          <div className="absolute -right-24 -top-24 w-64 h-64 bg-white/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-blue-800/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="mb-10 text-center sm:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-[0.2em] text-blue-50 mb-4 backdrop-blur-sm">Free Estimate</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Request a Quote</h3>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block text-blue-50 font-medium mb-2 ml-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-5 py-4 bg-white/95 border-0 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/40 transition-all text-slate-900 placeholder:text-slate-400 text-base shadow-inner ${errors.name ? 'ring-4 ring-red-400 focus:ring-red-500' : ''}`}
                />
                {errors.name && <p id="name-error" className="mt-2 text-sm text-red-200 ml-1 font-medium">{errors.name}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-blue-50 font-medium mb-2 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(716) 495-3652"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full px-5 py-4 bg-white/95 border-0 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/40 transition-all text-slate-900 placeholder:text-slate-400 text-base shadow-inner ${errors.phone ? 'ring-4 ring-red-400 focus:ring-red-500' : ''}`}
                  />
                  {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-200 ml-1 font-medium">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-blue-50 font-medium mb-2 ml-1">Email Address</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-5 py-4 bg-white/95 border-0 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/40 transition-all text-slate-900 placeholder:text-slate-400 text-base shadow-inner ${errors.email ? 'ring-4 ring-red-400 focus:ring-red-500' : ''}`}
                  />
                  {errors.email && <p id="email-error" className="mt-2 text-sm text-red-200 ml-1 font-medium">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-blue-50 font-medium mb-2 ml-1">Property Address</label>
                <input 
                  type="text"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="123 Main Street, Buffalo, NY"
                  aria-invalid={Boolean(errors.address)}
                  aria-describedby={errors.address ? 'address-error' : undefined}
                  className={`w-full px-5 py-4 bg-white/95 border-0 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/40 transition-all text-slate-900 placeholder:text-slate-400 text-base shadow-inner ${errors.address ? 'ring-4 ring-red-400 focus:ring-red-500' : ''}`}
                />
                {errors.address && <p id="address-error" className="mt-2 text-sm text-red-200 ml-1 font-medium">{errors.address}</p>}
              </div>

              <div className="relative" ref={dropdownRef}>
                <label className="block text-blue-50 font-medium mb-3 ml-1">Services Needed</label>
                
                <div 
                  className={`w-full min-h-[3.5rem] px-5 py-3 bg-white/95 border-0 rounded-2xl transition-all shadow-inner cursor-pointer flex flex-wrap items-center gap-2 relative pr-12 ${errors.services ? 'ring-4 ring-red-400 focus:ring-red-500' : 'focus-within:ring-4 focus-within:ring-white/40'}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {form.services.length === 0 ? (
                    <span className="text-slate-400">Select your services...</span>
                  ) : (
                    form.services.map((option) => (
                      <span 
                        key={option} 
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 font-semibold text-sm rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceChange(option);
                        }}
                      >
                        {option}
                        <X size={14} className="hover:text-blue-900 cursor-pointer" />
                      </span>
                    ))
                  )}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <ChevronDown size={20} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-20 top-[calc(100%+0.5rem)] left-0 w-full bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    <div className="max-h-60 overflow-y-auto">
                      {quoteServiceOptions.map((option) => (
                        <label 
                          key={option} 
                          className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={form.services.includes(option)}
                            onChange={() => handleServiceChange(option)}
                            className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                          />
                          <span className={`font-medium ${form.services.includes(option) ? 'text-blue-700' : 'text-slate-700'}`}>
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                
                {errors.services && <p id="service-error" className="mt-2 text-sm text-red-200 ml-1 font-medium">{errors.services}</p>}

                {/* Always-visible discount message */}
                <div className="mt-4 animate-in fade-in zoom-in duration-300">
                  {form.services.length >= 2 ? (
                    <div className="flex items-center gap-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30 px-5 py-4 text-emerald-50 shadow-inner">
                      <CheckCircle2 size={24} className="text-emerald-400 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        <strong>Bundle & Save 15%:</strong> You've selected multiple services! You automatically qualify for a 15% discount on your total invoice.
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 px-5 py-4 text-blue-50 shadow-inner backdrop-blur-sm">
                      <Info size={24} className="text-blue-200 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        <strong>Bundle & Save:</strong> Select 2 or more services to qualify for a <strong>15% discount</strong> on your total invoice!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {form.services.includes('Other') && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                  <label htmlFor="customService" className="block text-blue-50 font-medium mb-2 ml-1">Please describe what you need</label>
                  <input
                    type="text"
                    id="customService"
                    name="customService"
                    value={form.customService}
                    onChange={handleChange}
                    placeholder="Briefly describe your project..."
                    required
                    aria-invalid={Boolean(errors.customService)}
                    aria-describedby={errors.customService ? 'custom-service-error' : undefined}
                    className={`w-full px-5 py-4 bg-white/95 border-0 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/40 transition-all text-slate-900 placeholder:text-slate-400 text-base shadow-inner ${errors.customService ? 'ring-4 ring-red-400 focus:ring-red-500' : ''}`}
                  />
                  {errors.customService && <p id="custom-service-error" className="mt-2 text-sm text-red-200 ml-1 font-medium">{errors.customService}</p>}
                </div>
              )}

              <div>
                <label className="block text-blue-50 font-medium mb-3 ml-1">Preferred Contact Method</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  {['Call', 'Text', 'Email'].map((method) => (
                    <label 
                      key={method} 
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 cursor-pointer transition-all duration-300 has-[:checked]:bg-white has-[:checked]:text-blue-700 has-[:checked]:border-white has-[:checked]:shadow-md text-white font-semibold backdrop-blur-sm"
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={form.preferredContact === method}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
                {errors.preferredContact && <p className="mt-2 text-sm text-red-200 ml-1 font-medium">{errors.preferredContact}</p>}
              </div>
              
              <button 
                type="submit"
                disabled={sending}
                className="w-full py-4 mt-4 bg-white text-blue-700 rounded-2xl font-black text-lg shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] transform hover:-translate-y-1 hover:bg-slate-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 flex items-center justify-center gap-2"
              >
                {sending ? 'Sending Request...' : 'Get My Free Quote'}
              </button>

              <p className="text-center text-sm font-medium text-blue-100/80 mt-2">
                No spam — we'll only contact you about your service.
              </p>

              {submitted && (
                <div className="rounded-2xl border border-green-300/50 bg-green-500/20 backdrop-blur-md px-5 py-4 text-white font-medium text-center shadow-inner animate-in fade-in zoom-in duration-300">
                  Thank you! We've received your request and will be in touch shortly.
                </div>
              )}

              {submitError && (
                <div className="rounded-2xl border border-red-300/50 bg-red-500/20 backdrop-blur-md px-5 py-4 text-white font-medium text-center shadow-inner animate-in fade-in zoom-in duration-300">
                  {submitError}
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

