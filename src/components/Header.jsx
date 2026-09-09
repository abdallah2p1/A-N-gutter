import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/f2c1c379-c95d-4626-919d-88c4132c3b87 (2).webp';
import { services } from '../data/services';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);
      
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesExpanded(false);
  }, [location]);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setServicesExpanded(false);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-4 mt-4 pointer-events-none transition-transform duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-[150%]'
    }`}>
      <header className={`pointer-events-auto max-w-7xl mx-auto rounded-xl transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg shadow-gray-200/50 py-3' : 'bg-white/95 backdrop-blur-md py-4 border border-gray-100 shadow-sm'
      }`}>
        <div className="px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={logoImg} 
              alt="A&N Gutters Logo" 
              className="h-14 md:h-16 lg:h-18 w-auto object-contain" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-2">
              <li>
                <Link 
                  to="/"
                  onClick={handleLinkClick}
                  className="text-third-grey font-medium px-5 py-2 rounded-full hover:bg-gray-100 hover:text-blue-700 transition-all"
                >
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <Link 
                  to="/services"
                  className="flex items-center gap-1 text-third-grey font-medium px-5 py-2 rounded-full hover:bg-gray-100 hover:text-blue-700 transition-all cursor-pointer"
                >
                  Services
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col p-2">
                    {services.map(service => (
                      <Link 
                        key={service.slug}
                        to={`/services?service=${service.slug}`}
                        onClick={handleLinkClick}
                        className="px-4 py-3 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-sm font-semibold rounded-xl transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link 
                  to="/offers"
                  onClick={handleLinkClick}
                  className="text-third-grey font-medium px-5 py-2 rounded-full hover:bg-gray-100 hover:text-blue-700 transition-all"
                >
                  What we offer
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-third-grey font-medium px-5 py-2 rounded-full hover:bg-gray-100 hover:text-blue-700 transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            <a
              href="tel:+17164953652"
              className="ml-2 flex items-center gap-2 px-6 py-2.5 bg-blue-400 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg shadow-blue-500/20"
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
              <li>
                <Link 
                  to="/" 
                  onClick={handleLinkClick}
                  className="block px-4 py-3 rounded-xl text-lg font-semibold text-third-grey hover:bg-gray-50 hover:text-blue-700 transition-colors"
                >
                  Home
                </Link>
              </li>
              
              {/* Mobile Services Dropdown */}
              <li className="flex flex-col">
                <div 
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-lg font-semibold text-third-grey hover:bg-gray-50 hover:text-blue-700 transition-colors cursor-pointer"
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                >
                  <Link to="/services" onClick={(e) => { e.stopPropagation(); handleLinkClick(); }}>Services</Link>
                  <button className="p-1"><ChevronDown size={20} className={`transition-transform ${servicesExpanded ? 'rotate-180' : ''}`} /></button>
                </div>
                {servicesExpanded && (
                  <div className="flex flex-col gap-1 pl-6 mt-1 border-l-2 border-gray-100 ml-4 mb-2">
                    {services.map(service => (
                      <Link 
                        key={service.slug}
                        to={`/services?service=${service.slug}`}
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-700"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link 
                  to="/offers" 
                  onClick={handleLinkClick}
                  className="block px-4 py-3 rounded-xl text-lg font-semibold text-third-grey hover:bg-gray-50 hover:text-blue-700 transition-colors"
                >
                  What we offer
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={handleLinkClick}
                  className="block px-4 py-3 rounded-xl text-lg font-semibold text-third-grey hover:bg-gray-50 hover:text-blue-700 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <a
              href="tel:+17164953652"
              className="flex items-center justify-center gap-2 w-full mt-4 px-6 py-3 bg-blue-400 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-md transition-colors"
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

