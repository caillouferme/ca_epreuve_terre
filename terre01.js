// Fonction Node process.arv[1] - retrouve chemin du fichier
var chemindufichier = process.argv[1];

// Split permet de scinder en array
var parts = chemindufichier.split('/');

// Sélectionne dernier élément de array puisque toujours nom du fichier
var dernier = parts[parts.length - 1]

// Affiche le nom du fichier dans la console
console.log(dernier);