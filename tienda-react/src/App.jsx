import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
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

      {/* Alerta condicional usando some() */}
      {hayAgotados && (
        <p style={{ color: '#d9534f', fontWeight: 'bold' }}>
          ¡Atención! Hay productos agotados actualmente en el inventario.
        </p>
      )}

      {/* Primera sección: Todos los productos */}
      <section>
        <h2>Catálogo completo</h2>
        <div className="productos">
          {productos.map(producto => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '32px' }}>
        <h2>Productos Disponibles en Stock</h2>
        <div className="productos">
          {disponibles.map(producto => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;