
import { Hero } from '../components/portfolio/Hero';
import { About } from '../components/portfolio/About';
import { Skills } from '../components/portfolio/Skills';
import { Projects } from '../components/portfolio/Projects';
import { Contact } from '../components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
