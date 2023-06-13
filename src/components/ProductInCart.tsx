import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeProduct } from "../app/productsSlice";
import Product from "../Product";

interface ProductInCartProps {
  product: Product;
  indexInCart: number;
}

const ProductInCart = ({ product, indexInCart }: ProductInCartProps) => {
  const dispatch = useDispatch();

  return (
    <ListItem dir="rtl">
      <ListItemAvatar>
        <Avatar src={product.image} sx={{ width: 50, height: 50 }} />
      </ListItemAvatar>
      <ListItemText
        primary={product.name}
        secondary={product.price + "₪"}
        sx={{ textAlign: "right" }}
      />
      <Button
        color="error"
        onClick={() => dispatch(removeProduct(indexInCart))}
      >
        <DeleteIcon />
      </Button>
    </ListItem>
  );
};

export default ProductInCart;
