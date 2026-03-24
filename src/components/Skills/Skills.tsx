import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Settings, Activity } from 'lucide-react';

const skillCategories = [
    {
        title: 'Languages',
        icon: <Code2 size={20} className="text-slate-800 dark:text-slate-200" />,
        skills: ['C++', 'Java', 'JavaScript', 'Python', 'PHP', 'C', 'Bash/Shell']
    },
    {
        title: 'Frameworks / Libs',
        icon: <Layout size={20} className="text-slate-800 dark:text-slate-200" />,
        skills: ['React.js', 'Node.js', 'jQuery']
    },
    {
        title: 'Tools / DevOps',
        icon: <Settings size={20} className="text-slate-800 dark:text-slate-200" />,
        skills: ['Git', 'GitHub', 'Linux', 'Docker', 'Kubernetes']
    },
    {
        title: 'Databases',
        icon: <Database size={20} className="text-slate-800 dark:text-slate-200" />,
        skills: ['SQL', 'MongoDB', 'PostgreSQL']
    }
];

export const Skills = () => {
    return (
        <Section id="skills" className="bg-slate-50 dark:bg-[#09090b]">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-slate-900 dark:text-white font-display">
                        Tech Stack.
                    </h2>
                    <p className="max-w-xl text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Technologies and tools I use to build robust, scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="p-8 bg-white dark:bg-[#09090b] rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-2xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill, charIdx) => (
                                    <span
                                        key={charIdx}
                                        className="px-3 py-1.5 text-sm font-semibold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* DSA Info Section */}
                <div className="mt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="p-8 bg-slate-900 dark:bg-white rounded-3xl border border-slate-800 dark:border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3 text-white dark:text-slate-900">
                                <Activity size={24} />
                                <h3 className="text-2xl font-black font-display tracking-tight">Problem Solving & Algorithms</h3>
                            </div>
                            <p className="text-slate-300 dark:text-slate-600 leading-relaxed max-w-2xl font-medium">
                                Consistent logic building and algorithm optimization. Rated <strong className="text-white dark:text-slate-900">5-Star on HackerRank</strong> in C++ and Java.
                            </p>
                        </div>
                        <div className="shrink-0 flex gap-6">
                            <div className="text-center md:text-right">
                                <h4 className="text-5xl font-black text-white dark:text-slate-900 font-display">200+</h4>
                                <p className="text-sm text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mt-1">DSA Solved</p>
                            </div>
                            <div className="w-px bg-slate-800 dark:bg-slate-200"></div>
                            <div className="text-center md:text-left">
                                <h4 className="text-5xl font-black text-white dark:text-slate-900 font-display">5★</h4>
                                <p className="text-sm text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mt-1">HackerRank</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
