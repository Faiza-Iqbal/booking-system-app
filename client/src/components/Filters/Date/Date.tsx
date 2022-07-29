// lib
import { useState, useRef, useCallback, useMemo } from "react";
import subDays from "date-fns/subDays";
import { DateRange } from "react-date-range";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Box, TextField, Typography, useMediaQuery } from "@mui/material";
import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// src
import { useStyles } from "./DateStyled.style";
import { getMonthFromDateObj } from "../../../utils/helperFunctions";
import "./DateStyle.scss";
import { MOBILE } from "../../../styles/devices";

type DatePickerProps = {
  months: number;
  direction?: string;
  setFormattedDateRange: (startDate: Date, endDate: Date) => void;
};

type selectPropsType = {
  selection: { startDate: Date; endDate: Date };
};

const DatePicker = (props: any) => {
  const isMobile = useMediaQuery(MOBILE);
  const classes = useStyles();
  const now = useRef(new Date());
  const [rangePicker, setRangePicker] = useState(false);
  const [from, setFrom] = useState(now.current);
  const [to, setTo] = useState(subDays(now.current, -5));

  const handleSelect = useCallback(
    ({ selection: { startDate, endDate } }: selectPropsType) => {
      setFrom(getMonthFromDateObj(startDate).objectFormat);
      setTo(getMonthFromDateObj(endDate).objectFormat);
      if (endDate !== startDate) {
        setRangePicker(false);
        props.setFormattedDateRange(startDate, endDate);
      }
    },
    []
  );

  const selectedDateRange = `${getMonthFromDateObj(from).stringFormat} - ${
    getMonthFromDateObj(to).stringFormat
  }`;

  const ranges = useMemo(() => {
    return [
      {
        startDate: from,
        endDate: to,
        key: "selection",
      },
    ];
  }, [from, to]);

  return (
    <Box
      className={
        isMobile
          ? `${classes.boxStyled}`
          : `${classes.boxStyled} ${classes.boxPositioned}`
      }
    >
      <DateRangeIcon />
      <Box className="border fullWidth">
        <Typography>Choose Date</Typography>
        <TextField
          onClick={() => setRangePicker(true)}
          placeholder="Choose Here"
          value={selectedDateRange}
        />
      </Box>
      {rangePicker && (
        <Box className="dateRangeWrap">
          <DateRange
            dateDisplayFormat={"YYYY.MM.dd"}
            moveRangeOnFirstSelection={false}
            ranges={ranges}
            onChange={handleSelect}
            showDateDisplay={false}
            {...props}
          />
        </Box>
      )}
    </Box>
  );
};

export default DatePicker;
