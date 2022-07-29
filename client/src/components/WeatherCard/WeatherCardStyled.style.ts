import { createStyles, makeStyles } from "@mui/styles";

import { DARKSLATEGRAY } from "../../styles/colors";

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
        color: DARKSLATEGRAY,
      },
    },

    smallText: {
      "&.MuiListItem-root": {
        fontSize: "13px",
        color: DARKSLATEGRAY,
      },
    },
    avatarWrapper: {
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
    },
  })
);
