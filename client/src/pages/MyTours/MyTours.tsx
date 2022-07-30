// lib
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";

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
  const { tours, status, error } = useSelector(
    (state: stateType) => state?.tours
  );
  useEffect(() => {
    dispatch(myTours());
  }, []);

  return (
    <Box className="sectionPadding">
      <Container className="sectionPadding">
        <Typography variant="h5" className={classes.titleText}>
          My Tours
        </Typography>
        {status === "loading" && (
          <Box className={classes.loader}>
            <CircularProgress />
          </Box>
        )}
        {status === "succeeded" && (
          <Box className={isMobile ? classes.mobileView : classes.desktopView}>
            {tours && tours.length > 0 ? (
              tours.map((userTour, index) => (
                <UserTourCard key={`${userTour.id}_${index}`} tour={userTour} />
              ))
            ) : (
              <NoResultFound />
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
};
export default MyTours;
