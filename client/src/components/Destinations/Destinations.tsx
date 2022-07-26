// lib
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// src
import TourCard from "../TourCard";
import { useStyles } from "../../components/ActionButton";
import { placeType } from "../../store/places/types";
import { stateType } from "../../store/types";

type DestinationsType = {
  selectedPlace: placeType;
};

const Destinations = ({ selectedPlace }: DestinationsType) => {
  const classes = useStyles();
  const tours = useSelector((state: stateType) => state.tours);

  return (
    <Box className="sectionPadding">
      {selectedPlace?.location_name && (
        <Typography variant="h5" className={classes.titleText}>
          {`Top Destinations at ${selectedPlace.location_name}`}
        </Typography>
      )}
      <Box className="sectionPadding flexBox">
        {tours && tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}
      </Box>
    </Box>
  );
};
export default Destinations;
