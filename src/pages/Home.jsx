import { useState } from 'react';
import { ArrowRight, Quote, ShieldCheck, Star, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import vanImage from '../assets/vanPhoto.png';

const servicesData = [
  {
    title: "Residential Gutter Installation",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    description: "Protect your home's foundation with our premium seamless gutters, custom-fitted for maximum water flow and long-lasting durability.",
    backDescription: "Our residential seamless gutters are custom-measured and fabricated right at your home. This process ensures a perfect fit, eliminating ugly seams that are prone to leaks and rust. We use heavy-gauge aluminum and secure hidden hangers to guarantee your gutters withstand heavy snow, ice, and torrential rain, protecting your landscaping and foundation for years to come.",
    linkTo: "/services"
  },
  {
    title: "Gutter Repair & Maintenance",
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=800&auto=format&fit=crop",
    description: "Expert repair services to fix leaks, realign sagging gutters, and restore your system to optimal working condition year-round.",
    backDescription: "Don't let a minor leak become a major foundation problem. Our expert technicians can diagnose and repair common gutter issues including sagging sections, detached downspouts, corner leaks, and poor drainage. We offer comprehensive tune-ups to reinforce your existing system and extend its lifespan without the need for a full replacement.",
    linkTo: "/services"
  },
  {
    title: "LeafGuard Gutter Systems",
    image: "https://images.unsplash.com/photo-1620317377041-862f99587428?q=80&w=800&auto=format&fit=crop",
    description: "Never clean your gutters again. Our advanced guards prevent leaves and debris from clogging your system while handling heavy rainfall.",
    backDescription: "Tired of climbing dangerous ladders every fall? Our state-of-the-art leaf protection systems keep leaves, pine needles, and debris out while allowing maximum water flow into the gutter. We offer several styles of guards tailored to your home's specific surroundings, ensuring a lifetime of clog-free performance.",
    linkTo: "/services"
  },
  {
    title: "Commercial Gutter Installation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    description: "Heavy-duty commercial gutter systems designed to manage high volumes of water and protect your business property effectively.",
    backDescription: "Commercial buildings require specialized water management solutions. We install oversized 6-inch and custom box gutters designed to handle the massive runoff from large commercial roofs. Our commercial-grade materials and reinforced installations minimize liability and protect your investment from costly water damage.",
    linkTo: "/services"
  },
  {
    title: "Custom Seamless Installation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    description: "Manufactured on-site to the exact specifications of your home, eliminating seams to drastically reduce the chance of leaks.",
    backDescription: "Experience the ultimate in custom fabrication. We roll-form our seamless gutters on-site, perfectly matching the contours of your roofline. Available in over 30 colors, our custom installations not only provide superior water diversion but also enhance the curb appeal and architectural aesthetic of your property.",
    linkTo: "/services"
  },
  {
    title: "Jellyfish Permanent Exterior Lighting",
    image: "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=800&auto=format&fit=crop",
    description: "Elevate your home's aesthetics with smart, permanent exterior lighting that provides beautiful curb appeal and enhanced security.",
    backDescription: "Say goodbye to hanging holiday lights! We install premium, track-based permanent lighting systems that blend seamlessly into your fascia or gutters. Control millions of colors and dynamic patterns right from your smartphone. Perfect for holidays, game days, ambient architectural lighting, and added home security.",
    linkTo: "/services"
  }
];

function ServiceCard({ image, title, description, backDescription, linkTo }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group relative flex flex-col bg-transparent [perspective:1000px] cursor-pointer h-full"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-700 [transform-style:preserve-3d] border border-gray-100 ${isFlipped ? '[transform:rotateY(180deg)]' : 'hover:-translate-y-2'}`}>
        
        {/* Front */}
        <div className="relative w-full h-full [backface-visibility:hidden] flex flex-col bg-white rounded-[2rem] overflow-hidden">
          <div className="w-full h-60 overflow-hidden relative shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          <div className="absolute right-8 top-60 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-white group-hover:-translate-y-2 group-hover:rotate-[-10deg] transition-all duration-500 z-10 border border-gray-50">
             <ArrowRight size={24} className="transform group-hover:scale-110 transition-transform" />
          </div>

          <div className="p-8 pt-10 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/50">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-royal-blue transition-colors pr-4">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-royal-blue font-semibold text-sm">
              <span className="relative inline-flex items-center gap-2">
                Show more
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-blue transition-all duration-300 group-hover:w-full"></span>
              </span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col bg-gradient-to-br from-royal-blue to-blue-900 text-white rounded-[2rem] p-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 border-b border-white/20 pb-4">{title}</h3>
          <p className="text-blue-50 flex-grow leading-relaxed text-sm">
            {backDescription || description}
          </p>
          <div className="mt-auto pt-6 flex flex-col gap-3">
             <Link 
               to={linkTo} 
               onClick={(e) => e.stopPropagation()} 
               className="inline-flex items-center justify-center gap-2 w-full py-3 bg-safety-orange hover:bg-orange-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30"
             >
               Explore More <ArrowRight size={20} />
             </Link>
             <button 
               onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
               className="text-white/70 hover:text-white text-sm font-semibold transition-colors mt-2"
             >
               Go Back
             </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-bg-light font-sans text-text-dark">
      {/* Hero Section */}
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${vanImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center animate-fade-in-up mt-10">
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-sm mb-8 shadow-xl">
            <Star size={16} className="fill-blue-400 text-blue-400" />
            <span className="tracking-wide">Top-Rated Gutter Experts in NY</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-tight mb-8 text-white tracking-tight drop-shadow-2xl cursor-default">
            <span className="inline-block transition-all duration-300 hover:-translate-y-3 hover:text-blue-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Quality</span>{" "}
            <span className="inline-block transition-all duration-300 hover:-translate-y-3 hover:text-blue-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">That</span> <br className="hidden md:block" />
            <span className="group text-blue-400 relative inline-block mt-2 transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:text-blue-300 drop-shadow-lg hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.8)] z-10">
              Protects
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.0003 6.99967C37.0392 2.7661 113.805 -2.3168 198.001 6.99967" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 transition-opacity duration-300 group-hover:opacity-40" />
                <path d="M2.0003 6.99967C37.0392 2.7661 113.805 -2.3168 198.001 6.99967" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 stroke-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] [stroke-dasharray:210] [stroke-dashoffset:210] group-hover:[stroke-dashoffset:0] transition-all duration-[800ms] ease-out" />
              </svg>
            </span>{" "}
            <span className="inline-block transition-all duration-300 hover:-translate-y-3 hover:text-blue-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Your</span>{" "}
            <span className="inline-block transition-all duration-300 hover:-translate-y-3 hover:text-blue-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Home</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed font-medium drop-shadow-lg">
            Premium seamless gutters, reliable guards, and expert repairs. Keeping your home safe from water damage with precision and care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-royal-blue hover:bg-blue-600 text-white rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-2xl shadow-blue-500/40"
            >
              Get a Quote <ArrowRight size={22} className="transition-transform group-hover:translate-x-1.5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/50 hover:border-white rounded-full font-bold text-lg transition-all shadow-xl"
            >
              Our Services
            </Link>
          </div>

        </div>

        {/* Bottom Fluid Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-1 text-slate-50">
          <svg className="relative block w-full h-[50px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,191.7,101.4,236.4,88.1,280.29,71.21,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Trust Banner Section */}
      <section className="bg-slate-50 py-10 lg:py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center">
            <div className="font-bold text-slate-900 text-lg md:text-xl w-full tracking-tight">5-Year Warranty</div>
            <div className="font-bold text-slate-900 text-lg md:text-xl w-full tracking-tight">Free, Onsite Estimates</div>
            <div className="font-bold text-slate-900 text-lg md:text-xl w-full tracking-tight">5 Star Service</div>
            <div className="font-bold text-slate-900 text-lg md:text-xl w-full tracking-tight">Licensed & Insured</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-bg-light relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-royal-blue mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Expert solutions designed to effectively manage water flow and preserve your property's foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Bottom Fluid Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-1 text-slate-900">
          <svg className="relative block w-full h-[40px] lg:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-safety-orange/10 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto z-10 relative mb-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">What We Offer</h2>
            <p className="text-xl text-blue-100/80">Unmatched quality, premium materials, and total peace of mind for every homeowner.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Quality 1 */}
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-royal-blue rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">5-Year Warranty</h3>
                <p className="text-gray-300 leading-relaxed mb-8">We stand fully behind our work. Every installation comes with a comprehensive 5-year workmanship warranty to guarantee your peace of mind.</p>
                <Link to="/offers" className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                  View Details <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Quality 2 - Highlighted */}
            <div className="group relative bg-gradient-to-b from-royal-blue to-blue-900 border border-blue-400/30 rounded-3xl p-8 transition-all duration-500 overflow-hidden hover:-translate-y-4 shadow-[0_0_40px_rgba(37,99,235,0.2)] md:-translate-y-4">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety-orange via-yellow-400 to-safety-orange"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-safety-orange/20 rounded-full blur-[80px] group-hover:bg-safety-orange/30 transition-colors duration-500"></div>
              <div className="relative z-10">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-safety-orange/20 text-safety-orange text-xs font-black uppercase tracking-wider rounded-full border border-safety-orange/30 backdrop-blur-md">Top Quality</div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-safety-orange to-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform duration-500 mt-2">
                  <Star size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Premium Materials</h3>
                <p className="text-blue-100/90 leading-relaxed mb-8">We never cut corners. By using only heavy-gauge aluminum and high-strength hidden hangers, we ensure your gutters survive the harshest winters.</p>
                <Link to="/offers" className="inline-flex items-center gap-2 text-safety-orange font-semibold group-hover:text-orange-400 transition-colors">
                  View Details <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Quality 3 */}
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-safety-orange rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform duration-500">
                  <Wrench size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Craftsmanship</h3>
                <p className="text-gray-300 leading-relaxed mb-8">Our installers are highly trained professionals who custom-fabricate your seamless gutters on-site for a perfect, leak-free fit to your home.</p>
                <Link to="/offers" className="inline-flex items-center gap-2 text-orange-400 font-semibold group-hover:text-orange-300 transition-colors">
                  View Details <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
        
        {/* Bottom Fluid Wave Divider to transition to Trust Banner (bg-royal-blue) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-1 text-royal-blue">
          <svg className="relative block w-full h-[40px] lg:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Trust / Social Proof Banner */}
      <section className="bg-royal-blue py-20 px-6 text-white relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8">
              Why Homeowners Trust A&N Gutters
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-xl backdrop-blur-sm border border-white/20">
                <ShieldCheck className="text-safety-orange" size={28} />
                <span className="font-bold text-lg">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-xl backdrop-blur-sm border border-white/20">
                <span className="text-safety-orange font-bold text-2xl">$0</span>
                <span className="font-bold text-lg">Free Estimates</span>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-safety-orange hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-lg"
            >
              Request Your Free Estimate
            </Link>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white text-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl relative">
              <Quote className="absolute top-6 left-6 text-blue-100" size={64} strokeWidth={1} />
              <div className="relative z-10">
                <div className="flex items-center gap-1 text-safety-orange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl italic font-medium leading-relaxed mb-6">
                  "A&N Gutters did an exceptional job on our home. They were professional, quick, and the new seamless gutters look fantastic. Highly recommend them for anyone in the Buffalo area!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                    SM
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah Mitchell</h4>
                    <p className="text-gray-500 text-sm">Homeowner, Buffalo NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
