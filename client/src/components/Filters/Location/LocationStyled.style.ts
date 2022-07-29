import { createStyles, makeStyles } from "@mui/styles";

import {
  MAIN,
  PRIMARY_DEEP_LIGHT,
  PRIMARY_LIGHT,
} from "../../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    boxStyled: {
      display: "flex",
      background: PRIMARY_LIGHT,
      padding: "20px",
      borderTopLeftRadius: "15px",
      minWidth: "250px",
      left: 0,
      "& .MuiOutlinedInput-input": {
        fontSize: "14px",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
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
    },
    boxPositioned: {
      position: "absolute",
    },
  })
);
