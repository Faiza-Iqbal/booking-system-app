// lib
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// src
import ActionButton from "../ActionButton";
import DialogBox from "../DialogBox";
import { useStyles } from "../TourCard/TourCardStyled";
import { getTourDays, goToRoute } from "../../utils/helperFunctions";
import { TourDetailType } from "../../store/tourDetails/types";
import { AppDispatch } from "../../store/types";
import { deleteTour } from "../../store/tours/toursSlice";

type UserTourCardProp = {
  tour: TourDetailType;
};

const UserTourCard = ({ tour }: UserTourCardProp) => {
  const classes = useStyles();
  const { user } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [actionVisible, setActionVisible] = useState(false);
  const [confirmationDialog, setConfirmationDialog] = useState(false);

  const deleteMyTour = (id: string | undefined) => {
    setConfirmationDialog(false);

    if (!id) return;

    dispatch(deleteTour(id));
  };

  const updateMyBooking = (id: string | undefined) => {
    if (!id) return;

    navigate(goToRoute("/update-tour", id));
  };

  return (
    <Card
      className={classes.cardStyled}
      onMouseEnter={() => setActionVisible(true)}
      onMouseLeave={() => setActionVisible(false)}
    >
      <CardMedia
        component="img"
        className={classes.cardMedia}
        image={
          tour?.images?.length
            ? tour.images[0]
            : "http://localhost:3000/assets/cardThumbnail.webp"
        }
        alt="Tour Info"
      />
      <CardContent>
        <Typography>
          <b>{tour.publicAddress}</b>
        </Typography>
        <Typography variant="caption"> {tour.title}</Typography>
      </CardContent>
      <CardActions>
        <Box className={classes.innerCardBox}>
          <Typography className={classes.smallTypo}>
            <AttachMoneyIcon />
            {tour.price}
          </Typography>
          <Typography className={classes.smallTypo}>
            <AccessTimeIcon />
            {`${getTourDays(tour?.checkin, tour?.checkout)} Days`}
          </Typography>
        </Box>
        {user && actionVisible && (
          <Box>
            <ActionButton
              onClick={() => updateMyBooking(tour.id)}
              className={classes.buttonStyled}
            >
              update
            </ActionButton>
            <ActionButton
              onClick={() => setConfirmationDialog(true)}
              className={classes.buttonStyled}
            >
              delete
            </ActionButton>
          </Box>
        )}
      </CardActions>

      <DialogBox
        handleConfirmation={() => deleteMyTour(tour?._id)}
        isOpen={confirmationDialog}
      />
    </Card>
  );
};
export default UserTourCard;
