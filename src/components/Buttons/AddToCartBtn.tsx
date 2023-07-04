import Button, { ButtonProps } from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/productsSlice";
import Product from "../../Product";

interface AddToCartProps extends ButtonProps {
  product: Product;
  handleClose?: () => void;
  showIcon?: boolean;
}

const AddToCart = (props: AddToCartProps) => {
  const { product, showIcon = true, handleClose, ...other } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addProduct(product)
    );
    //what?
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <Button onClick={handleClick} {...other}>
      {showIcon && <ShoppingCartIcon />}
      הוסף לעגלה
    </Button>
  );
};

export default AddToCart;
