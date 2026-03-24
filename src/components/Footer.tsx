import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-12 px-6 sm:px-12 bg-white dark:bg-[#09090b] text-center w-full mt-auto">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h2 className="text-xl font-black font-display text-slate-900 dark:text-white mb-1 tracking-tight">
                        B. Akshaya
                    </h2>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Portfolio &copy; {new Date().getFullYear()}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {[
                        { icon: <Github size={20} />, href: 'https://github.com/Akshaya719', label: 'GitHub' },
                        { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/boddu-akshaya-/', label: 'LinkedIn' },
                        { icon: <Mail size={20} />, href: 'mailto:bodduakshaya22@gmail.com', label: 'Email' },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
