import { useState } from 'react';
import { ArrowRight, BadgePercent, CheckCircle2, ChevronDown, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import residentialGuttersImage from '../assets/resdintal-gutters.jpg';

const faqs = [
  ['Can I combine multiple offers?', 'Offers cannot be combined unless explicitly stated. Each offer applies to a single qualifying service per visit.'],
  ['How do I redeem the online booking discount?', 'Simply fill out our quote form on the Contact page — the 10% discount is automatically applied to online bookings. No code needed.'],
  ['How does the referral program work?', 'Refer a friend by mentioning their name when they contact us, or have them mention your name. Once their job is completed, both of you receive $50 off your next service.'],
  ['Is the free estimate really free?', 'Yes — 100% free with no obligation. We assess your home and provide a detailed quote at no cost to you, with no pressure to book.'],
];

export default function Offers() {
  const [openFaq, setOpenFaq] = useState(null);

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
              <img src={residentialGuttersImage} alt="Residential gutters" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-safety-orange/10 text-safety-orange font-bold uppercase tracking-wider text-xs rounded-full mb-6">
                ONLINE EXCLUSIVE
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-safety-orange mb-6 border border-white/30 shadow-inner">
                <BadgePercent size={28} />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">10% Off When You Book Online</h3>
              <p className="text-blue-100/80 mb-8 leading-relaxed flex-grow">
                Skip the phone tag. Request your quote through our website and automatically save 10% on your service — any service, any size job.
              </p>
              <ul className="mb-8 space-y-3 text-blue-100/80">
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-safety-orange" size={18} />Applied automatically to your online quote</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-safety-orange" size={18} />Valid for all services</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-safety-orange" size={18} />Cannot be combined with other offers</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-colors">
                Book Online Now <ArrowRight size={20} className="text-safety-orange" />
              </Link>
            </div>
          </div>

          {/* Referral Discount */}
          <div className="lg:col-span-6 group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-50 rounded-full transition-transform group-hover:scale-150 duration-700 ease-out z-0"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 bg-orange-50 text-safety-orange rounded-2xl flex items-center justify-center mb-6 border border-orange-100 group-hover:bg-safety-orange group-hover:text-white transition-colors duration-300">
                <BadgePercent size={28} />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-safety-orange/10 text-safety-orange font-bold uppercase tracking-wider text-xs rounded-full mb-6">
                REFER & EARN
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">Give $50, Get $50</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Refer a friend or neighbor to A&N Gutters and you'll both save. They get $50 off their first service, and you get $50 off your next one.
              </p>
              <ul className="mb-8 space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={18} />No limit on referrals</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={18} />Applies to any service</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={18} />Credited after referred job is completed</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-slate-900 font-bold transition-colors">
                Refer a Friend <ArrowRight size={20} className="text-royal-blue" />
              </Link>
            </div>
          </div>

          {/* Bundle & Save */}
          <div className="lg:col-span-12 group relative bg-royal-blue rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-800 overflow-hidden hover:-translate-y-1">
            <div className="absolute inset-0 bg-blue-400/20"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-safety-orange/10 text-safety-orange font-bold uppercase tracking-wider text-xs rounded-full mb-6">
                BEST VALUE
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Bundle & Save 15%</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Book any two services together and save 15% on the total. Perfect for pairing Gutter Cleaning with Guards, or Installation with Repair.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-safety-orange" size={18} />Any two services qualify</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-safety-orange" size={18} />Savings applied to total invoice</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-safety-orange" size={18} />Cannot be combined with other offers</li>
              </ul>
              </div>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border-2 border-white bg-white px-8 py-4 text-lg font-bold text-royal-blue transition-colors hover:bg-blue-100">
                Build My Bundle <ArrowRight size={20} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Labor Warranty */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-slate-900">
        <h2 className="mb-6 text-4xl font-display font-black text-royal-blue">Labor Warranty</h2>
        <p className="mb-6 text-lg leading-relaxed text-slate-600">At A&N Gutters, we stand behind the quality of our workmanship. Our Labor Warranty covers defects directly resulting from the installation of the guttering system for a period of 1 year from the date of installation, subject to the terms and exclusions outlined below.</p>
        <p className="mb-8 text-lg leading-relaxed text-slate-600">If a claim is determined to be covered under this warranty, A&N Gutters will repair or replace the affected installation at no cost to the customer.</p>
        <h3 className="mb-4 text-2xl font-bold">This Labor Warranty does not cover:</h3>
        <ol className="list-decimal space-y-4 pl-6 text-slate-600 leading-relaxed">
          <li><strong>Acts of Nature / Acts of God</strong> — Natural events beyond our control, including but not limited to lightning, hurricanes, hail, earthquakes, floods, tornadoes, severe weather, or falling objects.</li>
          <li><strong>Structural Movement or Failure</strong> — Damage caused by settling, cracking, movement, shifting, distortion, or splitting of the property or structure where the guttering system has been installed. This includes structural failure involving walls, roofs, foundations, fascia, or rafters.</li>
          <li><strong>Ventilation, Drainage, or Structural Deficiencies</strong> — Problems resulting from inadequate or improper home ventilation, water accumulation, ice damming, mold, insufficient drainage, or other structural deficiencies unrelated to the installation.</li>
          <li><strong>Negligence, Misuse, or Unauthorized Work</strong> — Damage resulting from deliberate acts, negligence, misuse, modification, or improper installation or maintenance by the purchaser, another contractor, workman, or any other person.</li>
          <li><strong>Normal Wear and Tear</strong> — Normal deterioration consistent with the manufacturer's specifications. The manufacturer has final determination on product replacement claims.</li>
          <li><strong>Cosmetic and Pre-Existing Conditions</strong> — Color fading, staining, erosion, replacement of rotten or deteriorated wood, or water entering behind gutters where required eave/drip-edge metal has not been installed.</li>
          <li><strong>Materials Not Supplied by A&N Gutters</strong> — Any materials, components, or products installed as part of the guttering system that were not supplied by A&N Gutters.</li>
          <li><strong>Expansion and Contraction</strong> — Damage or movement resulting from the natural expansion or contraction of windows, siding, roofing materials, concrete, trim, or other building materials.</li>
          <li><strong>Improper Customer Maintenance</strong> — Failure to properly maintain the guttering system, including but not limited to clogged gutters or downspouts caused by leaves, dirt, branches, or other debris.</li>
        </ol>
        <h3 className="mb-4 mt-10 text-2xl font-bold">Warranty Limitations</h3>
        <p className="text-lg leading-relaxed text-slate-600">This warranty applies only to workmanship performed by A&N Gutters and does not extend to conditions, materials, or circumstances outside our control. Proper maintenance of the guttering system is the customer's responsibility and is required to maintain warranty coverage.</p>
        <h3 className="mb-4 mt-10 text-2xl font-bold">To Make a Claim</h3>
        <p className="text-lg leading-relaxed text-slate-600">If you believe there is an issue covered under this Labor Warranty, please contact A&N Gutters as soon as possible:</p>
        <p className="mt-4 text-lg leading-relaxed text-slate-600"><strong>Phone:</strong> <a href="tel:+17164953652" className="hover:text-blue-400">(716) 495-3652</a><br /><strong>Email:</strong> <a href="mailto:Info@anconstructionpros.com" className="hover:text-blue-400">Info@anconstructionpros.com</a></p>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">We will inspect the installation and determine the appropriate course of action. If the claim is approved, we will repair or replace the affected installation at no cost to you.</p>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="mb-8 text-4xl font-display font-black text-royal-blue">Frequently Asked Questions</h2>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(([question, answer], index) => (
            <div key={question}>
              <button
                type="button"
                aria-expanded={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-bold text-slate-900"
              >
                {question}
                <ChevronDown className={`flex-none transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && <p className="pb-5 pr-10 leading-relaxed text-slate-600">{answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
