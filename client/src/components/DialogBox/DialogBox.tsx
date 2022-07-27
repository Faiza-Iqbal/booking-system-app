// lib
import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type DialogBoxProp = {
  handleConfirmation: () => void;
  isOpen: boolean;
};

const DialogBox = ({ handleConfirmation, isOpen }: DialogBoxProp) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Tour</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this tour?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleConfirmation} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogBox;
