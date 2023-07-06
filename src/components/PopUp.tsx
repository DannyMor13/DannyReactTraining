import { Alert, AlertProps, Snackbar } from "@mui/material";

interface PopUpProps extends AlertProps {
  children: React.ReactNode;
  open: boolean;
}

const PopUp = ({ children, open, ...others }: PopUpProps) => {
  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
    >
      <Alert variant={"filled"} severity={"info"} {...others}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default PopUp;
