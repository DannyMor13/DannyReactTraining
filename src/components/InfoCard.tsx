import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@mui/material";
import Product from "../Product";
import { addProduct } from "../app/cartSlice";
import { useDispatch } from "react-redux";

interface InfoCardProps {
  open: boolean;
  handleClose: () => void;
  product: Product;
}

const InfoCard = ({ open, handleClose, product }: InfoCardProps) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addProduct(product));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} sx={{ textAlign: "right" }}>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>{product.description}</DialogContentText>
        <DialogContentText>מחיר: {product.price}₪</DialogContentText>
        <img
          src={product.image}
          style={{ maxWidth: "300px", maxHeight: "400px" }}
        />
      </DialogContent>
      <DialogActions
        sx={{ justifyContent: "flex-end", flexDirection: "row-reverse" }}
      >
        <Button onClick={addToCart}>הוסף לעגלה</Button>
        <Button variant="text" onClick={handleClose}>
          סגור
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoCard;
