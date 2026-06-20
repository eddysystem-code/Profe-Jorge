//ejercio 13 Dado un arreglo de números, cree un programa que sume todos los números que forman el array.

let num=[10,5,8,3,4]
let suma=0
for (let i = 0; i < num.length; i++) {
    suma += num[i];
}
document.write("La suma es: "+ suma)