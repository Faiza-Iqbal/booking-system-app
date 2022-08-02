// lib
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";

// src
import Banner from "../../components/Banner";
import Filters from "../../components/Filters";
import { fetchTours } from "../../store/tours";
import { AppDispatch } from "../../store/types";
import { placeType } from "../../store/places/types";
import Destinations from "../../components/Destinations";
import PopularSearch from "../../components/PopularSearch";
import { defaultToursId } from "../../constants/apiConstants";

const LandingPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedPlace, setSelectedPlace] = useState<placeType>(null);

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
