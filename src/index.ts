//Trabajo Practico Final de Carolina Vaca

let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let descontar = document.getElementById("btn-descontar");
let calcular = document.getElementById("btn-calcular");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let vaciar = document.getElementById("vaciar");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

const agregarAlCarrito = () => {
  productos.push(producto.value);
  precios.push(Number(precio.value));

  lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;
  producto.value = "";
  precio.value = "";
};
const hacerDescuento = () => {
  if (suma > 2500) {
    suma = suma - suma * 0.1;
    total.innerHTML = suma;
  } else console.log("Con su compra de $2.500 puede acceder a un descuento");
};
const calcularTotal = () => {
  suma = 0;
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  total?.innerHTML = suma;
};

const vaciarLista = () => {
  lista?.innerHTML = "";
  total?.innerHTML = "";
};

agregar?.addEventListener("click", agregarAlCarrito);
descontar?.addEventListener("click", hacerDescuento);
calcular?.addEventListener("click", calcularTotal);
vaciar?.addEventListener("click", vaciarLista);
