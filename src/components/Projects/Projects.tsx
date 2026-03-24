import { Section } from '../layout/Section';
import { ProjectCard } from './ProjectCard';

const projectsData = [
    {
        title: 'AI Job Preparation Platform',
        description: 'AI-powered resume analysis and job matching with Gemini API integration. Features ATS resume generation and interview prep.',
        tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Puppeteer'],
        github: 'https://github.com/Akshaya719/ai-job-preparation-platform',
        demo: 'https://ai-job-preparation-platform.vercel.app/',
    },
    {
        title: 'Foodie Frenzy',
        description: 'Full-stack food delivery system with real-time order tracking, Stripe payment integration, and an admin dashboard.',
        tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind', 'Stripe'],
        github: 'https://github.com/Akshaya719/foodie-frenzy',
        demo: 'http://tomato.chahatkesh.me',
    },
    {
        title: 'Eventify',
        description: 'Event booking platform with JWT auth, 2FA, role-based access control, and email notifications via Nodemailer.',
        tech: ['React.js', 'Node.js', 'JWT', 'MongoDB', 'Tailwind'],
        github: 'https://github.com/Akshaya719/eventify',
        demo: 'https://invite-onweb.vercel.app/',
    },
];

export const Projects = () => {
    return (
        <Section id="projects" className="bg-slate-50 dark:bg-[#09090b] border-y border-slate-200 dark:border-slate-800/80">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-slate-900 dark:text-white font-display">
                        Project Overview
                    </h2>
                    <p className="max-w-xl text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        A curated selection of full-stack implementations showcasing my technical depth, system design, and API integrations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
};
