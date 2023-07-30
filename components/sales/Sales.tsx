import products from "@/database/products.json";
import ProductCard from "./ProductCard";

const Sales = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-6">Productos disponibles</h1>
      <ProductCard category="Cables" products={products.cables} />
      <ProductCard category="Placas" products={products.placas} />
      <ProductCard category="Baterías" products={products.baterias} />
      <ProductCard category="Luces" products={products.luces} />
      <ProductCard category="Sensores" products={products.sensores} />
    </div>
  );
};

export default Sales;
