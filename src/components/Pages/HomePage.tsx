import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard";
import Product from "../../Product";
import LoadProducts from "../../Helpers/ProductsLoader";
import { useEffect, useState } from "react";
import { Box, LinearProgress } from "@mui/material";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const loadedProducts: Product[] = await LoadProducts();
      setProducts(loadedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <Grid
          container
          rowSpacing={3}
          direction="row-reverse"
          columnSpacing={2}
          justifyContent={"center"}
        >
          {products.map((product: Product) => (
            <Grid item key={product.id}>
              <ProductCard product={product} key={product.id} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box sx={{ width: "90%", marginTop: "200px" }}>
            <LinearProgress />
          </Box>
        </Box>
      )}
    </>
  );
};

export default HomePage;
