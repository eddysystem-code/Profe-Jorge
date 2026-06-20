//ejercicio 11 Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo números pares, en caso de que teclee un número impar el programa acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).

let cantidad=0
let pares=parseInt(prompt("ingrese un numero:"))
while(pares%2 == 0){
    cantidad++
    pares=parseInt(prompt("ingrese otro numero:"))
}
document.write("cantidad de pares: "+cantidad)