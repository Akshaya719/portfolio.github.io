import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceData = [
    {
        role: 'Advanced Software Engineering Virtual Experience',
        company: 'Walmart USA / Forage',
        period: 'Jun 2024',
        highlights: [
            'Engineered a custom Heap data structure in Java, enabling O(log n) insertion and deletion operations to optimize shipment prioritization in logistics workflows.',
            'Designed a UML class architecture with 10+ classes and modular components, supporting multiple operational modes and database integrations.',
            'Developed a normalized Entity–Relationship (ER) database schema with 8+ entities and defined relationships, translating business requirements into a scalable data model.',
        ],
        tags: ['Java', 'UML', 'ER Modeling', 'Database Design']
    }
];

export const Experience = () => {
    return (
        <Section id="experience" className="bg-white dark:bg-[#09090b] border-y border-slate-200 dark:border-slate-800/80">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-slate-900 dark:text-white font-display">
                        Experience
                    </h2>
                    <p className="max-w-xl text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Professional milestones and practical engineering experiences.
                    </p>
                </div>

                <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group"
                        >
                            <div className="absolute -left-[3.75rem] md:-left-[4.75rem] top-0 p-3 bg-white dark:bg-[#09090b] rounded-full border border-slate-200 dark:border-slate-800 z-10">
                                <Briefcase size={20} className="text-slate-800 dark:text-slate-200 group-hover:text-blue-500 transition-colors" />
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                                    <div>
                                        <h3 className="text-2xl font-black font-display mb-1 text-slate-900 dark:text-white">
                                            {exp.role}
                                        </h3>
                                        <p className="text-base font-semibold text-slate-600 dark:text-slate-400">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="mt-4 md:mt-0 font-mono text-sm inline-flex items-center px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {exp.highlights.map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="shrink-0 h-1.5 w-1.5 rounded-full mt-2.5 bg-slate-400 dark:bg-slate-600"></span>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-3 py-1.5 bg-white dark:bg-[#09090b] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-lg">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
