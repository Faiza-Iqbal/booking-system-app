// lib
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";

// src
import { useStyles } from "../../components/ActionButton";
import UserTourCard from "../../components/UserTourCard";
import NoResultFound from "../../components/NoResultFound";
import { AppDispatch, stateType } from "../../store/types";
import { myTours } from "../../store/tours/toursSlice";
import { MOBILE } from "../../styles/devices";

const MyTours = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(MOBILE);
  const dispatch = useDispatch<AppDispatch>();
  const userTours = useSelector((state: stateType) => state?.tours);

  useEffect(() => {
    dispatch(myTours());
  }, []);

  return (
    <Box className="sectionPadding">
      <Container className="sectionPadding">
        <Typography variant="h5" className={classes.titleText}>
          My Tours
        </Typography>
        <Box className={isMobile ? classes.mobileView : classes.desktopView}>
          {userTours.length > 0 ? (
            userTours.map((userTour, index) => (
              <UserTourCard key={`${userTour.id}_${index}`} tour={userTour} />
            ))
          ) : (
            <NoResultFound />
          )}
        </Box>
      </Container>
    </Box>
  );
};
export default MyTours;
