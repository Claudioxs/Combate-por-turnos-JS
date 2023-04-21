

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
combate(personaje_1.Vida_actual,personaje_2.Vida_actual);
console.log("### Fin del comabte ###")
//console.log(personaje_1.Nombre +" "+ personaje_1.Vida_actual +"/"+ personaje_1.Vida_maxima);
//console.log(personaje_2.Nombre +" "+ personaje_2.Vida_actual +"/"+ personaje_2.Vida_maxima);
function combate (){

    while(personaje_1.Vida_actual >= 0 || personaje_2.Vida_actual >= 0){
        console.log(personaje_1.Nombre +" "+ personaje_1.Vida_actual +"/"+ personaje_1.Vida_maxima);
        console.log(personaje_2.Nombre +" "+ personaje_2.Vida_actual +"/"+ personaje_2.Vida_maxima);
        personaje_1.Vida_actual = personaje_1.Vida_actual - personaje_2.Daño;
        personaje_2.Vida_actual = personaje_2.Vida_actual - personaje_1.Daño;

        if(personaje_1.Vida_actual >= 0){
            console.log("gana el Heroe")
        }else{
            console.log("gana el limo")
        }
    }

    

}



