import { Alert, AlertProps, Snackbar } from "@mui/material";

interface PopUpProps extends AlertProps {
  //there is a nicer way to add children to the type in my opinion - React.PropsWithChildren<AlertProps>
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
