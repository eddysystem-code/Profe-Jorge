//EJERCICIO2
let d1,d2,d3,d4,d5,d6,num,coc
num=parseInt(prompt("ingrese un numero de 6 cifras: "))
d6=num%10
coc=Math.trunc(num/10)
d5=coc%10
coc=Math.trunc(coc/10)
d4=coc%10
coc=Math.trunc(coc/10)
d3=coc%10
coc=Math.trunc(coc/10)
d2=coc%10
coc=Math.trunc(coc/10)
d1=coc%10
coc=Math.trunc(coc/10)
document.write("la suma es: " + (d4+d3))
document.write("\nla multiplicacion es " + (d1*d6))
document.write("\nla resta es:" + (d2-d5))