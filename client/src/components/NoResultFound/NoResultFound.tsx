import { Box, Typography } from "@mui/material";

import { EMPTY_RESULT } from "../../constants/staticUrls";
import { useStyles } from "./NoResultFoundStyled.style";

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
      <Typography align="center">
        Ooops! You have not booked any tour yet!
      </Typography>
    </Box>
  );
};
export default NoResultFound;
