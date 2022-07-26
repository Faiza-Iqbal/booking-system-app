import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    galleryImg: {
      "&.MuiImageListItem-img": {
        borderRadius: "10px",
      },
    },
  })
);
