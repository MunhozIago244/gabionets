import { GraduationCap } from "lucide-react";
import { education } from "../data/resumeData";

const Education = ({ sectionRef, isVisible }) => (
  <section
    ref={sectionRef}
    id="education"
    className={`min-h-screen flex items-center px-6 py-20 transition-all duration-1000 delay-400 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <div className="max-w-5xl mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
        <GraduationCap className="w-10 h-10 text-slate-500" />
        Formação Acadêmica
      </h2>
      <div className="space-y-8">
        {education.map((edu, idx) => (
          <article
            key={idx}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-600"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-slate-400 mb-3">{edu.institution}</p>
                <p className="text-slate-300">{edu.details}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-slate-400">{edu.period}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
