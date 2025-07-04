
import { Button } from '../ui/button';

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">manideep@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">linkedin.com/in/manideep</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">github.com/manideep</span>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-4">What I Can Help With</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Web Application Development</li>
                <li>• UI/UX Design & Implementation</li>
                <li>• API Development & Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Start a Conversation
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400">
            © 2024 Manideep. Crafted with passion and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};
