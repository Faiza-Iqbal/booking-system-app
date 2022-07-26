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
      padding: "19px",
      minWidth: "250px",
      maxWidth: "200px",
      width: "100%",
      borderTopRightRadius: "15px",
      background: primary_light,
      right: 0,
      zIndex: 9,
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
