import { createStyles, makeStyles } from "@mui/styles";

import {
  primary_deep_light,
  main,
  secondary_dark,
  primary_light,
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
        color: main,
      },

      "& .MuiSvgIcon-root": {
        backgroundColor: primary_deep_light,
        width: 15,
        height: 15,
        color: main,
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
        backgroundColor: secondary_dark,
        color: primary_light,
        border: "none",
        borderRadius: "4px",
        padding: "4px",
        fontSize: 12,
        letterSpacing: 0.8,
        marginRight: 5,
        "&:hover": {
          backgroundColor: secondary_dark,
        },
      },
    },
  })
);
