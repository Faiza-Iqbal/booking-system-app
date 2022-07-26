// lib
import { Box, Typography } from "@mui/material";

// src
import { EMPTY_RESULT } from "../../constants/staticUrls";
import { useStyles } from "./style";

const NoResultFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.emptyPlaceholder}>
      <Box
        component="img"
        alt="Welcome to TourBay"
        src={EMPTY_RESULT}
        className={classes.emptyImg}
      />
      <Typography align="center">Ooops! No result found!</Typography>
    </Box>
  );
};
export default NoResultFound;
