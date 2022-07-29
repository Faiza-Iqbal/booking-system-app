import { makeStyles, createStyles } from "@mui/styles";

import { SECONDARY_DARK, PRIMARY_LIGHT } from "../../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    buttonStyled: {
      "&.MuiButton-root": {
        backgroundColor: SECONDARY_DARK,
        color: PRIMARY_LIGHT,
        border: "none",
        borderRadius: "4px",
        width: "100%",
        padding: "8px 0",
        marginTop: "20px",
        fontWeight: 600,
        letterSpacing: 0.8,
        "&:hover": {
          backgroundColor: SECONDARY_DARK,
        },
      },
    },
  })
);
