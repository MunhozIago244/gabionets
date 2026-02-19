import { FileDown } from "lucide-react";

const PdfButton = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Baixar currículo em PDF"
    className="fixed bottom-8 right-8 z-50 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-slate-500/50 group"
  >
    <FileDown className="w-5 h-5 group-hover:animate-bounce" />
    <span className="font-medium">Baixar PDF</span>
  </button>
);

export default PdfButton;
