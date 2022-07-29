// lib
import { useState, useRef, useCallback, useMemo } from "react";
import subDays from "date-fns/subDays";
import { DateRange } from "react-date-range";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Box, TextField, Typography, useMediaQuery } from "@mui/material";
import "react-date-range/dist/styles.css";

// src
import { useStyles } from "./DatePickerStyled.style";
import { getMonthFromDateObj } from "../../../utils/helperFunctions";
import "./DatePickerStyle.scss";
import { MOBILE } from "../../../styles/devices";
import { useOutsideClickAlerter } from "./useOutsideClick";

type DatePickerProps = {
  months: number;
  direction?: string;
  setFormattedDateRange: (startDate: Date, endDate: Date) => void;
};

type selectPropsType = {
  selection: { startDate: Date; endDate: Date };
};

const DatePicker = (props: any) => {
  const classes = useStyles();
  const now = useRef(new Date());
  const datePickerRef = useRef(null);
  const isMobile = useMediaQuery(MOBILE);
  const [from, setFrom] = useState(now.current);
  const [rangePicker, setRangePicker] = useState(false);
  const [to, setTo] = useState(subDays(now.current, -5));
  useOutsideClickAlerter(datePickerRef, setRangePicker);

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
        <Box ref={datePickerRef} className="dateRangeWrap">
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
