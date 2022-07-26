// lib
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

// src
import TourCard from "../../components/TourCard";
import { useStyles } from "../../components/ActionButton";
import { mobile } from "../../styles/devices";

const MyTours = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(mobile);
  const { user } = useAuth0();
  console.log("user", user);

  return (
    <Box className="sectionPadding">
      <Container className="sectionPadding">
        <Typography variant="h5" className={classes.titleText}>
          My Tours
        </Typography>
        <Box className={isMobile ? classes.mobileView : classes.desktopView}>
          {/* <TourCard /> */}
        </Box>
      </Container>
    </Box>
  );
};
export default MyTours;
