//ejercicio 4
let a = parseInt(prompt("ingrese un numero + o - : "))
let b = parseInt(prompt("ingrese un numero + o - : "))
let c = parseInt(prompt("ingrese un numero + o - : "))
let discriminante = ((b) ** 2 - (4 * a * c))
console.log(discriminante)
if (discriminante === 0) {
    let cero = (-b)/(2*a)
    document.write("solo existe una solucion real, que es " + cero)
}else if(discriminante>0) {
    let solucion_1 = (-b + Math.sqrt(discriminante))/(2 * a)//el (Math.sqrt)es la funcion para calcular la raiz cuadrada
    let solucion_2 = (-b - Math.sqrt(discriminante))/(2 * a)
    document.write("hay dos soluciones reales: la solucion 1 es " + solucion_1 +  " y la solucion 2 es " + solucion_2)
}else{
    document.write("existen dos soluciones imaginarias.")
    let real = (-b /(2 * a))
    let imaginaria = (Math.sqrt(- discriminante)/ (2 * a))
    document.write("solucion 1: " + real + "+" + imaginaria + "i" + " y la solucion 2: " + real + "-" + imaginaria + "i")//en este caso la "i" significa q es un numero imaginario 
}