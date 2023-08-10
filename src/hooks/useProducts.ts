import { useEffect, useState } from "react";
import Product from "../Product";
import json from "../data/Products.json";

const useProducts = () => {
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
