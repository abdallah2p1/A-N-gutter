import { Building2, CheckCircle2, Droplets, Hammer, Ruler, ShieldCheck, Wrench } from 'lucide-react';
import { services } from '../data/services';

const serviceDetails = {
  'Residential Gutter Installation': {
    icon: CheckCircle2,
    details: [
      ['5" K-Style', 'A dependable profile for standard residential homes.'],
      ['Custom Colors', 'Match your gutters to your home exterior.'],
    ],
  },
  'Gutter Repair & Maintenance': {
    icon: Wrench,
    details: [
      ['Leak Repair', 'Reseal joints and repair damaged sections.'],
      ['System Tune-Up', 'Realign sagging runs and secure loose hardware.'],
    ],
  },
  'Gutter Guards': {
    icon: ShieldCheck,
    details: [
      ['Debris Protection', 'Help keep leaves and buildup out of your gutters.'],
      ['Better Water Flow', 'Let rainwater pass through while blocking debris.'],
    ],
  },
  'Commercial Gutter Installation': {
    icon: Building2,
    details: [
      ['6" Commercial Profile', 'Built for larger buildings and higher water volume.'],
      ['Site-Fit Planning', 'Plan drainage around your property and operations.'],
    ],
  },
  'Custom Seamless Installation': {
    icon: Ruler,
    details: [
      ['Measured On Site', 'Every run is made to the exact dimensions of your home.'],
      ['Fewer Seams', 'Reduce leak points with precision-fitted lengths.'],
    ],
  },
  'Wood & Trim Repair': {
    icon: Hammer,
    details: [
      ['Fascia & Soffit', 'Repair the surfaces that support your gutter system.'],
      ['Rot Prevention', 'Restore a solid foundation before new gutters are installed.'],
    ],
  },
  'Cleaning Service': {
    icon: Droplets,
    details: [
      ['Seasonal Cleaning', 'Clear blockages and buildup before heavy rainfall.'],
      ['Downspout Check', 'Make sure water can move safely away from your home.'],
    ],
  },
};

const bannerClassName = 'flex flex-col overflow-hidden rounded-3xl bg-blue-700 text-white shadow-xl transition-transform duration-300 ease-out hover:-translate-y-1 md:min-h-[28rem] md:flex-row';
const contentClassName = 'flex min-w-0 flex-1 flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-12';
const detailClassName = 'rounded-2xl border border-blue-600 bg-blue-900/40 p-6';

function ServiceBanner({ image, alt, title, description, icon: Icon, details }) {
  return (
    <article className={bannerClassName}>
      <img src={image} alt={alt} className="h-64 w-full object-cover md:h-auto md:w-2/5" />
      <div className={contentClassName}>
        <div className="min-w-0 flex-1">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <Icon size={32} className="text-white" />
          </div>
          <h3 className="mb-4 text-3xl font-bold">{title}</h3>
          <p className="text-lg leading-relaxed text-blue-100">{description}</p>
        </div>

        <div className="flex w-full flex-1 flex-col gap-4">
          {details.map(([label, detailDescription]) => (
            <div key={label} className={detailClassName}>
              <strong className="mb-1 block text-xl text-orange-400">{label}</strong>
              <span className="text-blue-100">{detailDescription}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services-page" className="pt-32 pb-24 px-6 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Services</h2>
        <p className="text-xl text-slate-600">Comprehensive gutter solutions for every property size and type.</p>
      </div>
      
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        
        {/* Primary Service (Spans Full Width on Desktop) */}
        <ServiceBanner
          image={services[0].image}
          alt={services[0].alt}
          icon={CheckCircle2}
          title="Seamless Gutter Installation"
          description="Custom-fit seamless gutters and downspouts. All colors available to perfectly match your home's exterior."
          details={[
            ['Residential', '5” K-Style (For standard homes)'],
            ['Light Commercial', '6” K-Style (For larger buildings)'],
          ]}
        />

        {services.map((service) => {
          const { icon: Icon, details } = serviceDetails[service.name];

          return (
          <ServiceBanner
            key={service.name}
            image={service.image}
            alt={service.alt}
            icon={Icon}
            title={service.name}
            description={service.description}
            details={details}
          />
          );
        })}

      </div>
    </section>
  );
}
