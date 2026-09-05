import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const serviceDetails = {
  'Seamless Gutter Installation': ['On-site measurements', 'Custom-fit seamless runs', 'Multiple color options'],
  'Residential Gutter Installation': ['Custom gutter sizing', 'Downspout placement planning', 'Clean installation finish'],
  'Gutter Repair & Maintenance': ['Leak and seam repairs', 'Sagging gutter realignment', 'Hardware and seal checks'],
  'Gutter Guards': ['Debris-blocking protection', 'Water-flow inspection', 'Guard system recommendations'],
  'Commercial Gutter Installation': ['Commercial-grade profiles', 'High-volume drainage planning', 'Property-specific installation'],
  'Custom Seamless Installation': ['Precise on-site fabrication', 'Reduced leak points', 'Exterior color matching'],
  'Wood & Trim Repair': ['Fascia board repairs', 'Soffit and trim restoration', 'Rot-damage assessment'],
  'Cleaning Service': ['Gutter channel clearing', 'Downspout flow checks', 'Seasonal maintenance guidance'],
};

function ServiceBlock({ image, alt, title, description, index }) {
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleExpanded = () => setIsExpanded((expanded) => !expanded);

  const handleBlockKeyDown = (event) => {
    if (event.currentTarget !== event.target) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleExpanded();
    }
  };

  return (
    <article
      ref={blockRef}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onClick={toggleExpanded}
      onKeyDown={handleBlockKeyDown}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group mb-6 flex w-full cursor-pointer flex-col rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[opacity,transform,box-shadow] duration-500 ease-out last:mb-0 focus:outline-none focus:ring-2 focus:ring-royal-blue/40 md:flex-row md:hover:-translate-y-1 md:hover:duration-[250ms] md:hover:ease-in-out md:hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
    >
      <div className="h-[200px] w-full overflow-hidden rounded-xl md:h-[200px] md:w-[280px] md:flex-none">
        <img src={image} alt={alt} className="h-full w-full object-cover transition-transform duration-[400ms] ease-in-out md:group-hover:scale-105" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col pt-6 md:pl-8 md:pt-0">
        <h3 className="mb-3 text-[22px] font-bold text-[#111827]">{title}</h3>
        <p className="text-[15px] font-normal leading-[1.6] text-[#6B7280]">{description}</p>

        <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isExpanded ? 'mt-6 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="min-h-0 overflow-hidden">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="mb-2 text-sm font-semibold text-[#111827]">What's included</p>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#6B7280]">
                {serviceDetails[title].map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-[#D1D5DB] px-4 py-2 text-sm font-semibold text-[#374151] transition-[background-color,border-color,color] duration-200 ease-in-out group-hover:border-royal-blue group-hover:bg-royal-blue group-hover:text-white"
          >
            {isExpanded ? 'Show Less' : 'See More Details'}
            <ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          <Link
            to="/contact"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center justify-center rounded-lg bg-royal-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services-page" className="pt-32 pb-24 px-6 min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-black text-royal-blue mb-4">Our Services</h2>
        <p className="text-xl text-gray-600">
          Expert solutions designed to effectively manage water flow and preserve your property's foundation.
        </p>
      </div>
      
      <div className="mx-auto flex max-w-7xl flex-col">
        <ServiceBlock
          image={services[0].image}
          alt={services[0].alt}
          title="Seamless Gutter Installation"
          description="Custom-fit seamless gutters and downspouts. All colors available to perfectly match your home's exterior."
          index={0}
        />

        {services.map((service) => (
          <ServiceBlock
            key={service.name}
            image={service.image}
            alt={service.alt}
            title={service.name}
            description={service.description}
            index={services.indexOf(service) + 1}
          />
        ))}

      </div>
    </section>
  );
}
