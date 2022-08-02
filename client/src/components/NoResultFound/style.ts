import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    emptyPlaceholder: {
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    emptyImg: {
      width: "300px",
    },
  })
);
