import { createStyles, makeStyles } from "@mui/styles";

import {
  PRIMARY_DEEP_LIGHT,
  MAIN,
  SECONDARY_DARK,
  PRIMARY_LIGHT,
} from "../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    viewDetails: {
      "&.MuiButton-root.MuiButtonBase-root": {
        display: "none",
      },
    },

    cardStyled: {
      borderRadius: 5,
      width: 350,
      marginBottom: 40,

      "&:hover": {
        viewDetails: {
          "&.MuiButton-root.MuiButtonBase-root": {
            display: "block",
          },
        },
      },
      "& .MuiCardActions-root": {
        alignItems: "center",
        justifyContent: "space-between",
      },
    },

    innerCardBox: {
      width: "120px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    smallTypo: {
      "&.MuiTypography-root": {
        display: "flex",
        alignItems: "center",
        fontSize: 12,
        color: MAIN,
      },

      "& .MuiSvgIcon-root": {
        backgroundColor: PRIMARY_DEEP_LIGHT,
        width: 15,
        height: 15,
        color: MAIN,
        borderRadius: "50%",
      },
    },

    touInfoWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: 400,
      width: "100%",
    },

    cardMedia: {
      "&.MuiCardMedia-root": {
        height: 140,
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
