function calcularTotal(precio, cantidad) {
    const total = precio * cantidad;
    return total;
}
console.log("Reto 1 - Total calculado:", calcularTotal(50000, 3));

function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
    if (b === 0) return "No se puede dividir por cero";
    return a / b;
}
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

console.log("Suma (10 + 5):", sumar(10, 5));
console.log("Resta (10 - 5):", restar(10, 5));
console.log("Multiplicación (10 * 5):", multiplicar(10, 5));
console.log("División (10 / 2):", dividir(10, 2));
console.log("Promedio (4.5, 3.8, 4.0):", calcularPromedio(4.5, 3.8, 4.0));

/* 
Pregunta de control:
return devuelve un valor hacia afuera para guardarlo en una variable o reutilizarlo.
console.log() solo imprime un mensaje en la consola de la terminal para visualizarlo, pero no retorna valores reutilizables.
*/


// reto 2 
const cuadrado = numero => numero * numero;
const esMayorEdad = edad => edad >= 18;
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log("Cuadrado", cuadrado(5));
console.log("¿Es mayor de edad?", esMayorEdad(20));
console.log("Nombre completo:", nombreCompleto("Carlos", "Pérez"));


// reto 3
const productos = [
    { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
    { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
    { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
    { id: 4, nombre: 'Audífonos', precio: 120000, categoria: 'Perifericos', stock: 8 },
    { id: 5, nombre: 'Laptop', precio: 2500000, categoria: 'Computadores', stock: 2 },
    { id: 6, nombre: 'Silla Gamer', precio: 750000, categoria: 'Mobiliario', stock: 0 },
    { id: 7, nombre: 'Memoria USB', precio: 35000, categoria: 'Almacenamiento', stock: 15 },
    { id: 8, nombre: 'Disco SSD', precio: 220000, categoria: 'Almacenamiento', stock: 4 },
    { id: 9, nombre: 'Impresora', precio: 450000, categoria: 'Oficina', stock: 1 },
    { id: 10, nombre: 'Cable HDMI', precio: 25000, categoria: 'Accesorios', stock: 20 }
];


// reto 4
console.log("Reto 4");
productos.forEach((producto, indice) => {
    console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});


// reto 5
console.log("Reto 5");
const preciosConIva = productos.map(producto => producto.precio * 1.19);
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);

console.log("Precios con IVA:", preciosConIva);
console.log("Nombres en mayúscula:", nombresMayuscula);
console.log("Resumen:", resumenProductos);


// reto 6
console.log("Reto 6");
const precioMayor100k = productos.filter(producto => producto.precio > 100000);
const precioEntreRango = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
const categoriaPerifericos = productos.filter(producto => producto.categoria === 'Perifericos');
const productoId5 = productos.find(producto => producto.id === 5);

// Función buscarProducto requerida en el Reto 20
export function buscarProducto(id) {
    const encontrado = productos.find(producto => producto.id === id);
    return encontrado ? encontrado : "Producto no encontrado";
}

console.log("Precio > 100k:", precioMayor100k);
console.log("Precio entre 50k y 200k:", precioEntreRango);
console.log("Categoría Periféricos:", categoriaPerifericos);
console.log("Producto con id 5:", productoId5);
console.log("Resultado función buscarProducto(3):", buscarProducto(3));


// reto 7
console.log("Reto 7");
const hayAgotados = productos.some(producto => producto.stock === 0);
const precioMayor1Millon = productos.some(producto => producto.precio > 1000000);
const preciosValidos = productos.every(producto => producto.precio > 0);
const stockValido = productos.every(producto => producto.stock >= 0);
const valorInventario = productos.reduce(
    (total, producto) => total + (producto.precio * producto.stock),
    0
);

console.log("¿Existe algún producto agotado?", hayAgotados);
console.log("¿Existe algún producto > $1.000.000?", precioMayor1Millon);
console.log("¿Todos tienen precio > 0?", preciosValidos);
console.log("¿Todos tienen stock >= 0?", stockValido);
console.log("Valor total del inventario: $", valorInventario);


// reto 8 
console.log("Reto 8");
const productoActualizado = {
    ...productos[0],
    precio: 55000,
    stock: 8
};

const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(`El producto ${productoActualizado.nombre} cuesta $${productoActualizado.precio} y está ${estado}`);