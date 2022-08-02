// lib
import { createStyles, makeStyles } from "@mui/styles";

// styles
import { BOX_SHADOW, PRIMARY_LIGHT, SECONDARY_DARK } from "../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    innerWrapper: {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: BOX_SHADOW,
      position: "relative",
      width: "75%",
      background: PRIMARY_LIGHT,
      minHeight: "120px",
    },

    searchButton: {
      "&.MuiButton-root": {
        right: 0,
        color: PRIMARY_LIGHT,
        background: SECONDARY_DARK,
        height: "100%",
        top: 0,
        zIndex: 11,
        width: "100%",
        "&:hover": {
          background: SECONDARY_DARK,
        },
      },
    },

    positionedButton: {
      "&.MuiButton-root": {
        position: "absolute",
        width: "auto",
      },
    },

    absoluteContainer: {
      "&.MuiContainer-root": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-70px",
      },
    },

    mobileAligned: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "0px",
      boxShadow: BOX_SHADOW,
    },

    tabletAligned: {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: BOX_SHADOW,
      position: "relative",
      width: "95%",
      background: PRIMARY_LIGHT,
      minHeight: "120px",
    },
  })
);
