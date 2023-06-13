import Grid from "@mui/material/Grid";
import jsonProducts from "../../data/Products.json";
import ProductCard from "../ProductCard";
import Product from "../../Product";

const HomePage = () => {
  const products: Product[] = jsonProducts;

  return (
    <Grid
      container
      // columnSpacing={{ xs: 10, sm: 20, md: 0.5 }}
      rowSpacing={3}
      direction="row-reverse"
      columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
      justifyContent="center"
    >
      {products.map((product: Product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} key={product.id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
