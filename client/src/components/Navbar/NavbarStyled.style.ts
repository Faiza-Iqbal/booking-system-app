import { createStyles, makeStyles } from "@mui/styles";
import { primary_dark, secondary_dark } from "../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    menuLink: {
      "&.MuiTypography-root.MuiLink-root": {
        textDecoration: "none",
        fontWeight: "bold",
        margin: "0",
        padding: "0",
        color: primary_dark,
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
        color: secondary_dark,
        fontSize: "24px",
        fontFamily: "fantasy",
        fontStyle: "italic",
        "& span": {
          color: primary_dark,
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
