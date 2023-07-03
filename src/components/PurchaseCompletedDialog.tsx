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
