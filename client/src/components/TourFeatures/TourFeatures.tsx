import { Box, Grid, Typography } from "@mui/material";

import { useStyles } from "../../components/ActionButton";

type TourFeaturesType = {
  tourFeatures: string[] | undefined;
};

const TourFeatures = ({ tourFeatures }: TourFeaturesType) => {
  const classes = useStyles();

  return (
    <Box className="sectionPadding">
      <Grid container>
        <Grid item md={4}>
          <Typography className={classes.boldText}>Facilities</Typography>
        </Grid>
        <Grid item md={8}>
          <Typography className={classes.normalText}>
            {tourFeatures && `${tourFeatures[0]}, ${tourFeatures[1]}`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TourFeatures;
