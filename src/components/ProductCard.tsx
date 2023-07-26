import { useState } from "react";
import { cardStyle, cardBtnsStyle } from "../Styles/productCardStyles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import InfoCard from "./InfoCard";
import Product from "../Product";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addProduct } from "../app/productsSlice";
import { useDispatch } from "react-redux";

interface CardProps {
  product: Product;
}

const ProductCard = ({ product }: CardProps) => {
  const dispatch = useDispatch();
  const [isInfoCardOpen, setInfoCardOpen] = useState<boolean>(false);
  const handleClose = () => setInfoCardOpen(false);

  return (
    <Card sx={cardStyle}>
      <CardMedia
        component={"img"}
        image={product.image}
        sx={{ height: 140 }}
        alt="product picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {product.price}₪
        </Typography>
      </CardContent>
      <CardActions sx={cardBtnsStyle}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setInfoCardOpen(true)}
          sx={{ margin: "10px 8px" }}
        >
          <InfoIcon />
          פרטים
        </Button>
        <Button
          onClick={() => dispatch(addProduct(product))}
          variant="contained"
          sx={{ margin: "10px" }}
        >
          <ShoppingCartIcon />
          הוסף לעגלה
        </Button>
        <InfoCard
          open={isInfoCardOpen}
          handleClose={handleClose}
          product={product}
        />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
