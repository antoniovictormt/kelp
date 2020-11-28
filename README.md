<p align="center">
   <img src="./github/logo.png" alt="Kelp" width="280"/>
</p>

<p align="center">
  <a href="#movie_camera-web-preview">Web Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#file_folder-demo-website">Demo Website</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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
  <img src="./github/landing.png" alt="Kelp" width="100%">
</p>

## :movie_camera: Web Preview
![Happy web preview](.github/kelpf.gif "Happy Web Preview")

## :file_folder: Demo Website
👉  Demo: You can acess the website at: (http://www.kelpf.tk/)   

## :books: Technologies

This project was made using the follow technologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## :computer: Project
 
## :green_book: How to run

### Clone Repository
```bash
$ git clone https://github.com/antoniovictormt/kelpf.git
```

### Run Web Project
💻 Enter the folder [`web/`](web/) and run the following commands:

<details>
<summary><i>com <b>npm</b></i></summary>

```bash
# Install dependencies
$ npm install
# Start development
$ npm start
```
</details>

<details>
<summary><i>com <b>yarn</b></i></summary>

```bash
# Install dependencies
$ yarn
# Start development
$ yarn start

create a .env.production for your REACT_APP_HOST and REACT_APP_API

</details>
⚠️ Go to http://localhost:3000/ to see the result.

### Run Server Project
🌐 Enter the folder [`server/`](server/) and run the following commands:

<details>
<summary><i>com <b>npm</b></i></summary>

```bash
# Install dependencies
$ npm install
# Create database
$ npm typeorm migration:run
# Start server
$ npm dev
```
</details>

<details>
<summary><i>com <b>yarn</b></i></summary>

```bash
# Install dependencies
$ yarn
# Criar banco de dados
$ yarn typeorm migration:run
# Start server
$ yarn dev
```
</details>
⚠️ Go to http://localhost:3333/ to see the result.