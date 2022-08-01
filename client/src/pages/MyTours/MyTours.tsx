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
import { AppDispatch, StateType } from "../../store/types";
import { myTours } from "../../store/tours/toursSlice";
import { MOBILE } from "../../styles/devices";
import { setSnackBar } from "../../store/snackBar";

const MyTours = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(MOBILE);
  const dispatch = useDispatch<AppDispatch>();

  const { tours, status } = useSelector((state: StateType) => state?.tours);

  useEffect(() => {
    dispatch(myTours());
  }, []);

  useEffect(() => {
    if (status === "deleted") {
      dispatch(
        setSnackBar({
          message: "Tour successfully Deleted",
          visible: true,
        })
      );
    }
  }, [status, dispatch]);

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
        {status !== "loading" && (
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
