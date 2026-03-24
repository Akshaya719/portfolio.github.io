import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, github, demo, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative h-full bg-white dark:bg-[#09090b] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col"
        >
            <div className="absolute top-6 right-6 flex gap-2.5 z-50">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white shadow-sm transition-all hover:scale-105 active:scale-95"
                        title="View Source Code"
                    >
                        <Github size={18} />
                    </a>
                )}
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white shadow-sm transition-all hover:scale-105 active:scale-95"
                        title="Live Demo"
                    >
                        <ExternalLink size={18} />
                    </a>
                )}
            </div>

            <div className="p-8 pb-4 flex-1">
                <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white tracking-tight font-display pr-20">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                    {description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="h-24 mt-4 bg-slate-50 dark:bg-[#0c0c0e] border-t border-slate-200 dark:border-slate-800 relative transition-colors overflow-hidden group-hover:bg-blue-500/5">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 dark:from-black/20 to-transparent"></div>
                 {/* Decorative mock wireframe view */}
                 <div className="absolute top-6 left-12 right-12 bottom-0 bg-white dark:bg-[#09090b] rounded-t-xl border-x border-t border-slate-200 dark:border-slate-800 shadow-sm flex flex-col p-4 gap-2 transform group-hover:-translate-y-1 transition-transform duration-500">
                     <div className="h-4 w-1/3 bg-slate-100 dark:bg-slate-800 rounded-sm"></div>
                     <div className="h-3 w-full bg-slate-50 dark:bg-slate-900 rounded-sm"></div>
                 </div>
            </div>
        </motion.div>
    );
};
