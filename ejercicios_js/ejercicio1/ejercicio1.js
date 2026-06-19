//EJERCICIO1
 let unidad,cantidad,mi,km,mt
 unidad=parseInt(prompt("digite 1 para millas - 2 para kilometros - 3 para metros"))
 cantidad=(prompt("Digite el valor a convertir: "))
 switch(unidad){
     case 1: 
         km=cantidad*1.6093
         mt=cantidad*1609.34
         document.write(cantidad +"millas, equivalen a " + km +"kilometros; "+ mt + "metros")
         break
     case 2:
         mi=  cantidad*0.621371
         mt= cantidad*1000
         document.write(cantidad + "kilometros, equivalen a"+ mi + "millas;" + mt + "metros")
         break
     case 3:
         mi=cantidad*0.000621371
         km=cantidad/ 1000
         document.write(cantidad + " metros, equivalen a" + mi + "millas;" * km + "kilometros")
         break
     default:
         document.write("valores INCORRECTOS.")
 }