import { ShieldCheck, Droplets, Wrench, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-bg-light font-sans text-text-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="relative z-10 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-display font-black leading-tight mb-6 text-royal-blue">
              Quality That Protects Your Home
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Premium seamless gutters, reliable guards, and expert repairs. Keeping your home safe from water damage with precision and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-safety-orange hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-orange-500/30"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right Content - Van Placeholder */}
          <div className="relative z-10 flex justify-center lg:justify-end animate-fade-in-up mt-10 lg:mt-0">
            <div className="relative w-full max-w-lg aspect-video bg-gray-100 border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center shadow-inner overflow-hidden">
              <span className="text-gray-400 font-medium mb-2">Transparent Van PNG</span>
              <span className="text-sm text-gray-400">(Placeholder for branded van)</span>
              
              {/* Decorative blobs behind placeholder */}
              <div className="absolute -z-10 w-64 h-64 bg-royal-blue/10 rounded-full blur-3xl -top-10 -right-10"></div>
              <div className="absolute -z-10 w-48 h-48 bg-safety-orange/10 rounded-full blur-2xl -bottom-10 -left-10"></div>
            </div>
          </div>
        </div>

        {/* Bottom Fluid Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-1 text-bg-light">
          <svg className="relative block w-full h-[50px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,191.7,101.4,236.4,88.1,280.29,71.21,321.39,56.44Z" fill="currentColor"></path>
          </svg>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow group">
              <div className="w-16 h-16 bg-blue-50 text-royal-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-blue group-hover:text-white transition-colors">
                <Droplets size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Gutters</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Custom-fit 5" residential and 6" light commercial K-Style gutters, crafted on-site for a perfect, leak-free fit.
              </p>
              <Link to="/services" className="text-royal-blue font-semibold flex items-center gap-2 group-hover:text-safety-orange transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow group">
              <div className="w-16 h-16 bg-blue-50 text-royal-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-blue group-hover:text-white transition-colors">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gutter Guards & Cleaning</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Keep debris out with premium guards, or rely on our thorough cleaning services to maintain optimal water flow year-round.
              </p>
              <Link to="/services" className="text-royal-blue font-semibold flex items-center gap-2 group-hover:text-safety-orange transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow group">
              <div className="w-16 h-16 bg-blue-50 text-royal-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-blue group-hover:text-white transition-colors">
                <Wrench size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fascia & Repairs</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Complete repair services including fascia board replacement, aluminum wrap, and soffit repairs for a solid foundation.
              </p>
              <Link to="/services" className="text-royal-blue font-semibold flex items-center gap-2 group-hover:text-safety-orange transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Fluid Wave Divider */}
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
