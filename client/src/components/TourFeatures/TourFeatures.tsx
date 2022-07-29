import { Box, Grid, Typography } from "@mui/material";

import { useStyles } from "../../components/ActionButton";

type TourFeaturesProps = {
  tourFeatures: string[] | undefined;
};

const TourFeatures = ({ tourFeatures }: TourFeaturesProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.featuresWrapper}>
      <Grid container>
        <Grid item md={2}>
          <Typography className={classes.boldText}>Facilities:</Typography>
        </Grid>
        <Grid item md={10}>
          <Typography className={classes.normalText}>
            {tourFeatures
              ? `${tourFeatures[0]}, ${tourFeatures[1]}`
              : `Basic Facilities Covered Only`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TourFeatures;
