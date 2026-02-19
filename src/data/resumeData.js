export const personalInfo = {
  name: "Gabriel Azevedo",
  initials: "GA",
  title: "Técnico em Mecânica | Desenvolvedor de Sistemas",
  summary:
    "Especialista em automação industrial com 3 anos de experiência. Perfil híbrido que une mecânica de precisão, programação (Python, CLP, Robótica) e otimização de processos.",
  profileDescription: [
    'Técnico em Mecânica e graduando em <strong class="text-slate-100">Análise e Desenvolvimento de Sistemas</strong> com 3 anos de experiência em chão de fábrica na <strong class="text-slate-100">EATON Corporation</strong>. Especialista em usinagem CNC e processos de precisão, com histórico comprovado na identificação de oportunidades de melhoria e otimização de fluxo produtivo.',
    'Perfil híbrido que une sólida visão técnica operacional com conhecimentos em programação (<strong class="text-slate-100">Python, CLP, CNC, Robótica</strong>) e raciocínio analítico aplicado a metodologias <strong class="text-slate-100">Lean Manufacturing</strong>. Busco contribuir para a redução de custos, aumento de eficiência e excelência operacional, integrando automação industrial e tecnologia da informação.',
  ],
  profileDescriptionPlain:
    "Técnico em Mecânica e graduando em Análise e Desenvolvimento de Sistemas com 3 anos de experiência em chão de fábrica em empresas como EATON. Especialista em usinagem CNC e processos de precisão, com conhecimentos em programação (Python, CLP, Robótica). Perfil híbrido que une visão técnica operacional com raciocínio analítico aplicado a metodologias Lean Manufacturing.",
  contact: {
    email: "gabrieldeazevedo123@gmail.com",
    phone: "(19) 98934-9089",
    phoneRaw: "+5519989349089",
    linkedin: {
      url: "https://linkedin.com/in/gabriel-azevedo-57573b251",
      label: "Gabriel Azevedo",
      short: "linkedin.com/in/gabriel-azevedo-57573b251",
    },
    location: "Campinas, SP",
  },
  availableRegions: "Campinas, Valinhos e Hortolândia",
};

export const experiences = [
  {
    title: "Operador de Produção",
    company: "EATON Corporation",
    period: "Out 2023 - Presente",
    location: "Valinhos, SP",
    achievements: [
      "Operação de máquinas CNC e retíficas com precisão dimensional",
      "Programação e supervisão de robôs industriais integrados",
      "Redução de 8% no tempo de setup através de metodologia 5S",
      "Zero acidentes na célula de trabalho (NR-12, ISO 9001)",
    ],
  },
  {
    title: "Auxiliar de Mecânica",
    company: "Experiência Industrial",
    period: "2 anos",
    location: "Região de Campinas",
    achievements: [
      "Manutenção preventiva e corretiva de equipamentos",
      "Leitura de diagramas técnicos e P&ID",
      "Inspeção dimensional com instrumentos de precisão",
    ],
  },
];

export const education = [
  {
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "UNIP - Universidade Paulista",
    period: "2025 - 2026",
    details:
      "Desenvolvimento de software, banco de dados, metodologias ágeis, Python, Java",
  },
  {
    degree: "Técnico em Mecânica",
    institution: "SENAI São Paulo",
    period: "2021 - 2022",
    details: "CNC, CLP, Robótica Industrial, Metrologia. Nota final: 10.0",
  },
];

export const skills = {
  "Operação Industrial": ["CNC", "Retíficas", "Robótica", "Fornos Industriais"],
  Programação: ["Python", "CLP", "CNC ISO", "Robôs Industriais"],
  Qualidade: ["ISO 9001", "NR-12", "Metrologia", "5S/Lean"],
  Ferramentas: ["Excel Avançado", "AutoCAD", "Pacote Office"],
};

export const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#about", label: "Perfil" },
  { href: "#experience", label: "Experiência" },
  { href: "#education", label: "Formação" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contato" },
];
