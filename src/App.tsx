import { Navbar } from './components/Header/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Certificates } from './components/Certificates/Certificates';
import { Projects } from './components/Projects/Projects';
import { Education } from './components/Experience/Education';
import { ContactForm } from './components/Contact/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Education />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
