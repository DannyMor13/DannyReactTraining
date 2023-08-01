import { useDispatch, useSelector } from "react-redux";
import { useReducer } from "react";
import ProductInCart from "../ProductInCart";
import Product from "../../Product";
import {
  removeProduct,
  selectProducts,
  selectTotalPrice,
} from "../../app/productsSlice";
import { reduceSum, selectSum } from "../../app/sumSlice";
import PurchaseCompletedDialog from "../PurchaseCompletedDialog";
import PopUp from "../PopUp";
import { Button, LinearProgress, List } from "@mui/material";
import reducer, { initialState } from "../../Helpers/ProductsUseReducer";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const productsList: Product[] = useSelector(selectProducts);
  const sum = useSelector(selectSum);
  const totalPrice = useSelector(selectTotalPrice);
  const [state, dispatchState] = useReducer(reducer, initialState);

  const placeOrder = () => {
    if (totalPrice <= sum) {
      dispatchState({ type: "START_ORDER" });
      const productCount = productsList.length;
      const progressInterval = Math.floor(100 / productCount);

      productsList.forEach(async (product: Product, index: number) => {
        await new Promise(() => {
          setTimeout(() => {
            dispatch(removeProduct(0));
            dispatch(reduceSum(product.price));
            dispatchState({
              type: "UPDATE_PROGRESS",
              payload: progressInterval,
            });

            if (index + 1 === productCount) {
              dispatchState({ type: "ORDER_COMPLETED" });
            }
            //I don't really like the index * 500 thing, I think every promise should wait 500ms.
          }, 500 * (index + 1));
        });
      });
    } else {
      dispatchState({ type: "ORDER_FAILED" });
    }
  };

  return (
    <>
      <PopUp
        open={state.orderInProgress}
        children={
          <LinearProgress
            variant="determinate"
            value={state.progress}
            sx={{ width: "200px" }}
          />
        }
        icon={false}
      />
      <PopUp
        open={state.orderFailed}
        severity={"error"}
        icon={false}
        children={<>ההזמנה לא הושלמה</>}
      />
      <PurchaseCompletedDialog
        open={state.isPurchaseCompleted}
        onClose={() => {
          dispatchState({ type: "RESET" });
        }}
      />
      {productsList.length > 0 ? (
        <div style={{ textAlign: "center" }}>
          <Button variant="contained" onClick={placeOrder} size="large">
            הזמן {totalPrice.toFixed(2)}₪
          </Button>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>העגלה ריקה</p>
      )}
      <List>
        {productsList.map((product: Product, index: number) => (
          //todo- ask safsky abt why it throws error when u send id as key (removal fixed addToCart problem)
          <ProductInCart product={product} cartItemIndex={index} />
        ))}
      </List>
    </>
  );
};

export default ShoppingCartPage;
