import { Alert, AlertProps, Snackbar, SnackbarProps } from "@mui/material";

interface PopUpProps extends AlertProps {
  //usually it is called children
  valueToShow: React.ReactNode;
}

const PopUp = ({ valueToShow, ...other }: PopUpProps & SnackbarProps) => {
      //Wouldn't it be possible to send PopUpProps to SnackBar and vice versa?
  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      {...other}
    >
      <Alert variant={"filled"} severity={"info"} {...other}>
        {valueToShow}
      </Alert>
    </Snackbar>
  );
};

export default PopUp;
