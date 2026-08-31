import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Services</h2>
        <p className="text-xl text-slate-600">Comprehensive gutter solutions for every property size and type.</p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Primary Service (Spans Full Width on Desktop) */}
        <div className="md:col-span-2 lg:col-span-3 bg-blue-700 text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row gap-8 items-center justify-between hover:-translate-y-1 transition-transform duration-300">
          <div className="flex-1">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Seamless Gutter Installation</h3>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              Custom-fit seamless gutters and downspouts. All colors available to perfectly match your home's exterior.
            </p>
          </div>
          <div className="flex-1 w-full">
            <ul className="flex flex-col gap-4">
              <li className="bg-blue-800/50 p-6 rounded-2xl border border-blue-600">
                <strong className="block text-xl mb-1 text-orange-400">Residential</strong>
                <span className="text-blue-100">5” K-Style (For standard homes)</span>
              </li>
              <li className="bg-blue-800/50 p-6 rounded-2xl border border-blue-600">
                <strong className="block text-xl mb-1 text-orange-400">Light Commercial</strong>
                <span className="text-blue-100">6” K-Style (For larger buildings)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Other Services */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Gutter Guards</h3>
          <p className="text-slate-600 leading-relaxed text-lg">
            Keep leaves and debris out. We install high-quality gutter guards to prevent clogs and ensure smooth water flow.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Wood & Trim Repair</h3>
          <p className="text-slate-600 leading-relaxed text-lg">
            We repair fascia boards, aluminum wrap, and soffit to ensure your gutters have a solid, rot-free foundation.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Cleaning Service</h3>
          <p className="text-slate-600 leading-relaxed text-lg">
            Professional gutter cleaning to remove blockages and protect your home from water damage.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-3">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Repair & Maintenance</h3>
          <p className="text-slate-600 leading-relaxed text-lg max-w-3xl">
            From resealing leaks to realigning sagging gutters, we provide comprehensive repair services to keep your property safe.
          </p>
        </div>

      </div>
    </section>
  );
}
