export type weatherType = {
  current: {
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    last_updated: string;
    precip_in: number;
    temp_c: number;
    temp_f: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: {
      hour: {
        time_epoch: number;
        wind_kph: number;
        humidity: number;
        temp_c: number;
        temp_f: number;
      }[];
      date: string;
      day: {
        condition: { icon: string; text: string };
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
    }[];
  };
  location: { name: string };
};
