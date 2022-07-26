// lib
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Container, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// src
import Location from "./Location";
import DatePicker from "./Date";
import Price from "./Price";
import { mobile } from "../../styles/devices";
import ActionButton from "../ActionButton";
import { fetchTours } from "../../store/tours";
import { AppDispatch } from "../../store/types";
import { placeType } from "../../store/places/types";
import { FiltersParam } from "../../store/tours/types";
import { useStyles } from "./FiltersStyled.style";

type FiltersProp = {
  selectedPlace: placeType;
  setSelectedPlace: (placeType: placeType) => void;
};

type FilterDates = {
  start?: string;
  end?: string;
};

const Filters = ({ selectedPlace, setSelectedPlace }: FiltersProp) => {
  const classes = useStyles();
  const isMobile = useMediaQuery(mobile);
  const dispatch = useDispatch<AppDispatch>();
  const [filterDates, setFilterDates] = useState({});
  const [price, setPrice] = useState("");

  const setFormattedDateRange = (startDate: Date, endDate: Date) => {
    const filteredDates = {
      start: startDate.toISOString().split("T")[0],
      end: endDate.toISOString().split("T")[0],
    };
    setFilterDates(filteredDates);
  };

  const searchByFilterAction = (
    place: placeType,
    priceRang: string,
    dateRange: FilterDates
  ) => {
    const filterParam: FiltersParam = {};
    if (place?.id) filterParam.id = place?.id;
    if (priceRang) {
      const prices = priceRang.split("-");
      filterParam.priceMin = parseInt(prices[0]);
      if (prices[1] !== "max") filterParam.priceMax = parseInt(prices[1]);
    }
    if (dateRange && dateRange.start && dateRange.end) {
      filterParam.checkin = dateRange.start;
      filterParam.checkout = dateRange.end;
    }
    dispatch(fetchTours(filterParam));
  };

  return (
    <Container className={classes.absoluteContainer}>
      <Box className={isMobile ? classes.mobileAligned : classes.innerWrapper}>
        <Location setSelectedPlace={setSelectedPlace} />
        {!isMobile && (
          <DatePicker
            months={2}
            direction={"horizontal"}
            setFormattedDateRange={setFormattedDateRange}
          />
        )}

        {isMobile && (
          <DatePicker
            months={1}
            setFormattedDateRange={setFormattedDateRange}
          />
        )}
        <Price setPrice={setPrice} price={price} />
        <Box className="fullWidth">
          <ActionButton
            className={
              isMobile
                ? classes.searchButton
                : `${classes.positionedButton} ${classes.searchButton}`
            }
            onClick={() =>
              searchByFilterAction(selectedPlace, price, filterDates)
            }
          >
            <SearchIcon />
          </ActionButton>
        </Box>
      </Box>
    </Container>
  );
};
export default Filters;
