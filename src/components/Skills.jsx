import { Award, Code, Wrench } from "lucide-react";
import { skills } from "../data/resumeData";

const iconMap = {
  Programação: Code,
};

const Skills = ({ sectionRef, isVisible }) => (
  <section
    ref={sectionRef}
    id="skills"
    className={`min-h-screen flex items-center px-6 py-20 transition-all duration-1000 delay-500 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <div className="max-w-5xl mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
        <Award className="w-10 h-10 text-slate-500" />
        Competências Técnicas
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], idx) => {
          const Icon = iconMap[category] || Wrench;
          return (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-600"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-3">
                <Icon className="w-6 h-6" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-700/50 rounded-lg text-sm text-slate-300 border border-slate-600 hover:border-slate-500 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
