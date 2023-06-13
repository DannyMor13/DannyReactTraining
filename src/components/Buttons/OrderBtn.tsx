import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../app/productsSlice";
import { useSelector } from "react-redux";
import { reduceSum } from "../../app/sumSlice";
import ErrorAlert from "../ErrorAlert";
import Product from "../../Product";
import { RootState } from "../../app/store";

interface OrderProps {
  shouldShowProgressBar: Function;
  totalPrice: number;
}

const Order = ({ totalPrice, shouldShowProgressBar }: OrderProps) => {
  const dispatch = useDispatch();
  const productsList = useSelector((state: RootState) => state.products);
  const sum = useSelector((state: RootState) => state.sum);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleClick = () => {
    if (totalPrice <= sum) {
      setErrorOpen(false);
      shouldShowProgressBar(true);
      productsList.forEach((product: Product, index: number) => {
        setTimeout(() => {
          dispatch(removeProduct(product.id));
          dispatch(reduceSum(product.price));
        }, 500 * (index + 1));
      });
      // shouldShowProgressBar(false);
    } else {
      setErrorOpen(true);
      shouldShowProgressBar(false);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick} size="large">
        הזמן {totalPrice.toFixed(2)}₪
      </Button>
      <ErrorAlert errorOpen={errorOpen} errorMessage="ההזמנה לא הושלמה" />
    </div>
  );
};

export default Order;
