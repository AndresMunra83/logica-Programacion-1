// Solicitar al usuario que ingrese los tres números
var numero1 = parseInt(prompt("Ingrese el primer número:"));
var numero2 = parseInt(prompt("Ingrese el segundo número:"));
var numero3 = parseInt(prompt("Ingrese el tercer número:"));

//Verificar si todas las entradas son numericos
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
    console.log("por favor solo ingrese valores numericos.");
}else if(numero1 === numero2 || numero2 === numero3 || numero1 === numero3){
    console.log("uno o mas numero son iguales, ingrese nuevamente valores diferentes");
}else{
    if(numero1 >= numero2 && numero1 >= numero3){
        var nummayor = numero1;
        if(numero2 >= numero3){
            var numintermedio = numero2;
            var nummenor = numero3;
        }else{
            var numintermedio = numero3;
            var nummenor = numero2;
        }
    }else if (numero2 >= numero1 && numero2 >= numero3){
        var nummayor = numero2;
        if(numero1 >= numero3){
            var numintermedio = numero1;
            var nummenor =   numero3;
        }else{
            var numintermedio = numero3;
            var nummenor = numero1;
        }
    }else{
        var nummayor = numero3;
        if(numero1 >= numero2){
            var numintermedio = numero1;
            var nummenor = numero2;
        }else{
            var numintermedio = numero2;
            var nummenor = numero1;
        }
    }
    console.log("Los numeros ordenados de mayor a menor: " + nummayor +","+numintermedio+","+nummenor);
}
