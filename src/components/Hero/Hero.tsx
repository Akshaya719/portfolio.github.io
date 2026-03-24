import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Download, Code, Copy, Server } from 'lucide-react';

const roles = [
    'Full Stack Developer',
    'Problem Solver',
    'Open Source Contributor',
    'AI Enthusiast',
];

export const Hero = () => {
    const [mounted, setMounted] = useState(false);
    const [terminalText, setTerminalText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    
    const fullTerminalText = `$ whoami
B. Akshaya
$ status
Aspiring Software Engineer
$ specialized
MERN Stack + Cloud
$ skills
MongoDB, Express, React, Node
$ cat goals.txt
Building scalable, efficient, 
and user-centric applications.`;

    useEffect(() => {
        setMounted(true);
        let index = 0;
        const typeText = () => {
            if (index <= fullTerminalText.length) {
                setTerminalText(fullTerminalText.slice(0, index));
                index++;
                
                // Add longer pause for new lines or commands
                const char = fullTerminalText[index - 1];
                const delay = char === '\n' || char === '$' ? 500 : 40;
                
                setTimeout(typeText, delay);
            }
        };
        typeText();

        const roleInterval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);

        return () => {
            clearInterval(roleInterval);
        };
    }, []);

    const socialLinks = [
        { icon: <Mail size={18} />, href: "mailto:akshaya@example.com", label: "Email" },
        { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
        { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter" },
    ];

    if (!mounted) return null;

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-12 relative overflow-hidden bg-white dark:bg-[#09090b] text-slate-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-500">
            {/* Background Grain/Grid */}
            <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] pointer-events-none transition-colors"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none opacity-50 dark:opacity-100"></div>

            <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-24">
                
                {/* Left Side Content */}
                <div className="lg:col-span-7 flex flex-col space-y-8">
                    {/* Status Badge */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-3 w-fit"
                    >
                        <div className="flex items-center space-x-2.5 bg-emerald-500/5 border border-emerald-500/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">System Ready: Available</span>
                        </div>
                    </motion.div>

                    {/* Name & Role */}
                    <div className="space-y-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-none overflow-visible whitespace-nowrap transition-colors"
                        >
                            B.<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 ml-4">Akshaya</span>
                        </motion.h1>
                        
                        <div className="h-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={roleIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl md:text-2xl font-medium tracking-wide text-blue-600 dark:text-blue-400/80 font-mono transition-colors"
                                >
                                    {roles[roleIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-normal transition-colors"
                    >
                        Aspiring software engineer dedicated to building scalable, user-centric web solutions with a focus on modern architectures and efficient, clean code applications.
                    </motion.p>

                    {/* Tech Stack Pills */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-2.5 max-w-lg"
                    >
                        {['MongoDB', 'Express.js', 'React', 'Node.js', 'Docker', 'AWS'].map((tech) => (
                            <span 
                                key={tech} 
                                className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/1 transition-all cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-[1.05] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-blue-500/25"
                        >
                            View Projects
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            className="px-8 py-4 bg-white/5 border border-slate-700/50 text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
                        >
                            <Linkedin size={16} fill="white" className="opacity-80" />
                            Connect
                        </a>
                        <a
                            href="/resume portfolio.pdf"
                            download="B_Akshaya_Resume_Portfolio.pdf"
                            className="px-8 py-4 border border-blue-500/30 text-blue-400 font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-300 flex items-center gap-2"
                        >
                            <Download size={16} /> 
                            Download Resume
                        </a>
                    </motion.div>
                </div>

                {/* Right Side - Terminal */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="w-full aspect-square md:aspect-auto md:h-[500px] bg-[#0c0c0e] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col group hover:border-blue-500/30 transition-colors">
                        {/* Terminal Header */}
                        <div className="h-12 border-b border-white/5 bg-white/5 flex items-center justify-between px-6">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Dev Terminal</div>
                            <Copy size={14} className="text-slate-600 hover:text-white cursor-pointer transition-colors" />
                        </div>

                        {/* Terminal Content */}
                        <div className="p-8 font-mono text-sm leading-relaxed overflow-y-auto flex-1 custom-scrollbar">
                            <div className="space-y-1">
                                <pre className="text-slate-300 whitespace-pre-wrap">
                                    {terminalText}
                                    <span className="w-2 h-4 bg-blue-500 inline-block align-middle ml-1 animate-pulse"></span>
                                </pre>
                            </div>
                        </div>

                        <div className="h-8 border-t border-white/5 bg-white/5 flex items-center justify-between px-6">
                            <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest transition-colors">UTF-8</span>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Main.sh</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Info Boxes */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-6 -right-4 hidden md:block"
                    >
                        <div className="bg-[#1e1b4b]/80 border border-blue-500/20 p-4 rounded-2xl shadow-xl backdrop-blur-xl">
                            <div className="flex items-center gap-3 text-blue-400 mb-1">
                                <Code size={14} />
                                <span className="text-[10px] font-black uppercase tracking-widest">DSA Ranking</span>
                            </div>
                            <p className="text-xs text-slate-300 font-medium whitespace-nowrap">Problem Solver @ LeetCode</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-4 hidden md:block"
                    >
                        <div className="bg-[#0f172a]/80 border border-blue-500/20 p-4 rounded-2xl shadow-xl backdrop-blur-xl">
                            <div className="flex items-center gap-3 text-emerald-400 mb-1">
                                <Server size={14} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Open For</span>
                            </div>
                            <p className="text-xs text-slate-300 font-medium whitespace-nowrap">SWE Internships 2026</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Social Sidebar */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-6 px-8 hidden xl:flex">
                <div className="w-[1px] h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
                {socialLinks.map((link, i) => (
                    <motion.a
                        key={i}
                        href={link.href}
                        whileHover={{ scale: 1.2, x: -5 }}
                        className="text-slate-500 hover:text-white transition-colors p-2"
                        aria-label={link.label}
                    >
                        {link.icon}
                    </motion.a>
                ))}
                <div className="w-[1px] h-20 bg-gradient-to-b from-white/10 to-transparent"></div>
            </div>
        </section>
    );
};

