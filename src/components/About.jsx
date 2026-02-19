import { Target } from "lucide-react";
import { personalInfo } from "../data/resumeData";

const About = ({ sectionRef, isVisible }) => (
  <section
    ref={sectionRef}
    id="about"
    className={`min-h-screen flex items-center px-6 py-20 transition-all duration-1000 delay-200 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
        <Target className="w-10 h-10 text-slate-500" />
        Perfil Profissional
      </h2>
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700 shadow-2xl">
        {personalInfo.profileDescription.map((paragraph, idx) => (
          <p
            key={idx}
            className={`text-lg text-slate-300 leading-relaxed ${idx > 0 ? "mt-6" : ""}`}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default About;
