import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

interface PurchaseCompletedProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const PurchaseCompletedDialog = ({
  isOpen,
  setIsOpen,
}: PurchaseCompletedProps) => {
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>!תתחדש/י</DialogTitle>
      <DialogActions sx={{ justifyContent: "left" }}>
        <Button variant="text" onClick={handleClose}>
          סגור
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseCompletedDialog;
