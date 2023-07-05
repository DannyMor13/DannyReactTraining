import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

interface PurchaseCompletedProps {
  onClose: () => void;
  open: boolean;
}

const PurchaseCompletedDialog = ({ open, onClose }: PurchaseCompletedProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>!תתחדש/י</DialogTitle>
      <DialogActions sx={{ justifyContent: "left" }}>
        <Button variant="text" onClick={onClose}>
          סגור
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseCompletedDialog;
