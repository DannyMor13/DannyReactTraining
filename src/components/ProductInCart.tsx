import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeProduct } from "../app/cartSlice";
import Product from "../Product";

interface ProductInCartProps {
  product: Product;
  cartItemIndex: number;
}

const ProductInCart = ({ product, cartItemIndex }: ProductInCartProps) => {
  const dispatch = useDispatch();

  return (
    <ListItem dir="rtl">
      <ListItemAvatar>
        <Avatar src={product.image} sx={{ width: 50, height: 50 }} />
      </ListItemAvatar>
      <ListItemText
        primary={product.name}
        secondary={product.price + "₪"}
        sx={{ textAlign: "right", marginRight: "20px" }}
      />
      <Button
        color="error"
        onClick={() => dispatch(removeProduct(cartItemIndex))}
      >
        <DeleteIcon />
      </Button>
    </ListItem>
  );
};

export default ProductInCart;
