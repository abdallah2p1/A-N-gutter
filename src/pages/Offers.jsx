import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Offers() {
  return (
    <section className="pt-32 pb-24 px-6 min-h-[calc(100vh-200px)] bg-slate-50 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Offers</h2>
        <p className="text-xl text-slate-600 mb-16">Exclusive deals for our local customers in Buffalo and Rochester</p>
        
        <div className="relative bg-gradient-to-br from-blue-700 to-slate-900 text-white p-12 md:p-16 rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-orange-500 opacity-20 blur-3xl"></div>
          
          <div className="relative z-10">
            <span className="inline-block px-6 py-2 bg-orange-500 text-white font-bold tracking-widest uppercase text-sm rounded-full mb-8 shadow-lg">
              Limited Time
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Free Inspection & Estimate</h3>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a completely free, no-obligation assessment of your gutter system. We'll identify any issues and provide a transparent quote.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-700 hover:bg-slate-50 hover:text-orange-600 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Claim Offer <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
