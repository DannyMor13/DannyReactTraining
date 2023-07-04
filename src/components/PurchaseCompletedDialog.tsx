import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogProps,
  ButtonProps,
} from "@mui/material";

const PurchaseCompletedDialog = ({ ...others }: DialogProps & ButtonProps) => {
  return (
    //Wouldn't it be possible to send DialogProps to Button and vice versa?
    <Dialog {...others}>
      <DialogTitle>!תתחדש/י</DialogTitle>
      <DialogActions sx={{ justifyContent: "left" }}>
        <Button variant="text" {...others}>
          סגור
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseCompletedDialog;
