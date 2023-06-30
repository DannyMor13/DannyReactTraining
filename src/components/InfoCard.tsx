import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import AddToCart from "./Buttons/AddToCartBtn";
import Product from "../Product";

interface InfoCardProps {
  open: boolean;
  handleClose: () => void;
  product: Product;
}

function InfoCard({ open, handleClose, product }: InfoCardProps) {
  return (
    <Dialog open={open} onClose={handleClose} sx={{ textAlign: "right" }}>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent sx={{ opacity: 0.7, paddingBottom: 0 }}>
        <Typography>{product.description}</Typography>
        <Typography>מחיר: {product.price}₪</Typography>
      </DialogContent>
      <Box
        component="img"
        sx={{ maxWidth: 300, maxHeight: 400, padding: 3, paddingTop: 0 }}
        src={product.image}
      />
      <DialogActions sx={{ justifyContent: "left" }}>
        <Button variant="text" onClick={() => handleClose()}>
          סגור
        </Button>
        <AddToCart
          product={product}
          handleClose={handleClose}
          isPrimaryBtn={false}
        />
      </DialogActions>
    </Dialog>
  );
}

export default InfoCard;
