function exemplevar() { //Scope de fonction donc x est visible partout dans la fonction (la portée de var est la fonction  )
    var x = 5;
    if (true) {
        var x = 10; // same variable!
        console.log(x , "la valeur de x à l'intérieur du condition"); // 10 
    }
    console.log(x , "la valeur de x à l'extérieur du condition"); // 10 
}
exemplevar();

function exemplelet() { //Scope de bloc donc y est visible seulement dans le bloc où elle est déclarée (la portée de let est le bloc  )
    let y = 5;              
    if (true) {
        let y = 10; // different variable
        console.log(y , "la valeur de y à l'intérieur du condition"); // 10 
    }    
    console.log(y , "la valeur de y à l'extérieur du condition"); // 5  
}
exemplelet();

function exempleconst(){
    const z = 5;
    z =10;
    console.log(z);
}
exempleconst(); // TypeError: Assignment to constant variable.
console.log("Une erreur s'est produite car on ne peut pas réassigner une valeur à une constante déclarée avec const."); 