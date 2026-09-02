import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/Untitled design.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Change background style when scrolled past top
      setScrolled(currentScrollY > 20);
      
      // Hide on scroll down (past 100px), show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Scroll to top when a link is clicked
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'What we offer', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-4 mt-4 pointer-events-none transition-transform duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-[150%]'
    }`}>
      <header className={`pointer-events-auto max-w-7xl mx-auto rounded-sm transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg shadow-gray-200/50 py-3' : 'bg-white/95 backdrop-blur-md py-4 border border-gray-100 shadow-sm'
      }`}>
        <div className="px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={logoImg} 
              alt="A&N Gutters Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-third-grey font-medium px-5 py-2 rounded-full hover:bg-gray-100 hover:text-royal-blue transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <a
              href="tel:5555555555"
              className="ml-2 flex items-center gap-2 px-6 py-2.5 bg-royal-blue hover:bg-third-grey text-safety-white rounded-xl font-bold transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg shadow-blue-500/20"
            >
              <Phone size={18} />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-third-grey rounded-lg transition-transform hover:scale-105 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 mt-3 mx-4 bg-white shadow-xl rounded-3xl border border-gray-100 py-4 px-6 flex flex-col gap-2 pointer-events-auto">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={handleLinkClick}
                    className="block px-4 py-3 rounded-xl text-lg font-semibold text-third-grey hover:bg-gray-50 hover:text-royal-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a 
              href="tel:5555555555" 
              className="flex items-center justify-center gap-2 w-full mt-2 px-6 py-3 bg-royal-blue hover:bg-third-grey text-safety-white rounded-xl font-bold text-lg shadow-md transition-colors"
            >
              <Phone size={20} />
              Call Now
            </a>
          </nav>
        )}
      </header>
    </div>
  );
}
