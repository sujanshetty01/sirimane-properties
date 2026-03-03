import { useScrollReveal } from '../utils/useScrollReveal';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function ContactUs() {
    const addToRefs = useScrollReveal();

    return (
        <>
            <section id="contact" className="py-32 relative overflow-hidden">
                {/* Subtle accent glow */}
                <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div ref={addToRefs} className="reveal max-w-xl">
                            <h2 className="text-accent-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-accent-gold"></span>
                                Get In Touch
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
                                Begin Your Journey
                            </h3>

                            <p className="text-gray-300 text-lg leading-relaxed mb-12 font-light">
                                Whether you're looking to acquire a masterpiece or seeking to discreetly list a premier property, our team is at your specialized service.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group hover:-translate-y-1 transition-transform duration-300">
                                    <div className="p-4 glass rounded-xl text-accent-gold group-hover:bg-accent-gold group-hover:text-primary-900 transition-colors duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-display font-medium text-xl mb-2">Corporate Office</h4>
                                        <p className="text-gray-400 font-light leading-relaxed">
                                            480, Siddhaiah Puranik Rd, opp. to HP Petrol Pump,<br />
                                            3rd Stage, Basaveshwar Nagar,<br />
                                            Bengaluru, Karnataka 560079
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group hover:-translate-y-1 transition-transform duration-300">
                                    <div className="p-4 glass rounded-xl text-accent-gold group-hover:bg-accent-gold group-hover:text-primary-900 transition-colors duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-display font-medium text-xl mb-2">Direct Line</h4>
                                        <p className="text-gray-400 font-light leading-relaxed">
                                            +91 (800) 123-4567<br />
                                            <span className="text-sm opacity-60">Mon-Sat, 9AM to 7PM</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group hover:-translate-y-1 transition-transform duration-300">
                                    <div className="p-4 glass rounded-xl text-accent-gold group-hover:bg-accent-gold group-hover:text-primary-900 transition-colors duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-display font-medium text-xl mb-2">Electronic Mail</h4>
                                        <p className="text-gray-400 font-light leading-relaxed">
                                            exclusive@sirimane.properties
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div ref={addToRefs} className="reveal reveal-delay-2 glass p-10 rounded-3xl border border-white/10 relative overflow-hidden">
                            {/* Decorative line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-50" />

                            <h4 className="text-3xl font-display font-bold text-white mb-8 group-hover:text-accent-gold transition-colors duration-300">
                                Request a Private Consultation
                            </h4>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm uppercase tracking-wider text-gray-400 font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm uppercase tracking-wider text-gray-400 font-medium">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm uppercase tracking-wider text-gray-400 font-medium">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-300"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="interest" className="text-sm uppercase tracking-wider text-gray-400 font-medium">Area of Interest</label>
                                    <select
                                        id="interest"
                                        defaultValue=""
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-gray-300 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-300 appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Select an option</option>
                                        <option value="buy">Buying a Property</option>
                                        <option value="sell">Selling a Property</option>
                                        <option value="invest">Investment Opportunities</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm uppercase tracking-wider text-gray-400 font-medium">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-300 resize-none"
                                        placeholder="How can we assist you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-accent-gold text-primary-900 font-bold uppercase tracking-widest py-5 rounded-lg hover:bg-accent-light transition-colors duration-300 mt-4 shadow-lg shadow-accent-gold/20 hover:shadow-accent-gold/40"
                                >
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary-900 border-t border-white/10 pt-20 pb-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                        <div className="col-span-1 md:col-span-1">
                            <span className="text-2xl font-display font-bold text-white tracking-widest uppercase mb-6 block">
                                Sirimane <span className="text-accent-gold">Properties</span>
                            </span>
                            <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                                Curating the most exclusive real estate portfolio in Bangalore for the world's most discerning individuals.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="p-2 border border-white/20 rounded-full text-gray-400 hover:text-accent-gold hover:border-accent-gold transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="p-2 border border-white/20 rounded-full text-gray-400 hover:text-accent-gold hover:border-accent-gold transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="p-2 border border-white/20 rounded-full text-gray-400 hover:text-accent-gold hover:border-accent-gold transition-all duration-300">
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-white font-display font-medium mb-6 uppercase tracking-wider text-sm">Navigation</h5>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-400 hover:text-accent-gold transition-colors text-sm">Home</a></li>
                                <li><a href="#properties" className="text-gray-400 hover:text-accent-gold transition-colors text-sm">Our Portfolio</a></li>
                                <li><a href="#about" className="text-gray-400 hover:text-accent-gold transition-colors text-sm">About Sirimane</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-accent-gold transition-colors text-sm">Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-white font-display font-medium mb-6 uppercase tracking-wider text-sm">Locations</h5>
                            <ul className="space-y-4">
                                <li className="text-gray-400 text-sm">Sadashivanagar</li>
                                <li className="text-gray-400 text-sm">UB City Area</li>
                                <li className="text-gray-400 text-sm">Indiranagar</li>
                                <li className="text-gray-400 text-sm">Koramangala</li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-white font-display font-medium mb-6 uppercase tracking-wider text-sm">Legal</h5>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-400 hover:text-accent-gold transition-colors text-sm">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-accent-gold transition-colors text-sm">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-accent-gold transition-colors text-sm">RERA Disclosure</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm font-light">
                            &copy; {new Date().getFullYear()} Sirimane Properties. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm font-light flex items-center gap-1">
                            Designed with <span className="text-accent-gold">&hearts;</span> for luxury.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
