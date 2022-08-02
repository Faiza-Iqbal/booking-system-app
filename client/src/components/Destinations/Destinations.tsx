// lib
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from "@mui/material";

// src
import TourCard from "../TourCard";
import NoResultFound from "../NoResultFound";
import { StateType } from "../../store/types";
import { setSnackBar } from "../../store/snackBar";
import { placeType } from "../../store/places/types";
import { useStyles } from "../../components/ActionButton";
import { getDestinationName } from "../../utils/helperFunctions";

type DestinationsProps = {
  selectedPlace: placeType;
};

const Destinations = ({ selectedPlace }: DestinationsProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tours, status } = useSelector((state: StateType) => state.tours);

  useEffect(() => {
    if (status === "rejected")
      dispatch(
        setSnackBar({
          message: "Your request could not be processed at the moment",
          visible: true,
        })
      );
  }, [status, dispatch]);

  return (
    <Box className="sectionPadding">
      {selectedPlace?.location_name || tours?.length ? (
        <Typography variant="h5" className={classes.titleText}>
          {`Top Destinations at ${getDestinationName(tours[0]?.publicAddress)}`}
        </Typography>
      ) : (
        tours?.length > 0 && (
          <Typography variant="h5" className={classes.titleText}>
            {`Top Destinations at Turkey`}
          </Typography>
        )
      )}
      {status !== "loading" && tours?.length === 0 && <NoResultFound />}
      {status === "loading" && (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      )}
      {status === "succeeded" && (
        <Box className="sectionPadding flexBox">
          {tours && tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}
        </Box>
      )}
    </Box>
  );
};
export default Destinations;
