import Image from "next/image";

interface Product {
  URLImage: string;
  title: string;
  price: number;
  description: string;
}

interface CategoryProps {
  category: string;
  products: Product[];
}

const ProductCard: React.FC<CategoryProps> = ({ category, products }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-blue-50 rounded-lg shadow-md p-4">
            <Image
              width={200}
              height={200}
              src={product.URLImage}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
