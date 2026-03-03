import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Properties', href: '#properties' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-500',
                isScrolled ? 'glass py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-display font-bold text-white tracking-widest uppercase">
                            Sirimane <span className="text-accent-gold">Properties</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-200 hover:text-accent-gold transition-colors duration-300 uppercase tracking-wider"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-6 py-2.5 bg-accent-gold/10 border border-accent-gold/50 text-accent-light hover:bg-accent-gold hover:text-primary-900 transition-all duration-300 rounded-full font-medium"
                        >
                            <Phone size={16} />
                            <span>Get in Touch</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-200 hover:text-accent-gold transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'absolute top-full left-0 w-full glass-dark border-t border-white/10 md:hidden transition-all duration-300 overflow-hidden',
                    isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                )}
            >
                <nav className="flex flex-col items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-200 hover:text-accent-gold transition-colors duration-300 uppercase tracking-widest"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
