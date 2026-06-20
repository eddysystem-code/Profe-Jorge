//ejercicio9 Hacer un programa que clasifique 400 personas según el deporte que practica. Los deportes son: Ajedrez, Atletismo, Fútbol, Gimnasia, Natación.
let ajedrez=0,atletismo=0,futbol=0,gimnasia=0,natacion=0
let personas
for ( let i =1 ; i<=400; i++){
    do{
        personas=parseInt(prompt("INGRESE EL DEPORTE DE LA PERSONA "+ i+":\n"+
        "1. ajedrez\n"+
        "2. atletismo\n"+
        "3. futbol\n"+
        "4. gimnasia\n"+
        "5. natacion\n"+
        "SELECIONE UNA OPCION(1,2,3,4,5):"
        ))
         if(personas<1 || personas>5){
            alert("opcion invalida, ingrese solo numeros del 1-5")
        } 
    }while(personas<1||personas>5)
    if (personas==1){
            ajedrez++
        }
    else if (personas==2){
        atletismo++
    }
    else if (personas==3){
        futbol++
    }
    else if (personas==4){
        gimnasia++
    }
    else if (personas==5){
        natacion++
    }
}
document.write("el deporte de las 400 personas son:<br>"+
    "Ajedrez: "+ajedrez+"<br>"+
    "Acletismo: "+atletismo+"<br>"+
    "Futbol: "+futbol+"<br>"+
    "Gimnasia: "+gimnasia+"<br>"+
    "natacion: "+natacion
)