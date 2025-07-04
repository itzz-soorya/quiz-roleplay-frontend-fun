
export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "APIs", "Database Design", "Authentication"],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "UI/UX Design"],
      gradient: "from-pink-400 to-cyan-400"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className={`text-2xl font-semibold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-200"
                    style={{ animationDelay: `${(index * 3 + skillIndex) * 0.1}s` }}
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
