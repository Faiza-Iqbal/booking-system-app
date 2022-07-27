// lib
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useStyles } from "./PriceStyled.style";
import { mobile, tablet } from "../../../styles/devices";

type PriceProp = {
  price: string;
  setPrice: (price: string) => void;
};

const Price = ({ price, setPrice }: PriceProp) => {
  const classes = useStyles();
  const isMobile = useMediaQuery(mobile);

  const handleChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value as string);
  };

  return (
    <Box
      className={
        isMobile
          ? classes.boxStyled
          : `${classes.boxStyled} ${classes.boxPositioned}`
      }
    >
      <AttachMoneyIcon />
      <Box className="fullWidth">
        <Typography>Price Range</Typography>
        <FormControl fullWidth>
          <Select value={price} onChange={handleChange}>
            <MenuItem value="50-199">$50-$200</MenuItem>
            <MenuItem value="200-399">$200-$400</MenuItem>
            <MenuItem value="400-499">$400-$500</MenuItem>
            <MenuItem value="500-699">$500-$700</MenuItem>
            <MenuItem value="700-999">$700-$1000</MenuItem>
            <MenuItem value="1000-max">$1000 Above</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
export default Price;
