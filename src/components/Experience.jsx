import { Briefcase } from "lucide-react";
import { experiences } from "../data/resumeData";

const Experience = ({ sectionRef, isVisible }) => (
  <section
    ref={sectionRef}
    id="experience"
    className={`min-h-screen flex items-center px-6 py-20 transition-all duration-1000 delay-300 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <div className="max-w-5xl mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
        <Briefcase className="w-10 h-10 text-slate-500" />
        Experiência Profissional
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-600"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  {exp.title}
                </h3>
                <p className="text-lg text-slate-400">{exp.company}</p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="text-slate-400">{exp.period}</p>
                <p className="text-sm text-slate-500">{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-2 mt-6">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-slate-500 mt-1">▪</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
