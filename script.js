/*
const text = "Creer une fonction qui analyse un texte et retourne des statistiques de base.";
function trouverMotLePlusLong(text) {
    const mots = text.match(/\b\w+\b/g);
    if (!mots) {
        return "Aucun mot trouvé dans le texte.";
    }
    const motLePlusLong = mots.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    );
    return motLePlusLong;
}
console.log(trouverMotLePlusLong(text));


let primeur = {
    fruits: ["fraise","bannane","kiwi"],
    legumes: ["carrote", "patate", "courgette"]
};
console.log(primeur);
console.log(typeof primeur);
console.log(primeur.legumes[2]);

*/
//Boucler sur un tableau:
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

//Ajouter à la fin du tableau:
let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

// Supprimer un élément par son index:
let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos
// ["Strawberry", "Mango"]

faire des prompt et lui dire d'aller me chercher le livre et lui indiquer le stock 
