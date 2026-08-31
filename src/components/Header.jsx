import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-display font-black tracking-tight text-royal-blue">
          A&N <span className="text-royal-blue">Gutters</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-text-dark font-medium hover:text-royal-blue transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          
          <a 
            href="tel:5555555555" 
            className="flex items-center gap-2 px-6 py-2.5 bg-royal-blue hover:bg-orange-600 text-white rounded-full font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-orange-500/30"
          >
            <Phone size={18} />
            Call Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-text-dark rounded-lg transition-transform hover:scale-105"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="block text-lg font-semibold text-text-dark hover:text-royal-blue"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a 
            href="tel:5555555555" 
            className="flex items-center justify-center gap-2 w-full mt-4 px-6 py-3 bg-safety-orange text-white rounded-full font-bold text-lg shadow-lg"
          >
            <Phone size={20} />
            Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
