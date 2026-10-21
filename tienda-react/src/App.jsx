import { useState } from "react";
import './App.css';

function App() {
  // Punto 2: Estado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Mouse", precio: 50000, stock: 5 },
    { id: 2, nombre: "Teclado", precio: 90000, stock: 2 }
  ]);

  // Punto 3: Estados del formulario controlado
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  // Punto 4: Función CREATE y UPDATE
  const guardarProducto = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || precio === "" || stock === "") {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (Number(precio) <= 0 || Number(stock) < 0) {
      alert("Revise precio y stock");
      return;
    }

    if (editandoId === null) {
      const nuevoProducto = {
        id: Date.now(),
        nombre: nombre.trim(),
        precio: Number(precio),
        stock: Number(stock)
      };
      setProductos([...productos, nuevoProducto]);
    } else {
      const actualizados = productos.map((producto) =>
        producto.id === editandoId
          ? {
              ...producto,
              nombre: nombre.trim(),
              precio: Number(precio),
              stock: Number(stock)
            }
          : producto
      );
      setProductos(actualizados);
      setEditandoId(null);
    }

    setNombre("");
    setPrecio("");
    setStock("");
  };

  // Punto 6: Preparar la edición
  const editarProducto = (producto) => {
    setEditandoId(producto.id);
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setStock(producto.stock);
  };

  // Punto 7: Eliminar con filter()
  const eliminarProducto = (id) => {
    const confirmar = window.confirm(
      "¿Seguro que desea eliminar este producto?"
    );
    if (!confirmar) return;
    setProductos(
      productos.filter((producto) => producto.id !== id)
    );
  };

  const disponibles = productos.filter(producto => producto.stock > 0);

  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const hayAgotados = productos.some(producto => producto.stock === 0);

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>

      {hayAgotados && (
        <p style={{ color: '#d9534f', fontWeight: 'bold' }}>
          ¡Atención! Hay productos agotados actualmente en el inventario.
        </p>
      )}

      {/* Formulario (Punto 3 y 4) */}
      <form onSubmit={guardarProducto} style={{ marginBottom: '24px' }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <button type="submit">
          {editandoId === null ? "Agregar" : "Actualizar"}
        </button>
      </form>

      {/* Punto 5: READ con map() */}
      <section>
        <h2>Catálogo completo</h2>
        <div className="productos">
          {productos.map((producto) => (
            <article key={producto.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <p>Stock: {producto.stock}</p>
              <button onClick={() => editarProducto(producto)}>
                Editar
              </button>
              <button onClick={() => eliminarProducto(producto.id)}>
                Eliminar
              </button>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '32px' }}>
        <h2>Productos Disponibles en Stock</h2>
        <div className="productos">
          {disponibles.map(producto => (
            <article key={producto.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <p>Stock: {producto.stock}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;