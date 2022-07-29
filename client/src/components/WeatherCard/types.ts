export type WeatherCardProps = {
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
  day: number;
};
