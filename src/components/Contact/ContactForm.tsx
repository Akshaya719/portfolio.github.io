import { Section } from '../layout/Section';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        alert('Message sent successfully! (Demo only)');
        reset();
    };

    return (
        <Section id="contact" className="bg-slate-50 dark:bg-[#111113] border-b border-slate-200 dark:border-slate-800/80 overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
                <div className="w-full lg:w-5/12">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white font-display">
                        Get in Touch.
                    </h2>
                    <p className="max-w-xl text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-12">
                        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: <Mail size={22} />, title: 'Email', value: 'bodduakshaya22@gmail.com', href: 'mailto:bodduakshaya22@gmail.com' },
                            { icon: <Phone size={22} />, title: 'Phone', value: '+91 7815091345', href: 'tel:+917815091345' },
                            { icon: <MapPin size={22} />, title: 'Location', value: 'LPU, Punjab', href: '' },
                        ].map((contact, i) => (
                            <motion.a
                                key={i}
                                href={contact.href || '#contact'}
                                className={`flex items-center gap-6 group p-4 rounded-2xl border border-transparent hover:bg-white dark:hover:bg-[#09090b] hover:border-slate-200 dark:hover:border-slate-800 transition-all ${contact.href ? 'cursor-pointer' : 'cursor-default'}`}
                                whileHover={contact.href ? { x: 5 } : {}}
                            >
                                <div className="p-3.5 bg-slate-200 dark:bg-slate-900 rounded-xl text-slate-700 dark:text-slate-300 group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-colors">
                                    {contact.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-0.5">{contact.title}</h4>
                                    <p className="text-base font-bold text-slate-900 dark:text-white font-display">{contact.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-12 flex gap-4 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                        {[
                            { icon: <Github size={20} />, href: 'https://github.com/Akshaya719', label: 'GitHub' },
                            { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/boddu-akshaya-/', label: 'LinkedIn' },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                aria-label={social.label}
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-[#09090b] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:bg-white dark:hover:text-slate-900 dark:hover:border-white transition-all hover:-translate-y-1"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-7/12">
                    <div className="p-8 md:p-10 bg-white dark:bg-[#09090b] rounded-3xl border border-slate-200 dark:border-slate-800">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Name</label>
                                    <input
                                        {...register('name', { required: true })}
                                        placeholder="John Doe"
                                        className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-transparent transition-all font-medium placeholder:text-slate-400 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                                    <input
                                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                        placeholder="john@example.com"
                                        className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-transparent transition-all font-medium placeholder:text-slate-400 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                                <textarea
                                    {...register('message', { required: true })}
                                    rows={5}
                                    placeholder="Write your message here..."
                                    className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-transparent transition-all font-medium placeholder:text-slate-400 resize-none outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full group py-4 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-base font-bold rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                            >
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
};
