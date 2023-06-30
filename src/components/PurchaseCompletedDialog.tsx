import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

interface PurchaseCompletedProps {
  setOpen: Function;
  open: boolean;
}

const PurchaseCompletedDialog = ({ setOpen, open }: PurchaseCompletedProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>!תתחדש/י</DialogTitle>
      <DialogActions sx={{ justifyContent: "left" }}>
        <Button variant="text" onClick={() => setOpen(false)}>
          סגור
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseCompletedDialog;
