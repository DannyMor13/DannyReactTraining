import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@mui/material";
import AddToCart from "./Buttons/AddToCartBtn";
import Product from "../Product";

interface InfoCardProps {
  open: boolean;
  handleClose: () => void;
  product: Product;
}

const InfoCard = ({ open, handleClose, product }: InfoCardProps) => {
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
        <AddToCart
          product={product}
          handleClose={handleClose}
          showIcon={false}
        />
        <Button variant="text" onClick={handleClose}>
          סגור
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoCard;
