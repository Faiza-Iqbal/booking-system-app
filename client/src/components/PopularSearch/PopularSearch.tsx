// lib
import { useDispatch } from "react-redux";
import { Box, Typography, Link, Container, useMediaQuery } from "@mui/material";

// src
import { fetchTours } from "../../store/tours";
import { AppDispatch } from "../../store/types";
import { POPULAR_PLACES } from "../../constants/apiConstants";

// styles
import { useStyle } from "./style";
import { MOBILE } from "../../styles/devices";

const PopularSearch = () => {
  const classes = useStyle();
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useMediaQuery(MOBILE);

  const popularPlaces = POPULAR_PLACES;

  return (
    <Box sx={{ pt: 6 }}>
      <Container className={classes.centerAlign}>
        <Typography variant="h5" sx={{ m: 3 }}>
          Popular Search
        </Typography>
        <Box
          className={isMobile ? classes.verticalAlign : classes.fullWidthFlex}
        >
          {popularPlaces.map((place) => (
            <Box
              key={place.id}
              className={classes.outlined}
              onClick={() => dispatch(fetchTours({ id: place.id }))}
            >
              <Link>{place?.location_name}</Link>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default PopularSearch;
