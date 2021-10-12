let producto1;
let producto2;
let producto3;
let producto4;
let producto5;
let arrayProductos = [];

function impExterior(valor) {
  return valor * 1.65
}

class Hardware {
  constructor(id, nombre, precio, stock, origen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.origen = origen


  }
}

for (i = 1; i <= 5; i++) {
  this.id = parseInt(prompt("ingrese id"));
  this.nombre = prompt("ingrese nombre del producto");
  this.precio = parseInt(prompt("ingrese el precio"));
  this.stock = parseInt(prompt("ingrese el stock"));
  this.origen = prompt("ingrese el país de manufactura");

  if (i == 1) {
    producto1 = new Hardware(id, nombre, impExterior(precio), stock, origen);
    arrayProductos.push(producto1)
  } else if (i == 2) {
    producto2 = new Hardware(id, nombre, impExterior(precio), stock, origen);
    arrayProductos.push(producto2)
  } else if (i == 3) {
    producto3 = new Hardware(id, nombre, impExterior(precio), stock, origen);
    arrayProductos.push(producto3)
  } else if (i == 4) {
    producto4 = new Hardware(id, nombre, impExterior(precio), stock, origen);
    arrayProductos.push(producto4)
  } else if (i == 5) {
    producto5 = new Hardware(id, nombre, impExterior(precio), stock, origen);
    arrayProductos.push(producto5)
  }
}

arrayProductos.sort(function (a, b) {
  if (a.precio > b.precio) {
    return 1;
  }
  if (a.precio < b.precio) {
    return -1;
  }
})

console.log(arrayProductos)
