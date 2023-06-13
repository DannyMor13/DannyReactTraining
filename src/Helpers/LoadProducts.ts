import { useSelector } from "react-redux";

const LoadProducts = () => {
  let productsList = 0;
  setTimeout(() => {
    productsList = useSelector((state) => state.products);
  }, 2000);
  return productsList;
};

export default LoadProducts;
