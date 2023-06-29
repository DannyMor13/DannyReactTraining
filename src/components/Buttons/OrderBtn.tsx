import { Button } from "@mui/material";

interface OrderProps {
  handleClick: Function;
  totalPrice: number;
}

const Order = ({ handleClick, totalPrice }: OrderProps) => {
  return (
    <div>
      <Button variant="contained" onClick={handleClick} size="large">
        הזמן {totalPrice.toFixed(2)}₪
      </Button>
    </div>
  );
};

export default Order;
