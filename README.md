![CI/CD Pipeline](https://github.com/felipebcarlos/10CLDR_TF_DEVOPS_CI-CD/actions/workflows/pipeline.yml/badge.svg)

# Trabalho Final - DevSecOps (Turma 10CLDR)

Este repositório contém a entrega do trabalho final da disciplina de DevOps CI/CD. O projeto consiste em uma aplicação web moderna integrada a um pipeline completo de **DevSecOps** (Desenvolvimento, Segurança e Operações).

## 🔗 Links do Projeto
* **[Acesse a Aplicação no Ar (GitHub Pages)](https://felipebcarlos.github.io/10CLDR_TF_DEVOPS_CI-CD/)**
* [Visualizar Pipeline no GitHub Actions](https://github.com/felipebcarlos/10CLDR_TF_DEVOPS_CI-CD/actions)

---

## 🛠️ Stack Tecnológico

O projeto utiliza as seguintes tecnologias e ferramentas:

### Frontend
* **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida.
* **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.

### CI/CD & Infraestrutura
* **[GitHub Actions](https://github.com/features/actions)**: Orquestrador de workflows de CI/CD.
* **[GitHub Pages](https://pages.github.com/)**: Hospedagem estática gratuita e automatizada.

### Qualidade de Código (QA)
* **[ESLint](https://eslint.org/)**: Ferramenta de Linter para análise estática e padronização de código.
* **Integration Tests**: Scripts automatizados para validação de integração.

### Segurança (Sec)
* **[Trivy](https://aquasecurity.github.io/trivy/)** (SAST): Scanner de segurança para encontrar vulnerabilidades no código fonte e segredos expostos.
* **[NPM Audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)** (SCA): Análise de vulnerabilidades nas dependências do projeto.
* **[OWASP ZAP](https://www.zaproxy.org/)** (DAST): Scanner de segurança dinâmica que ataca a aplicação em execução para encontrar falhas de segurança web.

---

## ⚙️ Arquitetura do Pipeline

O pipeline foi desenhado seguindo as melhores práticas de mercado, dividindo o fluxo em **6 Jobs** distintos:

### 1. 🛡️ Qualidade (Quality)
Executa a verificação de sintaxe (`Lint`) e testes de integração. Garante que o código está limpo antes de prosseguir.

### 2. 🔒 Segurança Estática (SAST)
Roda em paralelo com a Qualidade.
* Executa o **NPM Audit** para checar bibliotecas inseguras.
* Executa o **Trivy** para varrer o código em busca de senhas expostas (Secrets) e falhas de segurança.

### 3. 📦 Build
Compila a aplicação React para produção. Este passo só inicia se os jobs de *Qualidade* e *SAST* forem aprovados. O artefato gerado é salvo para uso posterior.

### 4. 🚀 Deploy
Baixa o artefato construído e realiza a publicação automática no ambiente de produção (**GitHub Pages**).

### 5. 🩺 Smoke Test (Health Check)
Após o deploy, executa validações rápidas (`curl`) para garantir que o site está respondendo corretamente (HTTP 200 OK) e está acessível publicamente.

### 6. 🕷️ Segurança Dinâmica (DAST)
Com o site no ar, o **OWASP ZAP** realiza um scan automatizado na URL pública em busca de vulnerabilidades de tempo de execução (como falta de cabeçalhos de segurança, XSS, etc).

---

## 💻 Como rodar localmente

Para executar este projeto na sua máquina, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/felipebcarlos/10CLDR_TF_DEVOPS_CI-CD.git
```

2. Entre na pasta e instale as dependências:
```bash
cd 10CLDR_TF_DEVOPS_CI-CD
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

---

### OPCIONAL 🔒 Segurança Estática (SAST)
No arquivo "src/App.jsx", a linha 9 possui uma vulnerabilidade coloca propsitalmente para que o Trivy alerte sobre a existência de uma senha em texto puro diretamente no código da página.
A linha 9, assim como as linhas 7 e 8 podem ser removidas caso queria ver o comportamento do job de SAST.