import { useScrollReveal } from '../utils/useScrollReveal';
import { Award, Users, Home, TrendingUp } from 'lucide-react';

export default function AboutUs() {
    const addToRefs = useScrollReveal();

    const stats = [
        { icon: <Award size={32} />, value: '15+', label: 'Years Experience' },
        { icon: <Home size={32} />, value: '500+', label: 'Premium Properties' },
        { icon: <Users size={32} />, value: '1,200+', label: 'Happy Clients' },
        { icon: <TrendingUp size={32} />, value: '₹5,000Cr+', label: 'Total Volume' },
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-primary-800">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div ref={addToRefs} className="reveal max-w-2xl">
                        <h2 className="text-accent-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-accent-gold"></span>
                            About Sirimane Properties
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-8">
                            Redefining Luxury Living in Bangalore
                        </h3>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                            Founded on the principles of exclusivity, discretion, and unparalleled service, Sirimane Properties represents the pinnacle of luxury real estate in Bangalore. We specialize in curating bespoke living experiences for the most discerning clients.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
                            Our portfolio encompasses the city's most coveted addresses, from ultra-modern penthouses in UB City to sprawling estates in Sadashivanagar and Indiranagar. We don't just sell homes; we match visionary individuals with architectural masterpieces.
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-accent-gold text-accent-light hover:bg-accent-gold hover:text-primary-900 transition-all duration-300 uppercase tracking-wide text-sm font-medium rounded-sm"
                        >
                            Consult an Expert
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-6 relative">
                        {/* Decorative element behind grid */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl -z-10 transform translate-x-4 translate-y-4" />

                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                ref={addToRefs}
                                className={`reveal reveal-delay-${(index % 4) + 1} glass p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:border-accent-gold/50 transition-colors duration-300 group`}
                            >
                                <div className="p-4 bg-white/5 rounded-full text-accent-gold group-hover:scale-110 transition-transform duration-500">
                                    {stat.icon}
                                </div>
                                <h4 className="text-4xl font-display font-bold text-white group-hover:text-accent-gold transition-colors duration-300">
                                    {stat.value}
                                </h4>
                                <p className="text-sm uppercase tracking-wider text-gray-400">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
