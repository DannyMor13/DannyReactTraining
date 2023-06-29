import { Alert, AlertProps, Snackbar } from "@mui/material";

interface PopUpMessageProps {
  isOpen: boolean;
  valueToShow: React.ReactNode;
}

const PopUp = ({
  isOpen,
  valueToShow,
  ...props
}: PopUpMessageProps & AlertProps) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert variant={"filled"} severity={"info"} {...props}>
        {valueToShow}
      </Alert>
    </Snackbar>
  );
};

export default PopUp;
