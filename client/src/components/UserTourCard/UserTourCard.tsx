// lib
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { If, Then } from "react-if";

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
import DialogBox from "../DialogBox";
import ActionButton from "../ActionButton";
import { AppDispatch } from "../../store/types";
import { setSnackBar } from "../../store/snackBar";
import { deleteTour } from "../../store/tours/toursSlice";
import { TourDetailType } from "../../store/tourDetails/types";
import { getTourDays, goToRoute } from "../../utils/helperFunctions";

// styles
import { useStyles } from "../TourCard/style";

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

  const deleteMyTour = (id?: string) => {
    setConfirmationDialog(false);

    if (!id) return;

    dispatch(deleteTour(id));
    dispatch(
      setSnackBar({
        message: "Tour successfully Deleted",
        visible: true,
      })
    );
  };

  const updateMyBooking = (id?: string) => {
    if (!id) return;

    navigate(goToRoute("/update-tour", id));
  };

  return (
    <Card
      className={`${classes.cardStyled} ${classes.userCard}`}
      onMouseEnter={() => setActionVisible(true)}
      onMouseLeave={() => setActionVisible(false)}
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
        <If condition={user && actionVisible}>
          <Then>
            <Box>
              <ActionButton
                onClick={() => updateMyBooking(tour?.id)}
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
          </Then>
        </If>
      </CardActions>

      <DialogBox
        handleConfirmation={() => deleteMyTour(tour?._id)}
        isOpen={confirmationDialog}
        handleClose={() => setConfirmationDialog(false)}
      />
    </Card>
  );
};
export default UserTourCard;
