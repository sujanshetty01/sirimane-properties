import { motion } from 'framer-motion';
import heroBg from '../assets/photos/user-image-1.png';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary-900/60 z-10" />
                <img
                    src={heroBg}
                    alt="Luxury Real Estate"
                    className="w-full h-full object-cover scale-105"
                />
            </div>

            <div className="container relative z-20 mx-auto px-6 max-w-7xl pt-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-accent-gold font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4">
                            Welcome to Sirimane Properties
                        </h2>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        Discover
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent-gold">
                            Luxury Living
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Experience premium real estate in the heart of Bangalore.
                        Curated homes that define elegance and sophistication.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a
                            href="#properties"
                            className="px-8 py-4 bg-accent-gold text-primary-900 font-medium hover:bg-accent-light transition-colors duration-300 text-center uppercase tracking-wide text-sm"
                        >
                            Explore Properties
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-center uppercase tracking-wide text-sm glass"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-accent-gold"
                        animate={{ y: [0, 64] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "circInOut"
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
