import {
  personalInfo,
  experiences,
  education,
  skills,
} from "../data/resumeData";

/**
 * Gera o HTML do currículo e abre a janela de impressão do navegador.
 * Usa window.onafterprint para fechar a janela automaticamente.
 */
export function generatePDF() {
  const { name, title, contact, profileDescriptionPlain } = personalInfo;

  const printContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Currículo_${name.replace(/\s/g, "_")}_${new Date().toISOString().split("T")[0]}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Calibri', 'Segoe UI', sans-serif;
      color: #2c3e50;
      line-height: 1.6;
      padding: 40px;
    }
    .header {
      border-bottom: 3px solid #2c5282;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    h1 { font-size: 32px; color: #1a365d; margin-bottom: 8px; }
    .subtitle { font-size: 16px; color: #4b5563; margin-bottom: 15px; }
    .contact { font-size: 13px; color: #6b7280; }
    .section { margin-bottom: 30px; page-break-inside: avoid; }
    .section-title {
      font-size: 18px;
      color: #1a365d;
      border-bottom: 2px solid #2b6cb0;
      padding-bottom: 5px;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .item {
      margin-bottom: 20px;
      padding-left: 15px;
      border-left: 3px solid #2b6cb0;
    }
    .item-title { font-size: 15px; font-weight: 700; color: #1a365d; }
    .item-subtitle { font-size: 14px; color: #4b5563; margin-bottom: 5px; }
    .item-period { font-size: 12px; color: #6b7280; font-style: italic; margin-bottom: 8px; }
    ul { margin-left: 20px; font-size: 13px; }
    li { margin-bottom: 5px; color: #374151; }
    .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
    .skill-category { font-size: 13px; }
    .skill-category strong { color: #1a365d; display: block; margin-bottom: 5px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>${name.toUpperCase()}</h1>
    <div class="subtitle">${title}</div>
    <div class="contact">
      📞 ${contact.phone} | 📧 ${contact.email} |
      🔗 ${contact.linkedin.short} | 📍 ${contact.location}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Perfil Profissional</div>
    <p>${profileDescriptionPlain}</p>
  </div>

  <div class="section">
    <div class="section-title">Experiência Profissional</div>
    ${experiences
      .map(
        (exp) => `
      <div class="item">
        <div class="item-title">${exp.title}</div>
        <div class="item-subtitle">${exp.company} - ${exp.location}</div>
        <div class="item-period">${exp.period}</div>
        <ul>${exp.achievements.map((a) => `<li>${a}</li>`).join("")}</ul>
      </div>`,
      )
      .join("")}
  </div>

  <div class="section">
    <div class="section-title">Formação Acadêmica</div>
    ${education
      .map(
        (edu) => `
      <div class="item">
        <div class="item-title">${edu.degree}</div>
        <div class="item-subtitle">${edu.institution}</div>
        <div class="item-period">${edu.period}</div>
        <p style="font-size:13px;color:#374151;">${edu.details}</p>
      </div>`,
      )
      .join("")}
  </div>

  <div class="section">
    <div class="section-title">Competências Técnicas</div>
    <div class="skills-grid">
      ${Object.entries(skills)
        .map(
          ([cat, items]) => `
        <div class="skill-category">
          <strong>${cat}</strong>
          ${items.join(" • ")}
        </div>`,
        )
        .join("")}
    </div>
  </div>
</body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  printWindow.document.write(printContent);
  printWindow.document.close();

  // Aguarda o conteúdo carregar antes de imprimir
  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
}
