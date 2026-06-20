//ejercicio 12 Crear un array para guardar los nombres de los días de la semana, empezando por el índice 0, para lunes. El usuario debe digitar un número entre 1 y 7 y el script, devolver el nombre del día. Se debe validar la información ingresada por el usuario.

let dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]
let num = parseInt(prompt("Ingrese un número del 1-7:"))
if (num >= 1 && num <= 7) {
    document.write("El día es: " + dias[num - 1])
} else {
    document.write("Error: debe ingresar un número entre 1-7.")
}