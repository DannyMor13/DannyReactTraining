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
  //also - you should try to use useReducer ot a custom type to minimize
  const [orderInProgress, setOrderInProgress] = useState(false);
  const [orderFailed, setOrderFailed] = useState(false);
  const [isPurchaseCompleted, setPurchaseCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const getTotalPrice = () => {
    //very good, but it should probably be in a part of the cart model in redux
    return productsList.reduce(
      (total: number, currProduct: Product) => total + currProduct.price,
      0
    );
  };

  const placeOrder = () => {
    if (getTotalPrice() <= sum) {
      setOrderFailed(false);
      setOrderInProgress(true);

      const productCount = productsList.length;
      const progressInterval = Math.floor(100 / productCount);

      productsList.forEach((product: Product, index: number) => {
        setTimeout(() => {
          dispatch(removeProduct(0));
          dispatch(reduceSum(product.price));
          setProgress((prevProgress) => prevProgress + progressInterval);

          if (index + 1 === productCount) {
            setOrderInProgress(false);
            setPurchaseCompleted(true);
          }
          //This was my first solution too. It should probably be a Promise though to fake a request from an api
        }, 500 * (index + 1));
      });
    } else {
      setOrderFailed(true);
      setOrderInProgress(false);
    }
  };

  return (
    <>
      <PopUp
        open={orderInProgress}
        children={
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ width: "200px" }}
          />
        }
        icon={false}
      />
      <PopUp
        open={orderFailed}
        severity={"error"}
        icon={false}
        children={<>ההזמנה לא הושלמה</>}
      />
      <PurchaseCompletedDialog
        open={isPurchaseCompleted}
        onClose={() => setPurchaseCompleted(false)}
      />
      {productsList.length > 0 ? (
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
            cartItemIndex={index}
          />
        ))}
      </List>
    </>
  );
};

export default ShoppingCartPage;
