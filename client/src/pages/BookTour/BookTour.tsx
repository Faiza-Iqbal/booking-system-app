// lib
import { Box, Container, Grid, Typography } from "@mui/material";

// src
import BookingForm from "../../components/BookingForm";
import { useStyles } from "../../components/ActionButton";
import { BOOK_TOUR_ASSET } from "../../constants/staticUrls";

const BookTour = () => {
  const classes = useStyles();

  return (
    <Container className="sectionPadding">
      <Grid container className="sectionPadding flexBox">
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h5" className={classes.titleText}>
            Confirm Your Booking
          </Typography>
          <BookingForm />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className="flexBox">
          <Box
            component="img"
            className="fullWidth"
            src={BOOK_TOUR_ASSET}
            alt="Welcome to TourBay"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default BookTour;
