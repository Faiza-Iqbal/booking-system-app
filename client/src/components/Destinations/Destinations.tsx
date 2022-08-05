// lib
import { useEffect } from "react";
import { If, Else, Then } from "react-if";
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
      <If condition={selectedPlace?.location_name || tours?.length}>
        <Then>
          <Typography variant="h5" className={classes.titleText}>
            {`Top Destinations at ${getDestinationName(
              tours[0]?.publicAddress
            )}`}
          </Typography>
        </Then>
        <Else>
          <If condition={tours?.length > 0}>
            <Then>
              <Typography variant="h5" className={classes.titleText}>
                {`Top Destinations at Turkey`}
              </Typography>
            </Then>
          </If>
        </Else>
      </If>
      <If condition={status !== "loading" && tours?.length === 0}>
        <Then>
          <NoResultFound />
        </Then>
        <Else>
          <If condition={status === "loading"}>
            <Then>
              <Box className={classes.loader}>
                <CircularProgress />
              </Box>
            </Then>
          </If>
        </Else>
      </If>
      <If condition={status === "succeeded"}>
        <Then>
          <Box className="sectionPadding flexBox">
            {tours &&
              tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}
          </Box>
        </Then>
      </If>
    </Box>
  );
};
export default Destinations;
