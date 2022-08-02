// lib
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// src
import { AppDispatch } from "../../store/types";
import { setTourDetails } from "../../store/tourDetails";
import { TourDetailType } from "../../store/tourDetails/types";
import { getTourDays, goToRoute } from "../../utils/helperFunctions";

// styles
import { useStyles } from "./style";

type TourCardProp = {
  tour: TourDetailType;
};

const TourCard = ({ tour }: TourCardProp) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const goToTourDetail = (tourId?: string) => {
    if (!tourId) return;
    dispatch(setTourDetails(tour));
    navigate(goToRoute("/tour-detail", tourId));
  };

  return (
    <Card
      className={classes.cardStyled}
      onClick={() => goToTourDetail(tour?.id)}
    >
      <CardMedia
        component="img"
        className={classes.cardMedia}
        image={
          tour?.images?.length
            ? tour?.images[0]
            : "http://localhost:3000/assets/cardThumbnail.webp"
        }
        alt="Tour Info"
      />
      <CardContent>
        <Typography>
          <b>{tour?.publicAddress}</b>
        </Typography>
        <Typography variant="caption"> {tour?.title}</Typography>
      </CardContent>
      <CardActions>
        <Box className={classes.innerCardBox}>
          <Typography className={classes.smallTypo}>
            <AttachMoneyIcon />
            {tour?.price}
          </Typography>
          <Typography className={classes.smallTypo}>
            <AccessTimeIcon />
            {`${getTourDays(tour?.checkin, tour?.checkout)} Days`}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};
export default TourCard;
