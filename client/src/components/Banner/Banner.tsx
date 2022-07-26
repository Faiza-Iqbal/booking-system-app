// lib
import { Box } from "@mui/material";

// src
import { BANNER_IMG } from "../../constants/staticUrls";
import { useStyles } from "./BannerStyled.style";

const Banner = () => {
  const classes = useStyles();

  return (
    <Box
      component="img"
      className={classes.bannerStyled}
      alt="Welcome to TourBay"
      src={BANNER_IMG}
    />
  );
};
export default Banner;
