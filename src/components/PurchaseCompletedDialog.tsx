import { useState } from "react";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

function PurchaseCompletedDialog() {
  const [isOpen, setIsOpen] = useState(true);
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
}

export default PurchaseCompletedDialog;
