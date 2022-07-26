import { createStyles, makeStyles } from "@mui/styles";

import { darkslategray } from "../../styles/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    cardStyled: {
      borderRadius: "5px",
      maxWidth: "345px",
      minWidth: "300px",
    },

    boldText: {
      "&.MuiTypography-root": {
        fontSize: "14px",
        fontWeight: 600,
        color: darkslategray,
      },
    },

    smallText: {
      "&.MuiListItem-root": {
        fontSize: "12px",
        color: darkslategray,
      },
    },
  })
);
