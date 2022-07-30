// lib
import { Box, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// src
import TourCard from "../TourCard";
import { useStyles } from "../../components/ActionButton";
import { placeType } from "../../store/places/types";
import { stateType } from "../../store/types";
import { getDestinationName } from "../../utils/helperFunctions";

type DestinationsProps = {
  selectedPlace: placeType;
};

const Destinations = ({ selectedPlace }: DestinationsProps) => {
  const classes = useStyles();
  const { tours, status, error } = useSelector(
    (state: stateType) => state.tours
  );

  return (
    <Box className="sectionPadding">
      {selectedPlace?.location_name && tours.length ? (
        <Typography variant="h5" className={classes.titleText}>
          {`Top Destinations at ${getDestinationName(tours[0].publicAddress)}`}
        </Typography>
      ) : (
        tours.length > 0 && (
          <Typography variant="h5" className={classes.titleText}>
            {`Top Destinations at Turkey`}
          </Typography>
        )
      )}
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
      {status === "rejected" && (
        <p className="error">
          Sorry! Could not process your request at the moment.
        </p>
      )}
    </Box>
  );
};
export default Destinations;
