import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id: string;
    className?: string;
    children: ReactNode;
    reveal?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, reveal = true }) => {
    return (
        <section id={id} className={`py-20 px-6 sm:px-12 lg:px-24 ${className}`}>
            {reveal ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            ) : (
                children
            )}
        </section>
    );
};
