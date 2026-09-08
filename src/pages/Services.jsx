import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { services } from '../data/services';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function ServiceBlock({ image, alt, title, description, slug, index, onOpenModal }) {
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (blockRef.current) observer.observe(blockRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={blockRef}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group mb-8 flex w-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-500 ease-out last:mb-0 md:flex-row hover:-translate-y-3 hover:shadow-2xl hover:shadow-royal-blue/20 hover:border-royal-blue/40 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      onClick={() => onOpenModal(slug)}
    >
      <div className="h-[200px] w-full overflow-hidden rounded-2xl md:h-[220px] md:w-[320px] md:flex-none">
        <img src={image} alt={alt} className="h-full w-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-110" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col pt-6 md:pl-8 md:pt-0">
        <h3 className="mb-3 text-[22px] font-bold text-[#111827]">{title}</h3>
        <p className="text-[15px] font-normal leading-[1.6] text-[#6B7280]">{description}</p>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 mt-auto">
          <button
            className="inline-flex items-center gap-2 rounded-lg border border-[#D1D5DB] px-4 py-2 text-sm font-semibold text-[#374151] transition-all duration-300 ease-in-out group-hover:border-royal-blue group-hover:bg-royal-blue group-hover:text-white"
          >
            See More Details
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <Link
            to="/contact"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center rounded-lg bg-royal-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </article>
  );
}

function ServiceModal({ service, onClose }) {
  const containerRef = useRef(null);
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useGSAP(() => {
    // Backdrop animation
    gsap.fromTo(backdropRef.current,
      { opacity: 0, backdropFilter: "blur(0px)" },
      { opacity: 1, backdropFilter: "blur(4px)", duration: 0.4, ease: "power2.out" }
    );
    
    // Modal pop-in animation
    gsap.fromTo(modalRef.current,
      { scale: 0.85, y: 40, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.4)", delay: 0.05 }
    );
  }, { scope: containerRef });

  const handleClose = () => {
    // Pop-out animation
    gsap.to(modalRef.current, {
      scale: 0.9, y: 30, opacity: 0, duration: 0.3, ease: "power2.in"
    });
    gsap.to(backdropRef.current, {
      opacity: 0, backdropFilter: "blur(0px)", duration: 0.3, delay: 0.1, ease: "power2.in",
      onComplete: onClose
    });
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Interactive Backdrop */}
      <div 
        ref={backdropRef}
        className="absolute inset-0 bg-slate-900/60" 
        onClick={handleClose} 
      />

      {/* Modal Container */}
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-7xl rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden relative flex flex-col md:flex-row h-[90vh] sm:h-[85vh] opacity-0"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2.5 shadow-lg backdrop-blur-md transition-all hover:scale-110"
        >
          <X size={20} className="stroke-[3px]" />
        </button>

        {/* Left Column: Sticky Photo */}
        <div className="relative w-full md:w-5/12 h-64 md:h-full shrink-0 order-1 md:order-1">
          <img src={service.image} alt={service.alt} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
        </div>

        {/* Right Column: Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 order-2 md:order-2 flex flex-col">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 mb-6">{service.title}</h2>
          
          <h3 className="text-2xl font-bold text-royal-blue mb-4">Service Overview</h3>
          <p className="text-slate-600 leading-relaxed text-lg mb-10">
            {service.fullDescription}
          </p>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included:</h3>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-100 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="text-royal-blue" size={16} />
                  </div>
                  <span className="text-slate-700 font-medium text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-6">
            <Link 
              to="/contact" 
              className="inline-flex justify-center items-center bg-royal-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSlug = searchParams.get('service');

  const handleOpenModal = (slug) => {
    setSearchParams({ service: slug });
  };

  const handleCloseModal = () => {
    setSearchParams({});
  };

  const selectedService = services.find(s => s.slug === selectedSlug);

  return (
    <>
      <section id="services-page" className="pt-32 pb-24 px-6 min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-royal-blue mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Expert solutions designed to effectively manage water flow and preserve your property's foundation.
          </p>
        </div>
        
        <div className="mx-auto flex max-w-7xl flex-col">
          {services.map((service, idx) => (
            <ServiceBlock
              key={service.slug}
              image={service.image}
              alt={service.alt}
              title={service.title}
              description={service.shortDescription}
              slug={service.slug}
              index={idx}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </section>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
}
