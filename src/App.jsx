import './App.css'

function App() {
  // URL do seu repositório
  const repoUrl = "https://github.com/felipebcarlos/10CLDR_TF_DEVOPS_CI-CD";

  return (
    <div className="container">
      <header>
        <h1>Trabalho Final DevOps</h1>
        <h2>Turma 10CLDR</h2>
      </header>

      <main>
        <p className="content-text">
          Esta é uma página web estática. Desenvolvida para registrar a entrega do trabalho final da disciplina de DevOps CI/CD.
        </p>

        <p className="content-text">
          Ela usa{' '}
          <a href="https://nodejs.org/" target="_blank" rel="noreferrer" className="tech-link">NodeJs</a>,{' '}
          <a href="https://vitejs.dev/" target="_blank" rel="noreferrer" className="tech-link">Vite</a>,{' '}
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="tech-link">JavaScript</a>,{' '}
          <a href="https://react.dev/" target="_blank" rel="noreferrer" className="tech-link">React</a> e{' '}
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="tech-link">Github</a>.
        </p>

        <div className="cta-section">
          <p className="cta-text">
            Se quiser fazer uma cópia para aprender, avaliar e customizar do seu jeito, clique no botão abaixo para ser redirecionado ao repositório.
          </p>
          
          <a href={repoUrl} target="_blank" rel="noreferrer" className="github-button">
            Ir para o Repositório no GitHub
          </a>
        </div>
      </main>
    </div>
  )
}

export default App