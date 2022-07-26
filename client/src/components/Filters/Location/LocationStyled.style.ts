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
      background: primary_light,
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
        backgroundColor: primary_deep_light,
        width: 18,
        height: 20,
        marginTop: 2,
        marginRight: 5,
        color: main,
        borderRadius: "50%",
      },
    },
    boxPositioned: {
      position: "absolute",
    },
  })
);
