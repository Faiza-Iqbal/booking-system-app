// lib
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";

// src
import ActionButton from "../../components/ActionButton";
import { useStyles } from "../../components/ActionButton";
import ImageGallery from "../../components/ImageGallery";
import TourFeatures from "../../components/TourFeatures";
import TourInfo from "../../components/TourInfo";
import WeatherCard from "../../components/WeatherCard";
import { AppDispatch, stateType } from "../../store/types";
import { getWeatherForecast } from "../../store/weather/weatherSlice";
import {
  getCurrentUser,
  getStoredTourDetail,
  goToRoute,
} from "../../utils/helperFunctions";
import { MOBILE } from "../../styles/devices";
import { useAuth0 } from "@auth0/auth0-react";

const TourDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(MOBILE);
  const dispatch = useDispatch<AppDispatch>();
  const weather = useSelector((state: stateType) => state?.weather);
  const [localTourDetail, setLocalTourDetail] = useState(getStoredTourDetail());
  const locationName = localTourDetail.publicAddress;
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getWeatherForecast(locationName));
  }, [locationName]);

  const user = getCurrentUser();

  const bookNow = (tourId: string | undefined) => {
    if (user) navigate(goToRoute("/book-tour", tourId));
    else loginWithRedirect();
  };

  return (
    <Box className="sectionPadding">
      {localTourDetail?.id && (
        <Container className="sectionPadding">
          <Typography variant="h5" className={classes.titleText}>
            {localTourDetail.publicAddress}
          </Typography>
          <TourInfo tourDetail={localTourDetail} />
          <ImageGallery images={localTourDetail?.images} />
          <Typography className={classes.normalText} align="center">
            {localTourDetail.title}
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
            {weather.forecast.forecastday.map((dayObj, index) => (
              <WeatherCard key={index} dayObj={dayObj} day={index + 1} />
            ))}
          </Box>
          <Box>
            <ActionButton
              onClick={() => bookNow(localTourDetail.id)}
              className={classes.buttonStyled}
              label="Book Now"
            />
          </Box>
        </Container>
      )}
    </Box>
  );
};
export default TourDetail;
