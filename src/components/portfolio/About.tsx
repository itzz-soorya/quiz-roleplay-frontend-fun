
export const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                My journey in software development has been driven by curiosity and a love for 
                creating solutions that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a strong foundation in both frontend and backend development, I enjoy 
                building complete applications from concept to deployment. I'm also exploring 
                the exciting world of AI and machine learning to create smarter applications.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-cyan-300 mb-2">Frontend Development</h4>
              <p className="text-gray-300 text-sm">Creating responsive, interactive user interfaces</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Backend Development</h4>
              <p className="text-gray-300 text-sm">Building robust APIs and server-side solutions</p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
              <h4 className="text-lg font-semibold text-pink-300 mb-2">AI & Machine Learning</h4>
              <p className="text-gray-300 text-sm">Exploring intelligent solutions and automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
