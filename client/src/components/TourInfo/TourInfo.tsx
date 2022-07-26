// lib
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddLocationIcon from "@mui/icons-material/AddLocation";

// src
import { getTourDays } from "../../utils/helperFunctions";
import { TourDetailType } from "../../store/tourDetails/types";

// styles
import { useStyles } from "../TourCard";

type TourInfoProps = {
  tourDetail: TourDetailType;
};

const TourInfo = ({ tourDetail }: TourInfoProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.touInfoWrapper}>
      <Typography className={classes.smallTypo}>
        <AddLocationIcon />
        {tourDetail?.publicAddress}
      </Typography>
      <Typography className={classes.smallTypo}>
        <AttachMoneyIcon />
        {tourDetail?.price}
      </Typography>
      <Typography className={classes.smallTypo}>
        <AccessTimeIcon />
        {`${getTourDays(tourDetail?.checkin, tourDetail?.checkout)} Days`}
      </Typography>
    </Box>
  );
};
export default TourInfo;
