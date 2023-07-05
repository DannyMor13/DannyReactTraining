import { Alert, AlertProps, Snackbar, SnackbarProps } from "@mui/material";

interface PopUpProps extends AlertProps {
  children: React.ReactNode;
}

const PopUp = ({ children, ...other }: PopUpProps & SnackbarProps) => {
  //Wouldn't it be possible to send PopUpProps to SnackBar and vice versa?
  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      {...other}
    >
      <Alert variant={"filled"} severity={"info"} {...other}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default PopUp;
