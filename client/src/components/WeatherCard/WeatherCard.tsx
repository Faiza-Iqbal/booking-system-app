// lib
import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

// src
import { WeatherCardProps } from "./types";
import { useStyles } from "./WeatherCardStyled.style";

const WeatherCard = ({ dayObj, day }: WeatherCardProps) => {
  const classes = useStyles();

  return (
    <Box>
      <Card className={classes.cardStyled}>
        <CardContent>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography className={classes.boldText}>Day {day}</Typography>
            <Box className={classes.avatarWrapper}>
              <Typography className={classes.boldText}>
                {dayObj?.day?.avgtemp_c} &deg; C
              </Typography>
              <Avatar src={dayObj?.day?.condition?.icon} />
            </Box>
          </Stack>
          <List>
            <ListItem className={classes.smallText}>
              {dayObj?.day?.condition?.text}
            </ListItem>
            <ListItem className={classes.smallText}>
              {`Sun Rise: ${dayObj?.astro?.sunrise}`}
            </ListItem>
            <ListItem className={classes.smallText}>
              {`Sun Set: ${dayObj?.astro?.sunset}`}
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
export default WeatherCard;
