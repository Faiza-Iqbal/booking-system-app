import { makeStyles, createStyles } from "@mui/styles";

import { secondary_dark, primary_light } from "../../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    buttonStyled: {
      "&.MuiButton-root": {
        backgroundColor: secondary_dark,
        color: primary_light,
        border: "none",
        borderRadius: "4px",
        width: "100%",
        padding: "8px 0",
        marginTop: "20px",
        fontWeight: 600,
        letterSpacing: 0.8,
        "&:hover": {
          backgroundColor: secondary_dark,
        },
      },
    },
  })
);
