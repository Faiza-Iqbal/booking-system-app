// lib
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddLocationIcon from "@mui/icons-material/AddLocation";

import { useStyles } from "../TourCard";
import { TourDetailType } from "../../store/tourDetails/types";

type TourInfo = {
  tourDetail: TourDetailType;
};

const TourInfo = ({ tourDetail }: TourInfo) => {
  const classes = useStyles();

  return (
    <Box className={classes.touInfoWrapper}>
      <Typography className={classes.smallTypo}>
        <AddLocationIcon />
        {tourDetail.publicAddress}
      </Typography>
      <Typography className={classes.smallTypo}>
        <AttachMoneyIcon />
        {tourDetail.price}
      </Typography>
      <Typography className={classes.smallTypo}>
        <AccessTimeIcon />1 day
      </Typography>
    </Box>
  );
};
export default TourInfo;
