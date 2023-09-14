import React from 'react';

const productos = [
  { id: 1, nombre: 'Ganador Energía', precio: 32.000 },
  { id: 2, nombre: 'Ganador Leche', precio: 34.000 },
  { id: 3, nombre: 'Ganador Proteína', precio: 36.000 },
  { id: 4, nombre: 'Ganador Porcinos', precio: 39.000 }, 
];

function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>{greeting}</h2>
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>
                {producto.nombre} - ${producto.precio.toFixed(3)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
