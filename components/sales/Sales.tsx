const Sales = () => {
  const products = [
    { id: 1, name: 'Cable', price: 10 },
    { id: 2, name: 'Placa', price: 20 },
    { id: 3, name: 'Batería', price: 30 },
    { id: 4, name: 'Luces', price: 15 },
    { id: 5, name: 'Sensor', price: 25 },
    { id: 6, name: 'Otro artículo', price: 12 },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Artículos disponibles</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sales;
