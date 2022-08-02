// lib
import { Slide, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// src
import { StateType } from "../../store/types";
import { clearSnackBar } from "../../store/snackBar";

export default function Snack() {
  const { message, visible } = useSelector(
    (state: StateType) => state.snackBar
  );

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(clearSnackBar());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={visible}
      action={<HighlightOffIcon onClick={onClose} />}
      onClose={onClose}
      autoHideDuration={3000}
      TransitionComponent={Slide}
      message={message}
    />
  );
}
