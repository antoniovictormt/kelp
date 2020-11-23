<p align="center">
   <img src="" alt="Kelp" width="280"/>
</p>

<p align="center">
  <a href="#books-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#green_book-how-to-run">How to Run</a>
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/antonio-victor-melo-trindade-48aab615b//">
      <img alt="Antonio Victor Melo Trindade" src="https://img.shields.io/badge/-Antonio_Victor_Melo_Trindade-d21100?style=flat-square&logo=Linkedin&logoColor=white&labelColor=3700ff" />
   </a>
  
</p>

<p align="center">
  <img src="" alt="Kelp" width="100%">
</p>

## :books: Technologies

This project was made using the follow technologies:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

## :computer: Project
 
## :green_book: How to run

### Clone Repository
```bash
$ git clone https://github.com/antoniovictormt/kelp.git
```

### Run Server Project
🌐 Entre na pasta [`server/`](server/) e execute os seguintes comandos:

<details>
<summary><i>com <b>npm</b></i></summary>

```bash
# Instalar dependências
$ npm install
# Criar banco de dados
$ npm typeorm migration:run
# Iniciar servidor
$ npm dev
```
</details>

<details>
<summary><i>com <b>yarn</b></i></summary>

```bash
# Instalar dependências
$ yarn
# Criar banco de dados
$ yarn typeorm migration:run
# Iniciar servidor de desenvolvimento
$ yarn dev
```
</details>
⚠️ Go to http://localhost:3333/ to see the result.