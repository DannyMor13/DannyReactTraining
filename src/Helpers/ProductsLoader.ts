import jsonProducts from "../data/Products.json";
import Product from "../Product";

const LoadProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jsonProducts);
    }, 300);
  });
};

export default LoadProducts;
