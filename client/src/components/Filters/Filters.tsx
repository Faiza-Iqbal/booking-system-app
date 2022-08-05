// lib
import { useState } from "react";
import { useDispatch } from "react-redux";
import { If, Else, Then } from "react-if";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, useMediaQuery } from "@mui/material";

// src
import Price from "./Price";
import DatePicker from "./DatePicker";
import Location from "./Location";
import ActionButton from "../ActionButton";
import { fetchTours } from "../../store/tours";
import { AppDispatch } from "../../store/types";
import { placeType } from "../../store/places/types";
import { FiltersParam } from "../../store/tours/types";

// styles
import { useStyles } from "./style";
import { MOBILE, TABLET } from "../../styles/devices";

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
  const dispatch = useDispatch<AppDispatch>();

  const [price, setPrice] = useState("");
  const [filterDates, setFilterDates] = useState({});

  const isMobile = useMediaQuery(MOBILE);
  const isTablet = useMediaQuery(TABLET);

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
      filterParam.checkin = dateRange?.start;
      filterParam.checkout = dateRange?.end;
    }

    dispatch(fetchTours(filterParam));
  };

  return (
    <Container className={classes.absoluteContainer}>
      <Box
        className={
          isMobile
            ? classes.mobileAligned
            : isTablet
            ? classes.tabletAligned
            : classes.innerWrapper
        }
      >
        <Location setSelectedPlace={setSelectedPlace} />
        <If condition={!isMobile}>
          <Then>
            <DatePicker
              months={2}
              direction={"horizontal"}
              setFormattedDateRange={setFormattedDateRange}
            />
          </Then>
          <Else>
            <DatePicker
              months={1}
              setFormattedDateRange={setFormattedDateRange}
            />
          </Else>
        </If>
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
