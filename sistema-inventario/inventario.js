const productos = {
tomate:"https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
papasfritas:"https://images.unsplash.com/photo-1576107232684-1279f390859f",
cebolla:"https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb",
lechuga:"https://images.unsplash.com/photo-1622205313162-be1d5712a43e",
maracuya:"https://images.unsplash.com/photo-1605027990121-cbae9e0642df",
lulo:"https://upload.wikimedia.org/wikipedia/commons/5/57/Lulo.jpg",
yuca:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Cassava.jpg",
ajo:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
papacriolla:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Papas.jpg",
manzanaverde:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
naranja:"https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b",
manzanaroja:"https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a",
sandia:"https://images.unsplash.com/photo-1563114773-84221bd62daa",
banano:"https://images.unsplash.com/photo-1603833665858-e61d17a86224",
mora:"https://images.unsplash.com/photo-1563746098251-d35aef196e83",
fresa:"https://images.unsplash.com/photo-1543528176-61b239494933",
arandano:"https://images.unsplash.com/photo-1498557850523-fd3d118b962e",
papaya:"https://images.unsplash.com/photo-1617112848923-cc2234396a8d",
paltanoverde:"https://upload.wikimedia.org/wikipedia/commons/8/8a/Plantains.jpg",
"piña":"https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1",
pera:"https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a"
};

const nombre=document.getElementById("nombre");
const cantidad=document.getElementById("cantidad");
const precio=document.getElementById("precio");
const tabla=document.querySelector("#tabla tbody");
const totalGeneral=document.getElementById("totalGeneral");
const imagen=document.getElementById("imgProducto");

function cambiarImagen(){
imagen.src=productos[nombre.value];
}

nombre.addEventListener("change",cambiarImagen);

let total=0;

document.getElementById("btnAgregar").addEventListener("click",()=>{

if(
cantidad.value===""||
precio.value===""
){
alert("Completa todos los campos");
return;
}

let producto=nombre.options[nombre.selectedIndex].text;

let cant=Number(cantidad.value);
let pre=Number(precio.value);

let subtotal=cant*pre;

total+=subtotal;

const fila=document.createElement("tr");

fila.innerHTML=`
<td>${producto}</td>
<td>${cant}</td>
<td>$${pre}</td>
<td>$${subtotal}</td>
<td>
<button class="eliminar">
Eliminar
</button>
</td>
`;

fila.querySelector(".eliminar").onclick=()=>{
total-=subtotal;
actualizarTotal();
fila.remove();
};

tabla.appendChild(fila);

actualizarTotal();

cantidad.value="";
precio.value="";
});

function actualizarTotal(){
totalGeneral.textContent=`Total general: $${total}`;
}

cambiarImagen();