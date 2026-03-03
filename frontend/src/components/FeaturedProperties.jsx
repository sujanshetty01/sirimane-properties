import { useScrollReveal } from '../utils/useScrollReveal';
import { MapPin, Maximize, BedDouble, Bath } from 'lucide-react';
import property1 from '../assets/property-1.png';
import propertyPenthouse from '../assets/photos/property-penthouse.png';
import propertyEstate from '../assets/photos/property-estate.png';

const PROPERTIES = [
    {
        id: 1,
        title: "Onyx Horizon Villa",
        location: "Sadashivanagar, Bangalore",
        price: "₹18.5 Cr",
        beds: 5,
        baths: 6,
        sqft: "8,500",
        image: property1,
        tags: ["Ultra Luxury", "Ready to Move"]
    },
    {
        id: 2,
        title: "The Azure Penthouse",
        location: "UB City Area, Bangalore",
        price: "₹12.0 Cr",
        beds: 4,
        baths: 4,
        sqft: "5,200",
        image: propertyPenthouse,
        tags: ["Panoramic Views", "Smart Home"]
    },
    {
        id: 3,
        title: "Verdant Estate",
        location: "Indiranagar, Bangalore",
        price: "₹22.0 Cr",
        beds: 6,
        baths: 7,
        sqft: "12,000",
        image: propertyEstate,
        tags: ["Private Pool", "Home Theatre"]
    }
];

export default function FeaturedProperties() {
    const addToRefs = useScrollReveal({ threshold: 0.15, duration: 800 });

    return (
        <section id="properties" className="py-32 bg-primary-900 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header */}
                <div ref={addToRefs} className="reveal mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-accent-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                            Curated Selection
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Featured Properties
                        </h3>
                    </div>
                    <a
                        href="#"
                        className="group flex items-center gap-2 text-accent-light hover:text-accent-gold transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
                    >
                        View All Collection
                        <span className="block transform group-hover:translate-x-2 transition-transform duration-300">
                            →
                        </span>
                    </a>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROPERTIES.map((property, index) => (
                        <div
                            key={property.id}
                            ref={addToRefs}
                            className={`reveal reveal-delay-${(index % 3) + 1} group`}
                        >
                            <div className="glass-dark rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 hover:shadow-2xl hover:shadow-accent-gold/5 flex flex-col h-full border border-white/5 hover:border-accent-gold/30">

                                {/* Image Container */}
                                <div className="relative h-72 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent z-10 opacity-60" />
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                                        {property.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-accent-light uppercase tracking-wider border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="absolute -top-6 right-8 z-20 bg-accent-gold text-primary-900 font-bold px-4 py-2 rounded-lg shadow-lg">
                                        {property.price}
                                    </div>

                                    <h4 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-accent-gold transition-colors duration-300 mt-2">
                                        {property.title}
                                    </h4>

                                    <div className="flex items-center gap-2 text-gray-400 mb-6 text-sm">
                                        <MapPin size={16} className="text-accent-gold/70" />
                                        <span>{property.location}</span>
                                    </div>

                                    <div className="mt-auto grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                                        <div className="flex flex-col items-center gap-1">
                                            <BedDouble size={20} className="text-gray-400 group-hover:text-accent-gold transition-colors duration-300" />
                                            <span className="text-sm font-medium text-gray-300">{property.beds} Beds</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 border-x border-white/10">
                                            <Bath size={20} className="text-gray-400 group-hover:text-accent-gold transition-colors duration-300" />
                                            <span className="text-sm font-medium text-gray-300">{property.baths} Baths</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <Maximize size={20} className="text-gray-400 group-hover:text-accent-gold transition-colors duration-300" />
                                            <span className="text-sm font-medium text-gray-300">{property.sqft} sqft</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
