// lib
import { Box, Container, Grid, Typography } from "@mui/material";

// src
import { useStyles } from "../../components/ActionButton";
import BookingForm from "../../components/BookingForm";

const BookTour = () => {
  const classes = useStyles();

  return (
    <Container className="sectionPadding">
      <Grid container className="sectionPadding">
        <Grid item md={6}>
          <Typography variant="h5" className={classes.titleText}>
            Confirm Your Booking
          </Typography>
          <BookingForm />
        </Grid>
        <Grid item md={6}>
          <Box
            component="img"
            alt="Welcome to TourBay"
            src="http://localhost:3000/assets/cardThumbnail.webp"
            className="fullWidth"
            height="100%"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default BookTour;
