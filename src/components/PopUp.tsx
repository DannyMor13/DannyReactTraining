import { Alert, AlertProps, Snackbar, SnackbarProps } from "@mui/material";

interface PopUpProps extends AlertProps {
  valueToShow: React.ReactNode;
}

const PopUp = ({ valueToShow, ...other }: PopUpProps & SnackbarProps) => {
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
