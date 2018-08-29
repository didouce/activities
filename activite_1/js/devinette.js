/*
Activité : jeu de devinette
*/
 
// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO
 
console.log("Bienvenue dans ce jeu de devinette !");
 
// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
 
// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");
 
// TODO : complétez le programme
 
function myFunction() { 
    var i = 1; 
    var nombre = null;

    while(i <7 && nombre!=solution) {
        nombre = Number(prompt("Entrez un nombre :"));
        if( nombre == solution) {
            console.log("Bravo ! La solution était " + solution);
            console.log("Vous avez trouvé en " + i + " essai(s)");

        }
        else if( nombre < solution) {
            console.log(nombre + " est trop petit");
        }
        else {
            console.log(nombre + " est trop grand");
        }
        i++
    }
    if(nombre!=solution) {
        console.log("Perdu... La solution était: " + solution);
    }
};