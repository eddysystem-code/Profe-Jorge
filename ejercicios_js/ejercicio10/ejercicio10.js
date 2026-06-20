//ejercicio 10 Escribir un script que pida al usuario una contraseña. Si coincide con la clave definida en el script le devolverá el mensaje "Acceso concedido" y si no coincide le devolverá el mensaje "Acceso Denegado" . Si falla tres veces se emitirá el mensaje "Alerta, intruso“.	
let contraseña_correcta=1234
let contraseña
let intentos=0
while(intentos<3){
    contraseña=parseInt(prompt("ingrese contraseña"))
    if (contraseña==contraseña_correcta){
        document.write("acceso consedido")
    }
    else if(contraseña!=contraseña_correcta){
        intentos++
        if(intentos<3){
        alert("acceso denegado,intentelo de nuevo")
        }
    } 
}
if (intentos==3){
    alert("alerta, INTRUSO")    
}