
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