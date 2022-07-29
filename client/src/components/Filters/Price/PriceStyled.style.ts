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
      padding: "19px",
      maxWidth: "200px",
      width: "100%",
      borderTopRightRadius: "15px",
      background: PRIMARY_LIGHT,
      right: "50px",
      zIndex: 10,
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
    boxStyledTablet: {
      display: "flex",
      padding: "19px",
      maxWidth: "200px",
      width: "100%",
      borderTopRightRadius: "15px",
      background: PRIMARY_LIGHT,
      right: "0px",
      zIndex: 10,
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
  })
);
