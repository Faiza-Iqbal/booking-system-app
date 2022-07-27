import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// src
import ActionButton from "../../components/ActionButton";
import { useStyles } from "../../components/ActionButton";
import ImageGallery from "../../components/ImageGallery";
import TourFeatures from "../../components/TourFeatures";
import TourInfo from "../../components/TourInfo";
import WeatherCard from "../../components/WeatherCard";
import { AppDispatch, stateType } from "../../store/types";
import { getWeatherForecast } from "../../store/weather/weatherSlice";
import { mobile } from "../../styles/devices";
import { goToRoute } from "../../utils/helperFunctions";

const TourDetail = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(mobile);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const tourDetail = useSelector((state: stateType) => state?.tourDetails);
  const weather = useSelector((state: stateType) => state?.weather);
  console.log("tourDetail", tourDetail);

  const locationName = tourDetail.publicAddress;

  useEffect(() => {
    dispatch(getWeatherForecast(locationName));
  }, [locationName]);

  const bookNow = (tourId: string | undefined) => {
    navigate(goToRoute("/book-tour", tourId));
  };

  return (
    <Box className="sectionPadding">
      <Container className="sectionPadding">
        <Typography variant="h5" className={classes.titleText}>
          {tourDetail.publicAddress}
        </Typography>
        <TourInfo tourDetail={tourDetail} />
        <ImageGallery images={tourDetail?.images} />
        <Typography className={classes.normalText} align="center">
          {tourDetail.title}
        </Typography>
        <Typography variant="h5" className={classes.titleText}>
          What's included
        </Typography>
        <TourFeatures tourFeatures={tourDetail?.listingPreviewAmenityNames} />
        <Typography variant="h5" className={classes.titleText}>
          Itinerary Schedule
        </Typography>
        <Box className={isMobile ? classes.mobileView : classes.desktopView}>
          {weather.forecast.forecastday.map((dayObj, index) => (
            <WeatherCard key={index} dayObj={dayObj} />
          ))}
        </Box>
        <Box>
          <ActionButton
            onClick={() => bookNow(tourDetail.id)}
            className={classes.buttonStyled}
            label="Book Now"
          />
        </Box>
      </Container>
    </Box>
  );
};
export default TourDetail;
