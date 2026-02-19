
# Currículo — Gabriel Azevedo

Aplicação single-page em React + Vite que serve como portfólio / currículo interativo.

Principais características
- Design escuro responsivo com Tailwind CSS
- Componentização (Hero, About, Experience, Education, Skills, Contact, Navbar, Footer)
- Geração de PDF do currículo via janela de impressão
- Efeito de luz do cursor otimizado para performance (zero re-renders)

Tecnologias
- React 19
- Vite
- Tailwind CSS (v4 com plugin `@tailwindcss/vite`)
- Lucide Icons

Estrutura do repositório (resumida)

- `index.html` — página HTML principal
- `package.json` — scripts e dependências
- `vite.config.js` — configuração do Vite (inclui plugin do Tailwind v4)
- `src/`
	- `main.jsx` — entrada do app
	- `App.jsx` — componente raiz (compõe os outros)
	- `index.css` — estilos globais e import do Tailwind
	- `components/` — componentes da UI (Hero, About, Experience, Education, Skills, Contact, Navbar, Footer, PdfButton, CursorEffect)
	- `data/resumeData.js` — dados do currículo (separados da UI)
	- `hooks/` — hooks customizados (`useIntersectionObserver`, `useCursorPosition`)
	- `utils/generatePDF.js` — utilitário para geração de PDF

Instalação (local)

1. Clonar o repositório

```bash
git clone https://github.com/MunhozIago244/gabionets.git
cd gabionets
```

2. Instalar dependências

```bash
npm install
```

Executar em modo desenvolvimento

```bash
npm run dev
# Abre em http://localhost:5173
```

Build de produção

```bash
npm run build
npm run preview  # roda o preview do build
```

Scripts úteis (em `package.json`)

- `dev` — inicia o servidor de desenvolvimento (Vite)
- `build` — gera a versão de produção
- `preview` — serve a build para checagem local
- `lint` — roda o ESLint

Notas e decisões técnicas

- Tailwind v4: este projeto usa `@tailwindcss/vite` e a sintaxe de import do Tailwind foi adaptada para v4. Se quiser voltar ao fluxo clássico (PostCSS), será preciso reintroduzir `postcss`/`autoprefixer` e o arquivo `tailwind.config.js`.
- Performance do cursor: substituí atualizações de state por CSS custom properties atualizadas por `mousemove`, evitando re-renders desnecessários.
- Geração de PDF: implementada com `window.open` + `print()` no utilitário `src/utils/generatePDF.js`. Pode ser substituída por `html2pdf` ou `react-to-print` se desejar um controle maior.

Como contribuir

1. Abra uma issue descrevendo a sugestão ou bug
2. Crie uma branch com o prefixo `feature/` ou `fix/`
3. Faça commits pequenos e claros
4. Abra um pull request para a branch `main`

Boas práticas Git (sugestões)

```bash
# Renomear a branch local para main (opcional)
git branch -m main
git push -u origin main

# Configurar comportamento CRLF no Windows (opcional)
git config core.autocrlf true
```

Deploy

- Vercel: conectar o repositório e usar o comando de build `npm run build` (Vite é compatível out-of-the-box)
- GitHub Pages: é possível usar `gh-pages` ou um pipeline de CI para publicar o conteúdo de `dist/`

Contato

- Email: `gabrieldeazevedo123@gmail.com`
- LinkedIn: https://linkedin.com/in/gabriel-azevedo-57573b251

Licença

Este repositório não contém uma licença explícita. Adicione um arquivo `LICENSE` se desejar tornar o projeto open-source com termos explícitos.

---
README gerado/atualizado automaticamente para combinar com a estrutura do projeto.

