//ejercicio8
let x=parseInt(prompt("ingrese un numero en x: "))
let n=parseInt(prompt("ingrese un numero en n: "))
let suma = 0
for (let i = 2 ; i <= n ; i+=2){
         suma += (x**i)/i
    }
document.write(suma)