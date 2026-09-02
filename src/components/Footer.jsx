import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'What we offer', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-gray-800 pb-16 mb-8">
        
        {/* Brand & Contact Info */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-display font-black text-white mb-6">
            A&N <span className="text-safety-orange">Gutters</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
            Professional seamless gutter installation, guards, and repair services since 2018. Quality that protects your home.
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="tel:5555555555" className="flex items-center gap-3 hover:text-white transition-colors group">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-safety-orange transition-colors">
                <Phone size={18} />
              </div>
              <span className="font-medium">(555) 555-5555</span>
            </a>
            <a href="mailto:info@angutters.com" className="flex items-center gap-3 hover:text-white transition-colors group">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-safety-orange transition-colors">
                <Mail size={18} />
              </div>
              <span className="font-medium">info@angutters.com</span>
            </a>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <span className="font-medium">Buffalo & Rochester, NY</span>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="lg:col-span-3 lg:col-start-6">
          <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="hover:text-safety-orange transition-colors flex items-center gap-2 group"
                >
                  <span className="text-royal-blue group-hover:text-safety-orange transition-colors">▸</span> 
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Lead Capture Form */}
        <div className="lg:col-span-4">
          <h3 className="text-xl font-bold text-white mb-6">Get a Free Quote</h3>
          <p className="text-sm text-gray-400 mb-4">Leave your details and we'll get back to you shortly.</p>
          
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-royal-blue text-white placeholder-gray-500 transition-colors"
              required
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-royal-blue text-white placeholder-gray-500 transition-colors"
              required
            />
            <textarea 
              placeholder="How can we help?" 
              rows="3"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-royal-blue text-white placeholder-gray-500 transition-colors resize-none"
            ></textarea>
            <button 
              type="submit" 
              className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-safety-orange hover:bg-orange-600 text-white rounded-lg font-bold transition-colors"
            >
              Send Request <Send size={16} />
            </button>
          </form>
        </div>

      </div>
      
      <div className="text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
        <p>&copy; {new Date().getFullYear()} A&N Gutters. All rights reserved.</p>
        <p>Fully Licensed & Insured in New York State</p>
      </div>
    </footer>
  );
}
