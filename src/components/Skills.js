export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "VS Code", "Figma"] }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gold-400 mb-4">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 