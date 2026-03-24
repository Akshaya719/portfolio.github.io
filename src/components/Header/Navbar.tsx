import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-4 left-0 w-full z-50 transition-all duration-300 px-4`}
        >
            <div className={`max-w-5xl mx-auto flex justify-between items-center rounded-full px-6 py-3 transition-all duration-300 ${scrolled ? 'bg-white/70 dark:bg-[#09090b]/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg' : 'bg-transparent'}`}>
                <a
                    href="#"
                    className={`text-lg font-bold font-display tracking-tight transition-colors ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
                >
                    B. Akshaya
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${scrolled ? 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center">
                    <button
                        onClick={toggleTheme}
                        className={`p-2.5 rounded-full transition-all ${scrolled ? 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center space-x-2">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${scrolled ? 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white/70 hover:bg-white/10'}`}
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className={`p-2 transition-colors ${scrolled ? 'text-slate-600 dark:text-slate-400' : 'text-white'}`}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-4 right-4 md:hidden bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-3 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
