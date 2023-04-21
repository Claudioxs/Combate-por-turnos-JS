

let personaje_1 = {
    Nombre: "Heroe",
    Vida_maxima: 500,
    Vida_actual: 300,
    Daño: 30

};

let personaje_2 = {
    Nombre: "Limo",
    Vida_maxima: 500,
    Vida_actual: 200,
    Daño: 20
}



console.log("#### Empezar el combate ####");
console.log(combate)
console.log("### Fin del comabte ###")
//console.log(personaje_1.Nombre +" "+ personaje_1.Vida_actual +"/"+ personaje_1.Vida_maxima);
//console.log(personaje_2.Nombre +" "+ personaje_2.Vida_actual +"/"+ personaje_2.Vida_maxima);
function combate (personaje_1,personaje_2){

    while(personaje_1.Vida_actual == 0 || personaje_2.Vida_actual == 0){
        console.log(personaje_1.Nombre +" "+ personaje_1.Vida_actual +"/"+ personaje_1.Vida_maxima);
        console.log(personaje_2.Nombre +" "+ personaje_2.Vida_actual +"/"+ personaje_2.Vida_maxima);
        console.log("Ataca el heroe "+ personaje_1.Vida_actual - personaje_2.Daño);
        console.log("Ataca el Limo "+ personaje_2.Vida_actual - personaje_1.Daño);
    }

}



