var contact = [ { nom: "Lévisse", prenom: "Carole" }, {nom: "Nelsonne", prenom: "Mélodie"} ];

var choix = -1;
while( choix!==0) {
    var option = ["1: Lister les contacts","2: Ajouter un contact", "0: Quitter"];
    option.forEach(function(element) {
        console.log(element);
      });

    choix = Number(prompt("Choisissez une option :"));
    if(choix==1) {
        console.log("Voici la liste de tous vos contacts :");
        contact.forEach(function(element) {
            console.log(element.nom, element.prenom);
        });
    }
    else if (choix==2) {
        var nom = String(prompt("Entrez le nom du nouveau contact :"));
        var prenom = String(prompt("Entrez le prénom du nouveau contact :"));
        contact.push({ nom: nom, prenom: prenom });
        console.log("Le nouveau contact a été ajouté");
    }
}
console.log("Au revoir !");