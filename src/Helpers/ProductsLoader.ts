import { useEffect, useState } from "react";
import Product from "../Product";

//this file should be named useProducts inside a Hooks folder
//Also in my opinion it should access the products.json directly and not as a parameter every time
const useProducts = (json: Product[]) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const loadedProducts: Product[] = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(json);
        }, 300);
      });
      setProducts(loadedProducts);
    };

    fetchProducts();
  }, []);
  return products;
};

export default useProducts;
