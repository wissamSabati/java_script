const myarray = ["banane", "pomme", "cerise", "poire"];
console.log("mon premier tableau:", myarray);
const cars = new Array("Saab", "Volvo", "BMW");
console.log("mon deuxième tableau:", cars);

console.log("la taille du tableau myarray est de :", myarray.length);
console.log (myarray[0])

myarray[0] = "orange";
console.log (myarray[0])
console.log(myarray.toString());
const nombres = [2, 3, 4];

//spreader operator ... Afficher une copie de tableau
const nvtab = [1, ...nombres, 5];
console.log("le nouveau tableau est :", nvtab);
console.log(myarray.join("/"));  //joindre le tableau avec notre operateur 

let voiture =cars.pop(); //supprimer le dernier élément du tableau shift
console.log( "les voitures sont :"+ voiture);
console.log("les cars sont :", cars);


let fruit = myarray.push("kiwi"); //ajouter un élément à la fin du tableau inshift
console.log(myarray);

const boys = ["Jean", "Pierre", "Paul"];
const girls = ["Marie", "Sophie", "Laura"];
const children = boys.concat   (girls); //concaténer deux tableaux
console.log("la liste des enfants est :", children);


const semaine = ["lun ", "mra", "mer", "jeu", "ven", "sam", "ddi"];
let sup = semaine.pop()
console.log("le nv tab avec suppression de dernier element ddi", semaine);

let ajout = semaine.push("dim")
console.log("le nv tab avec l'ajout de dernier dim" ,semaine);

semaine[1] = "mar"
console.log("remplacement de mra par mar :", semaine);

console.log("la longueur du tableau semaine est de :", semaine.length);

const x = ["banane" , "orange" , "pomme" , "mongue"];

x.splice(2, 0, "citron" , "kiwi"); //donc l'index 2, supprimer 0 élément et ajouter citron et kiwi à la placde de l'index 2  
console.log("le tableau après utilisation de splice :", x);


x.splice(1, 1); //donc l'index 3, supprimer 1 élément
console.log("le tableau après suppression d'un élément avec splice :", x);

const y = ["fraise", "framboise", "mûre", "myrtille"];
console.log(y);

const slicey = y.slice(3); //garder le tableau à partir de l'index 3
console.log("le tableau extrait avec slice :", slicey);

const z = ["fraise", "framboise", "mûre", "myrtille", "pêche", "nectarine"];
const slicez = z.slice(1 , 3); // garder le tableau à partir de l'index 1 jusqu'à l'index 3 (3 non inclus) ou bien extraire les éléments d'index 1 et 2
console.log("le tableau extrait avec slice de l'index 1 à 3 :", slicez);

