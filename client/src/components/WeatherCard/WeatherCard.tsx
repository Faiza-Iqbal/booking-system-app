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
import { useStyles } from "./WeatherCardStyled.style";

type WeatherCardProps = {
  dayObj: {
    hour: {
      time_epoch: number;
      wind_kph: number;
      humidity: number;
      temp_c: number;
      temp_f: number;
    }[];
    date: string;
    day: {
      condition: {
        icon: string;
        text: string;
      };
      avgtemp_c: number;
    };
    astro: {
      sunrise: string;
      sunset: string;
    };
  };
};

const WeatherCard = ({ dayObj }: WeatherCardProps) => {
  const classes = useStyles();

  return (
    <Box>
      <Card className={classes.cardStyled}>
        <CardContent>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography className={classes.boldText}>Day 1</Typography>
            <Typography className={classes.boldText}>
              {dayObj?.day?.avgtemp_c} &deg; C
              <Avatar src={dayObj?.day?.condition?.icon} />
            </Typography>
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
