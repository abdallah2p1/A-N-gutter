import { Link } from 'react-router-dom';
import { ArrowRight, Tag, ShieldCheck, BadgePercent, CalendarCheck, CheckCircle2 } from 'lucide-react';

export default function Offers() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black opacity-90"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-safety-orange/10 blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-sm mb-8 shadow-xl">
            <Tag size={16} className="text-safety-orange" />
            <span className="tracking-wide">Exclusive Local Deals</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-8 text-white tracking-tight drop-shadow-2xl">
            Unbeatable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-safety-orange">Value</span> <br />
            For Your Home
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium seamless gutters, reliable guards, and expert repairs at prices you'll love. Discover our current specials for Buffalo and Rochester homeowners.
          </p>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-1 text-slate-50">
          <svg className="relative block w-full h-[50px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,191.7,101.4,236.4,88.1,280.29,71.21,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="relative -mt-10 z-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Featured Offer */}
          <div className="lg:col-span-12 group relative bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col md:flex-row items-center gap-10 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-[2.5] duration-700 ease-out z-0"></div>
            
            <div className="relative z-10 w-full md:w-1/2">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-safety-orange/10 text-safety-orange font-bold uppercase tracking-wider text-xs rounded-full mb-6">
                 Most Popular
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                 Free Inspection & <span className="text-royal-blue">Estimate</span>
               </h2>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 Don't wait for a leak to find out your gutters are failing. Get a completely free, no-obligation assessment of your entire gutter system by our certified experts.
               </p>
               
               <ul className="space-y-4 mb-8">
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                   <span className="text-slate-700">Comprehensive multi-point system check</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                   <span className="text-slate-700">Detailed digital report with photos</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                   <span className="text-slate-700">Transparent, guaranteed pricing quote</span>
                 </li>
               </ul>

               <Link 
                 to="/contact" 
                 className="inline-flex items-center gap-3 px-8 py-4 bg-royal-blue hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/40"
               >
                 Claim Free Estimate <ArrowRight size={20} />
               </Link>
            </div>
            
            <div className="relative z-10 w-full md:w-1/2 h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" alt="House with seamless gutters" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 text-white shadow-lg">
                   <p className="font-bold text-lg">"Saved me thousands!"</p>
                   <p className="text-sm text-white/90 mt-1">Their free inspection caught a hidden leak before it destroyed my foundation.</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Secondary Offer 1 */}
          <div className="lg:col-span-6 group relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-800 overflow-hidden hover:-translate-y-2">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-safety-orange/20 rounded-full blur-3xl group-hover:bg-safety-orange/40 transition-colors duration-500"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-safety-orange mb-6 border border-white/10 shadow-inner">
                <BadgePercent size={28} />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">15% Off Full System Replacement</h3>
              <p className="text-blue-100/80 mb-8 leading-relaxed flex-grow">
                Upgrade to our premium seamless aluminum gutters and LeafGuard systems and save 15% on the entire project when booked this month.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-colors">
                Redeem Offer <ArrowRight size={20} className="text-safety-orange" />
              </Link>
            </div>
          </div>

          {/* Secondary Offer 2 */}
          <div className="lg:col-span-6 group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-50 rounded-full transition-transform group-hover:scale-150 duration-700 ease-out z-0"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 bg-orange-50 text-safety-orange rounded-2xl flex items-center justify-center mb-6 border border-orange-100 group-hover:bg-safety-orange group-hover:text-white transition-colors duration-300">
                <CalendarCheck size={28} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">Seasonal Tune-Up Special</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Get your gutters ready for the harsh weather. For just $199, we'll clean your gutters, reseal corners, and re-secure loose hangers.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-slate-900 font-bold transition-colors">
                Book Tune-Up <ArrowRight size={20} className="text-royal-blue" />
              </Link>
            </div>
          </div>

          {/* Small Offer: Military & Senior */}
          <div className="lg:col-span-12 relative bg-royal-blue rounded-3xl p-8 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
             <div className="relative z-10 flex items-center gap-6">
               <div className="hidden md:flex w-16 h-16 bg-white/20 backdrop-blur-md rounded-full items-center justify-center text-white shrink-0 border border-white/30 shadow-inner">
                 <ShieldCheck size={32} />
               </div>
               <div>
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Military & Senior Discount</h3>
                 <p className="text-blue-100 text-lg">As a thank you, we offer an additional 10% off any service for active military, veterans, and seniors (65+).</p>
               </div>
             </div>
             <Link to="/contact" className="relative z-10 whitespace-nowrap px-8 py-4 bg-white text-royal-blue hover:bg-slate-50 rounded-full font-bold transition-colors shadow-xl text-lg">
               Apply Discount
             </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
