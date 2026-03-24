import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const TechLogos = {
    javascript: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="#F7DF1E"/><path d="M11.64 15.11l-.81-2.92-1.63 1.05.51 2.22c.1.44.53.71.97.62.43-.09.72-.51.63-.95z" fill="#000000"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.83 14.88c-.28.18-.58.26-.88.26-.33 0-.66-.1-.95-.3l-2.11-1.42.54 2.37c.1.44-.17.87-.61.97-.43.1-.86-.17-.96-.6l-.87-3.83c-.06-.27.02-.56.22-.76s.48-.3.76-.23l3.86 1c.44.11.71.55.6 1-.11.43-.55.71-1 .6z" fill="#000000"/></svg>,
    typescript: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M0 0h24v24H0V0z" fill="#3178C6"/><path d="M15.487 18.238l-1.921-1.125c-.214-.125-.339-.338-.339-.587v-7.85c0-.263.137-.5.362-.638l1.921-1.125c.225-.138.5-.138.725 0l1.921 1.125c.225.138.362.375.362.638s-.137.5-.362.638l-1.921 1.125c-.225.138-.5.138-.725 0l-.825-.488v1.013l1.188.7c.362.213.362.775 0 1l-1.188.7V17.025c0 .249.125.462.339.587l1.921 1.125c.214.125.339-.338.339-.587V15.5c0-.263.137-.5.362-.638l1.921-1.125c.225-.138.5-.138.725 0l1.921 1.125c.225.138.362.375.362.638s-.137.5-.362.638l-1.921 1.125c-.225.138-.5.138-.725 0L20.1 14.8v2.4c0 1.013-.825 1.838-1.838 1.838h-2.775zM4.312 18.238l-1.921-1.125c-.214-.125-.339-.338-.339-.587v-7.85c0-.263.137-.5.362-.638l1.921-1.125c.225-.138.5-.138.725 0l1.921 1.125c.225.138.362.375.362.638s-.137.5-.362.638l-1.921 1.125c-.225.138-.5.138-.725 0l-.825-.488v6.788c0 .249.125.462.339.587l1.921 1.125c.214.125.339-.338.339-.587v-1.188c0-.263.137-.5.362-.638l1.921-1.125c.225-.138.5-.138.725 0l1.921 1.125c.225.138.362.375.362.638s-.137.5-.362.638L4.312 18.238z" fill="#FFFFFF"/></svg>,
    react: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" fill="none" stroke="#61DAFB" strokeWidth="1"/><path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#61DAFB"/><path d="M12 2c0 .6 11 4.5 11 10s-11 9.4-11 10-11-4.5-11-10 11-9.4 11-10z" fill="none" stroke="#61DAFB" strokeWidth="0.5" opacity="0.3"/><path d="M12 2c.6 0 4.5 11 10 11s9.4-11 10-11-4.5 11-10 11S2.6 13 2 12s4.5-11 11-11v1z" fill="none" stroke="#61DAFB" strokeWidth="0.5" opacity="0.3"/></svg>,
    node: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" fill="#339933"/><path d="M11 7v6.6l2.1 1.2V8.2L11 7z" fill="#FFFFFF"/><path d="M14.5 9v4.6l2.1 1.2V10.2L14.5 9z" fill="#FFFFFF"/></svg>,
    aws: <svg viewBox="0 0 24 24" className="w-12 h-12"><path d="M16.48 14.47c-.66-1.33-.95-2.91-.95-4.47 0-3.08 1.12-4.63 2.61-4.63a2.38 2.38 0 0 1 2.2 1.66c.38.98.41 2.4.44 3.59l.06 2.5h.41c1 0 1.55-.38 1.55-1.51 0-1-.41-1.74-1.1-1.84V8.16c1.4.11 2.4 1.43 2.4 3.42 0 2.13-1.07 3.12-3.01 3.12h-4.32c-1.2 0-1.49.49-1.49 1l.03.34H19v-.48a2.12 2.12 0 0 1 .23-1.09 3.65 3.65 0 0 1 2.29-.48zm2.01-1.09h1.19l-.06-1.92c-.03-1.29-.16-2.24-1.24-2.24-.61 0-1.07.43-1.07 1.46.37.69.93 1.95.93 2.7z" fill="currentColor"/><path d="M12.03 22.03c3.9 0 3.65-1.7 3.65-1.7v-1.71h-3.71v-.52h5.13c1.83 0 3.53-1.58 3.53-3.53s0-3.86 0-3.86c0-1.83-1.48-2.86-3.32-2.86h-1.15v1.63c0 1.83-1.58 3.53-3.53 3.53s-4.67 0-4.67 0c-1.83 0-3.32 1.58-3.32 3.32v1.54c0 1.83 1.67 3.53 3.53 3.53h.86s.87.6 4.77.6z" fill="#FF9900"/></svg>,
    docker: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V9.111c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186z" fill="#2496ED"/><path d="M11.221 11.078h2.119c.102 0 .186-.084.186-.186V9.111c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186z" fill="#2496ED"/></svg>,
    tailwind: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8z" fill="#06B6D4"/><path d="M6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/></svg>,
    python: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M11.97 2c-3.9 0-3.65 1.7-3.65 1.7v1.71h3.71v.52H6.9c-1.83 0-3.53 1.58-3.53 3.53s0 3.86 0 3.86c0 1.83 1.48 2.86 3.32 2.86h1.15v-1.63c0-1.83 1.58-3.53 3.53-3.53s4.67 0 4.67 0c1.83 0 3.32-1.58 3.32-3.32V6.16c0-1.83-1.67-3.53-3.53-3.53h-.86S15.87 2 11.97 2zM9.81 3.2c.4 0 .73.33.73.73s-.33.73-.73.73-.73-.33-.73-.73.33-.73.73-.73z" fill="#3776AB"/><path d="M12.03 22c3.9 0 3.65-1.7 3.65-1.7v-1.71h-3.71v-.52h5.13c1.83 0 3.53-1.58 3.53-3.53s0-3.86 0-3.86c0-1.83-1.48-2.86-3.32-2.86h-1.15v1.63c0 1.83-1.58 3.53-3.53 3.53s-4.67 0-4.67 0c-1.83 0-3.32 1.58-3.32 3.32v1.54c0 1.83 1.67 3.53 3.53 3.53h.86s.87.6 4.77.6zM14.19 20.8c-.4 0-.73-.33-.73-.73s.33-.73.73-.73.73.33.73.73-.33.73-.73.73z" fill="#FFE052"/></svg>,
    cpp: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z" fill="#004482"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z" fill="#00599C"/><path d="M19 13h-4v-2h4v2z" fill="#00599C"/></svg>,
    mongodb: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M17.193 11.284c-.456-4.646-4.492-9.13-5.068-9.752a.23.23 0 0 0-.352.012c-.504.654-3.79 5.163-4.14 9.697-.33 4.276 1.83 6.94 4.07 7.7.126.044.208-.092.17-.208a11 11 0 0 1-.36-2.583c0-4.136 2.45-7.796 2.45-7.796z" fill="#47A248"/></svg>,
    postgresql: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M15.112 15.004c.153-.404.22-.84.186-1.275a2.645 2.645 0 0 0-.693-1.68 2.652 2.652 0 0 0-1.745-.733l-.014-.13c0-.026 0-.05.002-.073.012-.417.025-.834.037-1.25.012-.393-.247-.738-.636-.8l-.133-.02a1.455 1.455 0 0 1-1.21-1.6" fill="#4169E1"/></svg>,
    express: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M0 0h24v24H0V0z" fill="none"/><text x="1" y="15" fill="#FFFFFF" style={{ fontSize: '12px', fontWeight: 'bold' }}>EX</text></svg>
};
export const About = () => {
    return (
        <Section id="about" className="bg-white dark:bg-[#09090b] text-slate-800 dark:text-white py-32 overflow-hidden relative transition-colors duration-500">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none opacity-50 dark:opacity-100"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none opacity-50 dark:opacity-100"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-40">
                    
                    {/* Left side: HTML Code Window (Corrected as requested) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-[48%]"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-40"></div>
                            
                            <div className="relative bg-slate-50 dark:bg-[#0c0c0e]/95 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-colors">
                                {/* Window Header */}
                                <div className="h-10 bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/5 px-5 flex items-center justify-between transition-colors">
                                    <div className="flex space-x-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">profile.html</span>
                                    <div className="w-10"></div>
                                </div>

                                {/* Code Content with Syntax Highlighting */}
                                <div className="p-8 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                                    <div className="flex gap-4">
                                        {/* Line Numbers */}
                                        <div className="text-white/10 text-right select-none hidden sm:block">
                                            {Array.from({ length: 14 }).map((_, i) => (
                                                <div key={i}>{i + 1}</div>
                                            ))}
                                        </div>
                                        
                                        {/* Code Lines */}
                                        <div className="flex-1">
                                            <div className="text-gray-500 italic">&lt;!-- Professional Identity Profile v2 --&gt;</div>
                                            <div>
                                                <span className="text-cyan-400">&lt;section</span> <span className="text-emerald-400">class</span>=<span className="text-orange-300">"id-card"</span> <span className="text-emerald-400">data-status</span>=<span className="text-orange-300">"active"</span><span className="text-cyan-400">&gt;</span>
                                            </div>
                                            <div className="pl-4">
                                                <span className="text-cyan-400">&lt;header&gt;</span>
                                            </div>
                                            <div className="pl-8">
                                                <span className="text-cyan-400">&lt;h1&gt;</span><span className="text-white">B. Akshaya</span><span className="text-cyan-400">&lt;/h1&gt;</span>
                                            </div>
                                            <div className="pl-8">
                                                <span className="text-cyan-400">&lt;p</span> <span className="text-emerald-400">class</span>=<span className="text-orange-300">"role"</span><span className="text-cyan-400">&gt;</span><span className="text-white">Full Stack Architect</span><span className="text-cyan-400">&lt;/p&gt;</span>
                                            </div>
                                            <div className="pl-4">
                                                <span className="text-cyan-400">&lt;/header&gt;</span>
                                            </div>
                                            <br />
                                            <div className="pl-4 text-gray-500 italic">&lt;!-- Engineering Philosophy --&gt;</div>
                                            <div className="pl-4">
                                                <span className="text-cyan-400">&lt;article</span> <span className="text-emerald-400">class</span>=<span className="text-orange-300">"bio"</span><span className="text-cyan-400">&gt;</span>
                                            </div>
                                            <div className="pl-8">
                                                <span className="text-cyan-400">&lt;p&gt;</span><span className="text-white">Orchestrating scalable digital environments</span><span className="text-cyan-400">&lt;/p&gt;</span>
                                            </div>
                                            <div className="pl-8">
                                                <span className="text-cyan-400">&lt;p&gt;</span><span className="text-white">where performance meets design.</span><span className="text-cyan-400">&lt;/p&gt;</span>
                                            </div>
                                            <div className="pl-4">
                                                <span className="text-cyan-400">&lt;/article&gt;</span>
                                            </div>
                                            <br />
                                            <div className="pl-4">
                                                <span className="text-cyan-400">&lt;footer&gt;</span>
                                            </div>
                                            <div className="pl-8 text-white/40 italic">
                                                📍 India | 🎓 LPU
                                            </div>
                                            <div className="pl-4">
                                                <span className="text-cyan-400">&lt;/footer&gt;</span>
                                            </div>
                                            <div>
                                                <span className="text-cyan-400">&lt;/section&gt;</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Biography & Stats */}
                    <div className="w-full lg:w-[52%] space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                                Engineering <br />
                                <span className="text-blue-500">Persona.</span>
                            </h2>
                            
                            <div className="space-y-6 max-w-2xl border-l border-white/10 pl-8 ml-1">
                                <p className="text-lg text-slate-400 leading-relaxed font-light">
                                    I am <span className="text-white font-medium italic">B. Akshaya</span>, a developer focused on orchestrating high-performance digital environments. My technical philosophy is built on the intersection of <span className="text-blue-400 underline decoration-blue-500/30 underline-offset-8 transition-colors hover:decoration-blue-500">robust system architecture</span> and intuitive user engagement.
                                </p>
                                <p className="text-base text-slate-500 leading-relaxed font-light">
                                    Driven by a persistent quest for engineering precision, I bridge the gap between complex algorithmic challenges and streamlined interactive realities. I am dedicated to constructing scalable systems that transform sophisticated concepts into production-ready solutions.
                                </p>
                            </div>
                        </motion.div>

                        {/* Highlight Stats - Unique minimalist layout */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                            {[
                                { label: 'DSA Tracking', val: '200+', sub: 'Problems Solved', color: 'from-blue-500' },
                                { label: 'Projects Built', val: '4+', sub: 'Production Ready', color: 'from-emerald-500' },
                                { label: 'Technologies', val: '10+', sub: 'Core Stack', color: 'from-purple-500' },
                                { label: 'Commitment', val: '100%', sub: 'Excellence', color: 'from-blue-400' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative group cursor-default"
                                >
                                    <div className="space-y-2">
                                        <div className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">{stat.val}</div>
                                        <div className="h-[2px] w-8 bg-gradient-to-r transition-all duration-300 group-hover:w-full group-hover:opacity-100 opacity-30 bg-white"></div>
                                        <div className="space-y-0.5">
                                            <div className="text-[10px] text-white/40 uppercase tracking-widest font-black leading-none">{stat.label}</div>
                                            <div className="text-[9px] text-slate-500 font-medium italic">{stat.sub}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Technical Arsenal */}
                <div className="mt-40">
                    <div className="flex flex-col items-center mb-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center mb-6"
                        >
                            <Cpu size={24} className="text-blue-400" />
                        </motion.div>
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mb-4"
                        >
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 font-display">Arsenal</span>
                        </motion.h3>
                        <p className="text-sm font-mono text-white/30 tracking-[0.4em] uppercase">// Memory Status: Optimized</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { 
                                category: 'Languages', 
                                skills: [
                                    { name: 'JavaScript', icon: TechLogos.javascript },
                                    { name: 'TypeScript', icon: TechLogos.typescript },
                                    { name: 'Python', icon: TechLogos.python },
                                    { name: 'C++', icon: TechLogos.cpp }
                                ]
                            },
                            { 
                                category: 'Frameworks', 
                                skills: [
                                    { name: 'React.js', icon: TechLogos.react },
                                    { name: 'Node.js', icon: TechLogos.node },
                                    { name: 'Tailwind', icon: TechLogos.tailwind },
                                    { name: 'Express', icon: TechLogos.node }
                                ]
                            },
                            { 
                                category: 'Data & Cloud', 
                                skills: [
                                    { name: 'AWS', icon: TechLogos.aws },
                                    { name: 'Docker', icon: TechLogos.docker },
                                    { name: 'MongoDB', icon: TechLogos.mongodb },
                                    { name: 'PostgreSQL', icon: TechLogos.postgresql }
                                ]
                            }
                        ].map((grp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                                    <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.3em]">{grp.category}</span>
                                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
                                </div>

                                    <div className="grid gap-4">
                                    {grp.skills.map((skill, j) => (
                                        <motion.div
                                            key={j}
                                            whileHover={{ y: -5 }}
                                            className="group relative bg-[#f8fafc] dark:bg-[#0c0c0e] border border-slate-200 dark:border-white/5 rounded-2xl p-6 overflow-hidden transition-all hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-[#111114]"
                                        >
                                            <div className="relative z-10 flex items-center justify-between">
                                                <div className="flex items-center gap-5">
                                                    <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300">
                                                        <div className="transition-transform group-hover:scale-110 duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-lg font-black text-slate-900 dark:text-white mb-0.5 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                            {skill.name}
                                                        </div>
                                                        <div className="text-[10px] font-mono text-slate-400 dark:text-white/30 uppercase tracking-[0.2em] transition-colors">
                                                            {skill.name === 'React.js' ? 'Scalable UI Ecosystems' : 
                                                             skill.name === 'Node.js' ? 'Distributed Logic Units' :
                                                             skill.name === 'AWS' ? 'Cloud Native Hosting' :
                                                             skill.name === 'Docker' ? 'Containerized Workflows' :
                                                             skill.name === 'MongoDB' ? 'Non-Relational Storage' :
                                                             skill.name === 'PostgreSQL' ? 'Structured Data Models' :
                                                             skill.name === 'JavaScript' ? 'Advanced Algorithmic ES6+' :
                                                             skill.name === 'TypeScript' ? 'Enterprise Type Safety' :
                                                             skill.name === 'Python' ? 'Data Pipeline Orchestration' :
                                                             skill.name === 'C++' ? 'System-Level Performance' :
                                                             skill.name === 'Tailwind' ? 'Utility-First Styling' :
                                                             'Professional Technology'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hover Terminal Effect */}
                                            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-slate-800 dark:text-white transition-colors">
                                                <div className="flex items-center gap-2 font-mono text-[9px]">
                                                    <span className="text-blue-600 dark:text-blue-500 transition-colors">&gt;</span>
                                                    <span className="text-slate-400 dark:text-white/40 italic transition-colors">init module.</span>
                                                    <span className="text-blue-600 dark:text-blue-400 font-bold transition-colors">{skill.name.toLowerCase().replace('.', '')}</span>
                                                    <span className="text-emerald-600 dark:text-emerald-500 font-bold transition-colors">.run</span>
                                                </div>
                                            </div>

                                            {/* Corner Accent */}
                                            <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};


