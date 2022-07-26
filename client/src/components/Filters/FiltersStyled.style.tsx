import { createStyles, makeStyles } from "@mui/styles";

import { box_shadow, primary_light, secondary_dark } from "../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    innerWrapper: {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: box_shadow,
      position: "relative",
      width: "75%",
      background: primary_light,
      minHeight: "120px",
    },
    searchButton: {
      "&.MuiButton-root": {
        right: 0,
        color: primary_light,
        background: secondary_dark,
        height: "100%",
        top: 0,
        zIndex: 9,
        width: "100%",
        "&:hover": {
          background: secondary_dark,
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
      boxShadow: box_shadow,
    },
  })
);
