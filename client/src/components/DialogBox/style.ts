import { createStyles, makeStyles } from "@mui/styles";
import { PRIMARY_LIGHT, SECONDARY_DARK } from "../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    secondaryActionButton: {
      "&.MuiButton-root": {
        color: SECONDARY_DARK,
      },
    },
    buttonStyled: {
      "&.MuiButtonBase-root": {
        backgroundColor: SECONDARY_DARK,
        color: PRIMARY_LIGHT,
        border: "none",
        borderRadius: "4px",
        padding: "4px",
        fontSize: 12,
        letterSpacing: 0.8,
        marginRight: 5,
        "&:hover": {
          backgroundColor: SECONDARY_DARK,
        },
      },
    },
  })
);
