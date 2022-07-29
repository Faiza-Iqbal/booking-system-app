import { createStyles, makeStyles } from "@mui/styles";

import { DARKSLATEGRAY } from "../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    formWrapper: {
      maxWidth: "350px",
      width: "100%",
      padding: "30px 0px 0px 30px",

      "& .MuiOutlinedInput-input.MuiInputBase-input": {
        padding: "6px",
      },

      "& .MuiTypography-root": {
        marginTop: "10px",
        fontSize: "14px",
        color: DARKSLATEGRAY,
      },
    },
    mobileFormView: {
      padding: "30px 0px",
      maxWidth: "350px",
      width: "100%",
      "& .MuiOutlinedInput-input.MuiInputBase-input": {
        padding: "6px",
      },

      "& .MuiTypography-root": {
        marginTop: "10px",
        fontSize: "14px",
        color: DARKSLATEGRAY,
      },
    },
    mandatory: {
      color: "red",
    },
  })
);
