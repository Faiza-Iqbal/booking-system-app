// lib
import { createStyles, makeStyles } from "@mui/styles";

// src
import {
  MAIN,
  PRIMARY_DEEP_LIGHT,
  PRIMARY_LIGHT,
} from "../../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    boxStyled: {
      display: "flex",
      padding: "20px 10px",
      background: PRIMARY_LIGHT,
      zIndex: 12,
      maxWidth: "250px",
      minWidth: "250px",

      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },

      "& .MuiOutlinedInput-input": {
        fontSize: "14px",
      },

      "& .MuiSvgIcon-root": {
        backgroundColor: PRIMARY_DEEP_LIGHT,
        width: 18,
        height: 20,
        marginTop: 2,
        marginRight: 5,
        color: MAIN,
        borderRadius: "50%",
      },

      "& .MuiPaper-elevation5-14 ,& .MuiPaper-elevation5-287": {
        width: "100%",
        zIndex: 9,
        position: "absolute",
        left: 0,
      },
    },
    boxPositioned: {
      position: "absolute",
    },
  })
);
