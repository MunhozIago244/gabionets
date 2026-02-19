import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { personalInfo } from "../data/resumeData";

const { contact, availableRegions } = personalInfo;

const Contact = ({ sectionRef, isVisible, onDownloadPdf }) => (
  <section
    ref={sectionRef}
    id="contact"
    className={`min-h-screen flex items-center px-6 py-20 transition-all duration-1000 delay-600 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <div className="max-w-5xl mx-auto w-full text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Vamos Conversar?
      </h2>
      <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
        Estou disponível para oportunidades em {availableRegions}. Entre em
        contato!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <a
          href={`mailto:${contact.email}`}
          aria-label={`Enviar e-mail para ${contact.email}`}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 shadow-xl"
        >
          <Mail className="w-8 h-8 mx-auto mb-3 text-slate-400" />
          <p className="text-sm text-slate-500 mb-1">Email</p>
          <p className="text-slate-300 text-sm break-all">{contact.email}</p>
        </a>

        <a
          href={`tel:${contact.phoneRaw}`}
          aria-label={`Ligar para ${contact.phone}`}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 shadow-xl"
        >
          <Phone className="w-8 h-8 mx-auto mb-3 text-slate-400" />
          <p className="text-sm text-slate-500 mb-1">Telefone</p>
          <p className="text-slate-300">{contact.phone}</p>
        </a>

        <a
          href={contact.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil no LinkedIn"
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 shadow-xl"
        >
          <Linkedin className="w-8 h-8 mx-auto mb-3 text-slate-400" />
          <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
          <p className="text-slate-300 text-sm">{contact.linkedin.label}</p>
        </a>

        <div
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-xl"
          aria-label="Localização"
        >
          <MapPin className="w-8 h-8 mx-auto mb-3 text-slate-400" />
          <p className="text-sm text-slate-500 mb-1">Localização</p>
          <p className="text-slate-300">{contact.location}</p>
        </div>
      </div>

      <button
        onClick={onDownloadPdf}
        className="px-12 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-105 shadow-2xl text-lg font-medium"
      >
        Download Currículo Completo
      </button>
    </div>
  </section>
);

export default Contact;
