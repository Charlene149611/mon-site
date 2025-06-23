// importer le module http pour créer un serveur web
const http = require("http");

// importer le module fs (filesystem qui va nous permettre de lire créer du fichier html =)

const fs = require("fs");

// importer le module path pour construire des chemins

const path = require("path");

const server = http.createServer((req, res) => {
  console.log("le serveur");
  // on va initier le chemin du fichier a servir selon la route demandée
  let filePath = "./views"; // c'est le dossier qui va contenir nos vues
  let status = 200; // on suppose que tout va bien
  let contentType = "text/html"; // on sert uniquement de l'HTML

  // on va regarder quel url est demandé
  switch (req.url) {
    case "/":
      filePath += "/index.html"; // si je demande '/' je recois index.html (page accueil)
      break;

    case "about":
      filePath += "/about.html";
      break;

    case "contact":
      filePath += "/contact.html";
      break;

    default:
      filePath += "/404.html";
      break;
  }
  fs.readFile(path.resolve(__dirname, filePath), (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Erreur interne du serveur");
    } else {
      res.writeHead(status, {
        "Content-Type": contentType,
      });
      res.end(content);
    }
  });
});

server.listen(3000, () => {
  console.log(`le serveur tourne sur l'adresse locale http://localhost:3000`);
});
