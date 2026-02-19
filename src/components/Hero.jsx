import { personalInfo } from "../data/resumeData";

const Hero = ({ sectionRef, isVisible, onDownloadPdf }) => (
  <section
    ref={sectionRef}
    id="hero"
    className={`min-h-screen flex items-center justify-center px-6 pt-20 transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <div className="max-w-4xl text-center">
      <div className="mb-6 inline-block">
        <div className="w-32 h-32 rounded-full bg-linear-to-br from-slate-600 to-slate-700 flex items-center justify-center mx-auto mb-6 shadow-2xl">
          <span className="text-5xl font-bold text-slate-200">
            {personalInfo.initials}
          </span>
        </div>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-linear-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
        {personalInfo.name}
      </h1>
      <p className="text-2xl md:text-3xl text-slate-400 mb-8 font-light">
        {personalInfo.title}
      </p>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
        {personalInfo.summary}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Entre em Contato
        </a>
        <button
          onClick={onDownloadPdf}
          className="px-8 py-3 bg-transparent border-2 border-slate-600 hover:border-slate-500 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Download CV
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
