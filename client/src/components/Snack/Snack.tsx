import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Slide, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearSnackBar } from "../../store/snackBar";
import { StateType } from "../../store/types";

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
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={visible}
      action={<HighlightOffIcon onClick={onClose} />}
      onClose={onClose}
      autoHideDuration={3000}
      TransitionComponent={Slide}
      message={message}
    />
  );
}
