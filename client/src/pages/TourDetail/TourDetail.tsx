// lib
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Box, Container, Typography, useMediaQuery } from "@mui/material";

// src

import TourInfo from "../../components/TourInfo";
import WeatherCard from "../../components/WeatherCard";

import ImageGallery from "../../components/ImageGallery";
import TourFeatures from "../../components/TourFeatures";

import ActionButton from "../../components/ActionButton";

import { AppDispatch, StateType } from "../../store/types";
import { getWeatherForecast } from "../../store/weather/weatherSlice";

import {
  getCurrentUser,
  getStoredTourDetail,
  goToRoute,
} from "../../utils/helperFunctions";

// styles

import { MOBILE } from "../../styles/devices";
import { useStyles } from "../../components/ActionButton";

const TourDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch<AppDispatch>();

  const isMobile = useMediaQuery(MOBILE);
  const weather = useSelector((state: StateType) => state?.weather);
  const [localTourDetail, setLocalTourDetail] = useState(getStoredTourDetail());

  const user = getCurrentUser();
  const locationName = localTourDetail?.publicAddress;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getWeatherForecast(locationName));
  }, [locationName]);

  const bookNow = (tourId?: string) => {
    if (user) navigate(goToRoute("/book-tour", tourId));
    else loginWithRedirect();
  };

  return (
    <Box className="sectionPadding">
      {localTourDetail?.id && (
        <Container className="sectionPadding">
          <Typography variant="h5" className={classes.titleText}>
            {localTourDetail?.publicAddress}
          </Typography>
          <TourInfo tourDetail={localTourDetail} />
          <ImageGallery images={localTourDetail?.images} />
          <Typography className={classes.normalText} align="center">
            {localTourDetail?.title}
          </Typography>
          <Typography variant="h5" className={classes.titleText}>
            What's included
          </Typography>
          <TourFeatures
            tourFeatures={localTourDetail?.listingPreviewAmenityNames}
          />
          <Typography variant="h5" className={classes.titleText}>
            Itinerary Schedule
          </Typography>
          <Box className={isMobile ? classes.mobileView : classes.desktopView}>
            {weather?.forecast?.forecastday?.map((dayObj, index) => (
              <WeatherCard key={index} dayObj={dayObj} day={index + 1} />
            ))}
          </Box>
          <Box>
            <ActionButton
              label="Book Now"
              className={classes.buttonStyled}
              onClick={() => bookNow(localTourDetail.id)}
            />
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default TourDetail;
