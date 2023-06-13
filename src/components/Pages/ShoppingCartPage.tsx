import { useSelector } from "react-redux";
import { useState } from "react";
import ProductInCart from "../ProductInCart";
import OrderBtn from "../Buttons/OrderBtn";
import ProgressBar from "../ProgressBar";
import Product from "../../Product";
import { RootState } from "../../app/store";

const ShoppingCartPage = () => {
  const productsList = useSelector((state: RootState) => state.products);
  const [isProgressBarOpen, setProgressBarOpen] = useState(false);

  const getTotalPrice = () => {
    return productsList.reduce(
      (total: number, currProduct: Product) => total + currProduct.price,
      0
    );
  };

  const handleValueReceived = (value: boolean) => {
    setProgressBarOpen(value);
  };

  return (
    <div>
      <ProgressBar
        isOpen={isProgressBarOpen}
        numOfProducts={productsList.length}
      />
      {productsList && productsList.length > 0 ? (
        <div style={{ textAlign: "center" }}>
          <OrderBtn
            totalPrice={getTotalPrice()}
            shouldShowProgressBar={handleValueReceived}
          />
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>העגלה ריקה</p>
      )}
      {productsList.map((product: Product, index: number) => (
        <ProductInCart key={product.id} product={product} indexInCart={index} />
      ))}
    </div>
  );
};

export default ShoppingCartPage;
