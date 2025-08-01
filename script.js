const userLang = navigator.language || navigator.userLanguage; // ici la ligne récupère le language préféré de l'utilisateur et le met dans la variavle userLang. En gros si tu est francais belge la variable va être égale a fr-BE.
if (userLang.toLowerCase().startsWith("fr")) { // ici on vérifie si les deux permières lettres sont fr, car si tu est francais ton language préféré sera fr-XX.
    window.location.href = "fr/index.html"; // comme tu est francais on ouvre l'index.html francais
} else { // sinon...
    window.location.href = "en/index.html"; // l'index englais
}

// oui je me suis fiat chier a faire des commmentaires donc dis pas que tu as pas compris STP.
// NytrixFM
