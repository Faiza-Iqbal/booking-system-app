import { createStyles, makeStyles } from "@mui/styles";

import {
  main,
  primary_deep_light,
  primary_light,
} from "../../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    boxStyled: {
      display: "flex",
      padding: "20px 10px",
      background: primary_light,
      zIndex: 12,
      maxWidth: "250px",

      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },

      "& .MuiOutlinedInput-input": {
        fontSize: "14px",
      },

      "& .MuiSvgIcon-root": {
        backgroundColor: primary_deep_light,
        width: 18,
        height: 20,
        marginTop: 2,
        marginRight: 5,
        color: main,
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
