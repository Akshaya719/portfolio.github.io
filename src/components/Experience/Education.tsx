import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const educationData = [
    {
        degree: 'Bachelor of Technology in CSE',
        institution: 'Lovely Professional University',
        details: 'CGPA: 7.50',
        period: '2023 — 2026',
        location: 'Phagwara, Punjab',
        status: 'In Progress',
        color: 'bg-blue-500'
    },
    {
        degree: 'Intermediate (Class 12th)',
        institution: 'ODM Public School',
        details: 'Percentage: 82.33%',
        period: '2021 — 2022',
        location: 'Bhubaneswar, Odisha',
        status: 'Completed',
        color: 'bg-emerald-500'
    },
    {
        degree: 'Matriculation (Class 10th)',
        institution: 'Kendriya Vidyalaya Suranussi',
        details: 'Percentage: 90.8%',
        period: '2019 — 2020',
        location: 'Jalandhar, Punjab',
        status: 'Completed',
        color: 'bg-purple-500'
    }
];

export const Education = () => {
    return (
        <Section id="education" className="bg-slate-50 dark:bg-[#09090b] border-y border-slate-200 dark:border-slate-800/80 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm mb-6"
                    >
                        < GraduationCap size={20} className="text-blue-500" />
                        <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Academic Roadmap</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white font-display mb-6">
                        Education
                    </h2>

                </div>

                <div className="relative">
                    {/* The Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-800 to-transparent transform md:-translate-x-1/2"></div>

                    <div className="flex flex-col gap-10 md:gap-12">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "circOut" }}
                                className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-[#09090b] border-4 border-slate-200 dark:border-slate-800 transform -translate-x-1/2 group-hover:scale-150 group-hover:border-blue-500 transition-all duration-500 z-20 shadow-xl shadow-white dark:shadow-black"></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[46%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                    }`}>
                                    <div className="p-8 bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-blue-500/20 transition-all duration-500 relative group/card overflow-hidden">
                                        {/* Status Badge */}
                                        <div className={`absolute top-6 ${index % 2 === 0 ? 'left-6' : 'right-6'} inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-black/20 rounded-full border border-slate-100 dark:border-white/5`}>
                                            <CheckCircle2 size={12} className={edu.status === 'Completed' ? 'text-emerald-500' : 'text-blue-500 animate-pulse'} />
                                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">{edu.status}</span>
                                        </div>

                                        <div className={`mb-4 inline-flex items-center gap-2 font-mono text-sm font-bold text-blue-500 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                            <Calendar size={14} />
                                            {edu.period}
                                        </div>

                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight leading-tight">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-bold mb-4">{edu.institution}</p>

                                        <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                                                <MapPin size={14} />
                                                <span className="text-xs font-bold leading-none">{edu.location}</span>
                                            </div>
                                        </div>

                                        <div className={`p-4 bg-slate-50 dark:bg-black/30 rounded-2xl border border-slate-100 dark:border-white/5 inline-flex items-center gap-3 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                            <div className={`w-2 h-2 rounded-full ${edu.color}`}></div>
                                            <span className="text-sm font-black text-slate-700 dark:text-slate-200 font-mono italic text-right">
                                                {edu.details}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Background Index (Hidden on Mobile) */}
                                <div className="hidden md:block w-[42%] text-center">
                                    <div className="font-mono text-[8rem] font-black opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none transform group-hover:translate-y-[-10px] transition-transform duration-1000">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
