import { MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Ready to upgrade your gutters? Contact us today to schedule your service. We're here to protect your home.
          </p>
          
          <div className="flex flex-col gap-10">
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-orange-100 rounded-2xl">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Service Areas</h4>
                <p className="text-slate-600 text-lg">Buffalo, NY & Surrounding Areas</p>
                <p className="text-slate-600 text-lg">Rochester, NY & Surrounding Areas</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-blue-100 rounded-2xl">
                <Clock className="w-8 h-8 text-blue-700" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Experience</h4>
                <p className="text-slate-600 text-lg">8 Years in Business (Since 2018)</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-slate-900 text-lg"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-slate-700 font-semibold mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="(555) 123-4567" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-slate-900 text-lg"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-slate-700 font-semibold mb-2">Service Needed</label>
              <select 
                id="service" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-slate-900 text-lg appearance-none"
              >
                <option>New Installation</option>
                <option>Gutter Repair</option>
                <option>Gutter Cleaning</option>
                <option>Other</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 mt-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Request Quote
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
