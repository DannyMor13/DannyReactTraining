import { useState } from "react";
import {
  productCardStyle,
  productCardBtnsStyle,
  productImgStyle,
} from "./Styles/productCardStyles";
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
import AddToCart from "./Buttons/AddToCartBtn";
import Product from "../Product";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isInfoCardOpen, setInfoCardOpen] = useState(false);
  const handleClose = () => setInfoCardOpen(false);

  return (
    <Card sx={productCardStyle}>
      <CardMedia
        component={"img"}
        image={product.image}
        sx={productImgStyle}
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
      <CardActions style={productCardBtnsStyle}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setInfoCardOpen(true)}
          style={{ margin: "10px" }}
        >
          <InfoIcon />
          פרטים
        </Button>
        <AddToCart
          product={product}
          handleClose={handleClose}
          isPrimaryBtn={true}
          style={{ margin: "10px" }}
        />
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
