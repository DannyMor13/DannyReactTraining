import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ProductInCart from "../ProductInCart";
import Product from "../../Product";
import { RootState } from "../../app/store";
import { removeProduct } from "../../app/productsSlice";
import { reduceSum } from "../../app/sumSlice";
import PurchaseCompletedDialog from "../PurchaseCompletedDialog";
import PopUp from "../PopUp";
import { Button, LinearProgress, List } from "@mui/material";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state: RootState) => state.products);
  const sum = useSelector((state: RootState) => state.sum);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [isPurchaseCompleted, setPurchaseCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const getTotalPrice = () => {
    return productsList.reduce(
      (total: number, currProduct: Product) => total + currProduct.price,
      0
    );
  };

  const placeOrder = () => {
    if (getTotalPrice() <= sum) {
      setErrorOpen(false);
      setShowProgressBar(true);

      const productCount = productsList.length;
      const progressInterval = Math.floor(100 / productCount);

      productsList.forEach((product: Product, index: number) => {
        setTimeout(() => {
          dispatch(removeProduct(product.id));
          dispatch(reduceSum(product.price));
          setProgress((prevProgress) => prevProgress + progressInterval);

          if (index + 1 === productCount) {
            setShowProgressBar(false);
            setPurchaseCompleted(true);
          }
        }, 500 * (index + 1));
      });
    } else {
      setErrorOpen(true);
      setShowProgressBar(false);
    }
  };

  return (
    <>
      <PopUp
        open={showProgressBar}
        valueToShow={
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ width: "200px" }}
          />
        }
        icon={false}
      />
      <PopUp
        open={errorOpen}
        severity={"error"}
        icon={false}
        valueToShow="ההזמנה לא הושלמה"
      />
      <PurchaseCompletedDialog
        open={isPurchaseCompleted}
        onClose={() => setPurchaseCompleted(false)}
        onClick={() => setPurchaseCompleted(false)}
      />
      {productsList && productsList.length > 0 ? (
        <div style={{ textAlign: "center" }}>
          <Button variant="contained" onClick={placeOrder} size="large">
            הזמן {getTotalPrice().toFixed(2)}₪
          </Button>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>העגלה ריקה</p>
      )}
      <List>
        {productsList.map((product: Product, index: number) => (
          <ProductInCart
            key={product.id}
            product={product}
            indexInCart={index}
          />
        ))}
      </List>
    </>
  );
};

export default ShoppingCartPage;
