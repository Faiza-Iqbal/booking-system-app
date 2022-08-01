// lib
import {
  Autocomplete,
  Box,
  ListItem,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddLocationIcon from "@mui/icons-material/AddLocation";

// src
import { useStyles } from "./LocationStyled.style";
import { fetchPlaces } from "../../../store/places/placesSlice";
import { AppDispatch, StateType } from "../../../store/types";
import { placeType } from "../../../store/places/types";
import { MOBILE } from "../../../styles/devices";

type LocationProps = {
  setSelectedPlace: (placeType: placeType) => void;
};

const Location = ({ setSelectedPlace }: LocationProps) => {
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const places: placeType[] = useSelector((state: StateType) => state?.places);
  const isMobile = useMediaQuery(MOBILE);

  const getOptionLabel = (place: placeType) =>
    place ? place.location_name : "";

  const onChange = (place: placeType) => setSelectedPlace(place);

  const handleLocationChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    if (value.length < 3) return;
    dispatch(fetchPlaces(value));
  };

  return (
    <Box
      className={
        isMobile
          ? `${classes.boxStyled}`
          : `${classes.boxStyled} ${classes.boxPositioned}`
      }
    >
      <AddLocationIcon />
      <Box className="fullWidth border">
        <Typography>Location</Typography>
        <Autocomplete
          options={places}
          isOptionEqualToValue={(place, value) => place?.id === value?.id}
          noOptionsText="Start typing..."
          onInputChange={handleLocationChange}
          onChange={(_, place) => onChange(place)}
          getOptionLabel={getOptionLabel}
          renderInput={(place) => (
            <TextField {...place} placeholder="Where you want to go?" />
          )}
          renderOption={(props, place, index) => {
            return (
              <ListItem {...props} key={`${place?.id}_${index}`}>
                {place?.location_name}
              </ListItem>
            );
          }}
        />
      </Box>
    </Box>
  );
};
export default Location;
