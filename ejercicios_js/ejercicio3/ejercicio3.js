//ejercicio 3 
let hora= parseInt(prompt("ingrese una hora (0/23):"))// primero creamos una variable con el let despues usamos el parseInt para lo q le digamos a la consola lo convierta a texto el prompt es como el input de python
let minutos= parseInt(prompt("ingrese un minuto (0/59):"))
let segundos= parseInt(prompt("ingrese un segundo (0/59):"))
segundos++//a la variable segundos se le coloca el ++ para poder aumentar numero tras otro
if(segundos === 60) {//los segundos deben ser estrictamente igual a 60 para q cuando se cumpla la condicional 
    segundos = 0//esto es para dar a entender q la Variable empieza en 0
    minutos++//esto se hace para q si se cumple la condicional le aumente un valor mas
}
if(minutos === 60) {
    minutos = 0
    hora++
}
if(hora === 24) {
    hora = 0
}
hora = String(hora).padStart(2, "0")//la variable horra la pasamos a texto con el string para poder usar el padstart el 2 lo q hace es dar a entender q siempre tenemos q tener 2 caracteres y el "0"es para q se complete el espacio en caso de q el resultado solo sea 1 caracter
minutos = String(minutos).padStart(2, "0")
segundos = String(segundos).padStart(2, "0")
document.write(hora + ":" + minutos + ":" + segundos)//el document.write es cpmp el print de python donde colocamos las variables mas el ":"para q visuaalmente se vea separadas las variable