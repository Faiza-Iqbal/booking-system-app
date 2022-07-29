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

import { useStyles } from "./DialogBoxStyled.style";

type DialogBoxProp = {
  handleConfirmation: () => void;
  isOpen: boolean;
};

const DialogBox = ({ handleConfirmation, isOpen }: DialogBoxProp) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

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
        <Button className={classes.secondaryActionButton} onClick={handleClose}>
          Cancel
        </Button>
        <Button
          className={classes.buttonStyled}
          onClick={() => handleConfirmation()}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogBox;
