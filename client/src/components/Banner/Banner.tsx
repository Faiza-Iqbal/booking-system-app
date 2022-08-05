// lib
import { Box } from "@mui/material";

// src
import { BANNER_IMG } from "../../constants/staticUrls";

// styles
import { useStyles } from "./style";

const Banner = () => {
  const classes = useStyles();

  return (
    <Box
      component="img"
      className={classes.root}
      alt="Welcome to TourBay"
      src={BANNER_IMG}
    />
  );
};

export default Banner;
