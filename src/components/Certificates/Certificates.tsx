import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { Award, Eye, ShieldCheck, ExternalLink } from 'lucide-react';

const certificates = [
    {
        title: 'Cloud Computing',
        issuer: 'NPTEL / Swayam', // Typical issuer for this course in India
        date: '2024',
        category: 'Cloud',
        description: 'Comprehensive study of cloud architecture, virtualization, and distributed systems management.',
        credentialUrl: './certificates/Cloud_Computing.pdf',
        isAvailable: true,
        brandColor: '#FF9900'
    },
    {
        title: 'Advanced Software Engineering',
        issuer: 'Walmart USA / Forage',
        date: 'Jun 2024',
        category: 'Engineering',
        description: 'Mastered architectural patterns, UML modeling, and complex system design tasks.',
        credentialUrl: './certificates/walmart_forage_certificate.pdf',
        isAvailable: true,
        brandColor: '#0071CE'
    },
    {
        title: 'Node.js (Basic)',
        issuer: 'HackerRank',
        date: '2024',
        category: 'Backend',
        description: 'Demonstrated fundamental knowledge of Node.js concepts and practical implementations.',
        credentialUrl: './certificates/nodejs_basic_certificate.pdf',
        isAvailable: true,
        brandColor: '#2EC866'
    },
    {
        title: 'Java (Basic)',
        issuer: 'HackerRank',
        date: '2024',
        category: 'Problem Solving',
        description: 'Demonstrated strong object-oriented and algorithmic skills with Java basic concepts.',
        credentialUrl: './certificates/java_basic_certificate.pdf',
        isAvailable: true,
        brandColor: '#E76F00'
    },
];

export const Certificates = () => {
    return (
        <Section id="certificates" className="bg-slate-50 dark:bg-[#0c0c0e] border-y border-slate-200 dark:border-slate-800/80 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4">
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
                            <Award size={32} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
                                Certificates
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium mt-1">
                                Professionally verified credentials and industry program completions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="group relative flex flex-col bg-white dark:bg-[#09090b] rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Brand Stripe */}
                            <div className="h-1.5 w-full transition-opacity opacity-30 group-hover:opacity-100" style={{ backgroundColor: cert.brandColor }}></div>

                            <div className="p-8 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded-lg">
                                        {cert.category}
                                    </span>
                                    {cert.isAvailable && (
                                        <div className="flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400">
                                            <ShieldCheck size={14} />
                                            <span className="text-[10px] font-bold uppercase tracking-wider">Verified</span>
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {cert.title}
                                </h3>
                                <p className="text-sm font-bold text-slate-500 dark:text-slate-500 mb-4">
                                    {cert.issuer}
                                </p>

                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8">
                                    {cert.description}
                                </p>

                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
                                    <span className="font-mono text-[11px] font-bold text-slate-400">
                                        {cert.date}
                                    </span>

                                    <div className="flex gap-2">
                                        {cert.isAvailable ? (
                                            <a
                                                href={cert.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/10"
                                            >
                                                <Eye size={14} />
                                                View
                                            </a>
                                        ) : (
                                            <button
                                                title="Credential preview coming soon"
                                                className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-xl text-xs font-bold cursor-help border border-slate-200 dark:border-slate-700 opacity-60"
                                            >
                                                <ExternalLink size={13} />
                                                External
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section>
    );
};
