import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/productsSlice";
import Product from "../../Product";

interface AddToCartProps {
  product: Product;
  handleClose: () => void;
  isPrimaryBtn: boolean;
  style?: React.CSSProperties;
}

const AddToCart = (props: AddToCartProps) => {
  const { product, handleClose, isPrimaryBtn, style } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addProduct({
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
    handleClose();
  };

  return (
    <Button
      variant={isPrimaryBtn ? "contained" : "text"}
      onClick={handleClick}
      style={style}
    >
      {isPrimaryBtn && <ShoppingCartIcon />}
      הוסף לעגלה
    </Button>
  );
};

export default AddToCart;
