// lib
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

// src
import TourCard from "../../components/TourCard";
import { useStyles } from "../../components/ActionButton";
import { mobile } from "../../styles/devices";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, stateType } from "../../store/types";
import { myTours } from "../../store/tours/toursSlice";

const MyTours = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(mobile);
  const dispatch = useDispatch<AppDispatch>();
  const userTours = useSelector((state: stateType) => state?.tours);

  useEffect(() => {
    dispatch(myTours("test"));
  }, []);

  return (
    <Box className="sectionPadding">
      <Container className="sectionPadding">
        <Typography variant="h5" className={classes.titleText}>
          My Tours
        </Typography>
        <Box className={isMobile ? classes.mobileView : classes.desktopView}>
          {userTours &&
            userTours.map((userTour, index) => (
              <TourCard key={`${userTour.id}_${index}`} tour={userTour} />
            ))}
        </Box>
      </Container>
    </Box>
  );
};
export default MyTours;
