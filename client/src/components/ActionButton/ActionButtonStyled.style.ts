import { createStyles, makeStyles } from "@mui/styles";

// src
import {
  secondary_dark,
  primary_light,
  darkslategray,
} from "../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    buttonStyled: {
      "&.MuiButtonBase-root": {
        backgroundColor: secondary_dark,
        color: primary_light,
        border: "none",
        borderRadius: "4px",
        width: "100%",
        padding: "8px 0",
        marginTop: "20px",
        fontWeight: 600,
        letterSpacing: 0.8,
        "&:hover": {
          backgroundColor: secondary_dark,
        },
      },
    },

    normalText: {
      "&.MuiTypography-root": {
        color: darkslategray,
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
        color: darkslategray,
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
    },
  })
);
