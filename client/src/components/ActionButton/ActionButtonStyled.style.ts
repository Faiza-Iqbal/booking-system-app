import { createStyles, makeStyles } from "@mui/styles";

// src
import {
  SECONDARY_DARK,
  PRIMARY_LIGHT,
  DARKSLATEGRAY,
} from "../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    buttonStyled: {
      "&.MuiButtonBase-root": {
        backgroundColor: SECONDARY_DARK,
        color: PRIMARY_LIGHT,
        border: "none",
        borderRadius: "4px",
        width: "100%",
        padding: "8px 0",
        marginTop: "20px",
        fontWeight: 600,
        letterSpacing: 0.8,
        "&:hover": {
          backgroundColor: SECONDARY_DARK,
        },
      },
    },

    normalText: {
      "&.MuiTypography-root": {
        color: DARKSLATEGRAY,
        fontSize: "14px",
      },
    },

    boldText: {
      "&.MuiTypography-root": {
        fontSize: "14px",
        fontWeight: 600,
      },
    },

    titleText: {
      "&.MuiTypography-root": {
        fontWeight: 600,
        color: DARKSLATEGRAY,
        marginBottom: "20px",
      },
    },

    mobileView: {
      display: "flex",
      flexDirection: "column",
    },
    desktopView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  })
);
