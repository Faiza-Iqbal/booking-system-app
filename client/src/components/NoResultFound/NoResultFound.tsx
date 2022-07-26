import { Box, Typography } from "@mui/material";

const NoResultFound = () => {
  return (
    <Box>
      <Box
        component="img"
        alt="Welcome to TourBay"
        src="http://localhost:3000/assets/empty.webp"
        sx={{ width: "100%" }}
      />
      <Typography align="center">
        Sorry! No tours available at the moment.
      </Typography>
    </Box>
  );
};
export default NoResultFound;
