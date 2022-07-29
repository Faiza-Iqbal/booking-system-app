import { createStyles, makeStyles } from "@mui/styles";

import { PRIMARY_DARK, SECONDARY_DARK } from "../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    menuLink: {
      "&.MuiTypography-root.MuiLink-root": {
        textDecoration: "none",
        fontWeight: "bold",
        margin: "0",
        padding: "0",
        color: PRIMARY_DARK,
      },
    },

    navStyled: {
      "&.MuiPaper-root.MuiAppBar-root": {
        backgroundColor: "transparent",
        boxShadow: "none",
        position: "fixed",
        top: 0,
      },
    },

    scrolledNavBar: {
      "&.MuiPaper-root.MuiAppBar-root": {
        backgroundColor: "white",
      },
    },

    logo: {
      "&.MuiTypography-root.MuiLink-root": {
        color: SECONDARY_DARK,
        fontSize: "24px",
        fontFamily: "fantasy",
        fontStyle: "italic",
        "& img": {
          width: "180px",
          marginTop: "10px",
        },
      },
    },

    lisStyled: {
      "&.MuiList-root": {
        display: "flex",
        justifyContent: "center",
      },
      "& .MuiListItem-root": {
        width: "15%",
      },
    },

    navWrapper: {
      "&.MuiGrid-root": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
  })
);
