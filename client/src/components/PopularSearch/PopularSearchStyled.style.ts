import { createStyles, makeStyles } from "@mui/styles";

import { PRIMARY_DARK, PRIMARY_DEEP_LIGHT } from "../../styles/colors";

export const useStyle = makeStyles(() =>
  createStyles({
    centerAlign: {
      "&.MuiContainer-root": {
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },

    outlined: {
      border: `1px solid ${PRIMARY_DEEP_LIGHT}`,
      borderRadius: "8px",
      padding: "3px 8px",
      marginBottom: "20px",

      "& .MuiTypography-root.MuiLink-root": {
        textDecoration: "none",
        color: PRIMARY_DARK,
        cursor: "pointer",
      },
    },

    fullWidthFlex: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    verticalAlign: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
    },
  })
);
