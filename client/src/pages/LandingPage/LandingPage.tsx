import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// src
import Banner from "../../components/Banner";
import Destinations from "../../components/Destinations";
import Filters from "../../components/Filters";
import PopularSearch from "../../components/PopularSearch";
import { defaultToursId } from "../../constants/apiConstants";
import { placeType } from "../../store/places/types";
import { fetchTours } from "../../store/tours";
import { AppDispatch } from "../../store/types";

const LandingPage = () => {
  const [selectedPlace, setSelectedPlace] = useState<placeType>(null);
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchTours({ id: defaultToursId }));
  // }, []);

  return (
    <Box>
      <Banner />
      <Filters
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
      <Container>
        <PopularSearch />
        <Destinations selectedPlace={selectedPlace} />
      </Container>
    </Box>
  );
};
export default LandingPage;
