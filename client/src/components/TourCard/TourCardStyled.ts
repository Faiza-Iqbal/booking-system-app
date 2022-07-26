import { createStyles, makeStyles } from "@mui/styles";

import { primary_deep_light, main } from "../../styles/colors";

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
      maxWidth: 280,
      width: "100%",
    },
    cardMedia: {
      "&.MuiCardMedia-root": {
        height: 140,
      },
    },
  })
);
