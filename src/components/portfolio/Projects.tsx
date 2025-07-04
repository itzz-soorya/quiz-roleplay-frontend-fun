import { Button } from '../ui/button';
import { Star } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-cyan-400 to-purple-500"
    },
    {
      title: "AI Chat Application", 
      description: "Real-time chat application integrated with AI capabilities. Built with modern web technologies and machine learning APIs.",
      tech: ["React", "Socket.io", "Python", "OpenAI API"],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Task Management Dashboard",
      description: "Comprehensive project management tool with team collaboration features, real-time updates, and analytics dashboard.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      gradient: "from-pink-400 to-cyan-400"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-800/30 to-slate-800/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`w-full h-48 bg-gradient-to-r ${project.gradient} rounded-xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-xs text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-xs px-4 py-2 rounded-full"
                >
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-xs px-4 py-2 rounded-full"
                >
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
