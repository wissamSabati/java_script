const titre = document.getElementsByClassName('title')
console.log(titre , "la récuperation de l'element via sa classe name");

const demo = document.getElementById('demo')
console.log(demo ,"la recupertaion de l'element via son id");
demo.style.color = 'red';

demo.innerHTML ='<h1>Texte modifié via JavaScript</h1>';// modifier le contenu HTML et la balise
//demo.innerText ='Texte modifié via JavaScript'; // modifier le contenu textuel seulement
 
const mySelector = document.querySelector('#list-livre li:nth-child(2) .name'); //accéder à un elment spécifique selon son css
console.log(mySelector , "la recuperation de l'element via query selector");

const para = document.getElementsByTagName('p')
console.log(para , "la recuperation de l'element via son tag name(balise)");

const bookliste = document.querySelectorAll('#list-livre .name'); //accéder à une liste d'éléments et afficher tout ses fils selon son css
console.log(bookliste , "la recuperation de la liste des elements via query selector all");
