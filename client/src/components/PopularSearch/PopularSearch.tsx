// lib
import { Box, Typography, Link, Container, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";

// src
import { POPULAR_PLACES } from "../../constants/apiConstants";
import { fetchTours } from "../../store/tours";
import { AppDispatch } from "../../store/types";
import { mobile } from "../../styles/devices";

import { useStyle } from "./PopularSearchStyled.style";

const PopularSearch = () => {
  const classes = useStyle();
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useMediaQuery(mobile);

  const popularPlaces = POPULAR_PLACES;

  return (
    <Box className="sectionPadding">
      <Container className={classes.centerAlign}>
        <Typography variant="h5" sx={{ m: 2 }}>
          Popular Search
        </Typography>
        <Box
          className={isMobile ? classes.verticalAlign : classes.fullWidthFlex}
        >
          {popularPlaces.map((place) => (
            <Box
              key={place.id}
              onClick={() => dispatch(fetchTours({ id: place.id }))}
              className={classes.outlined}
            >
              <Link>{place.location_name}</Link>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default PopularSearch;
