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
function gererBibliotheque(bibliotheque) {
    // Afficher l'inventaire initial
    console.log("Inventaire actuel:");
    for (let livre in bibliotheque) {
        console.log(`${livre}: ${bibliotheque[livre]} exemplaires`);
    }

    // Demander à l'utilisateur quelle opération il veut effectuer
    let operation = prompt("Voulez-vous 'ajouter' ou 'retirer' des livres ?").toLowerCase();

    // Demander le titre du livre
    let titreLivre = prompt("Quel est le titre du livre ?");
    
    // Demander la quantité de livres à ajouter ou retirer
    let quantite = parseInt(prompt("Combien d'exemplaires voulez-vous ajouter/retirer ?"));

    if (operation === "ajouter") {
        // Ajouter un livre
        if (bibliotheque[titreLivre]) {
            bibliotheque[titreLivre] += quantite;
            console.log(`Ajout de ${quantite} exemplaires de "${titreLivre}".`);
        } else {
            bibliotheque[titreLivre] = quantite;
            console.log(`Création de "${titreLivre}" avec ${quantite} exemplaires.`);
        }
    } else if (operation === "retirer") {
        // Retirer un livre
        if (bibliotheque[titreLivre]) {
            if (bibliotheque[titreLivre] >= quantite) {
                bibliotheque[titreLivre] -= quantite;
                console.log(`Retrait de ${quantite} exemplaires de "${titreLivre}".`);
            } else {
                console.log(`Impossible de retirer ${quantite} exemplaires de "${titreLivre}". Il n'y a que ${bibliotheque[titreLivre]} exemplaires disponibles.`);
            }
        } else {
            console.log(`Le livre "${titreLivre}" n'existe pas dans la bibliothèque.`);
        }
    } else {
        console.log("Opération non valide. Utilisez 'ajouter' ou 'retirer'.");
    }

    // Afficher l'inventaire mis à jour
    console.log("\nInventaire mis à jour:");
    for (let livre in bibliotheque) {
        console.log(`${livre}: ${bibliotheque[livre]} exemplaires`);
    }
}

// Exemple d'utilisation
let maBibliotheque = {
    "Ecume des Jours": 150,
    "Les Trois Mousquetaires": 300,
    "Les Misérables": 30
};

// Lancer la fonction pour gérer la bibliothèque
gererBibliotheque(maBibliotheque);
