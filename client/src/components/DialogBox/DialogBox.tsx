// lib
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

// styles
import { useStyles } from "./style";

type DialogBoxProp = {
  handleConfirmation: () => void;
  isOpen: boolean;
  handleClose: () => void;
};

const DialogBox = ({
  handleConfirmation,
  isOpen,
  handleClose,
}: DialogBoxProp) => {
  const classes = useStyles();

  return (
    <Dialog open={isOpen}>
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
