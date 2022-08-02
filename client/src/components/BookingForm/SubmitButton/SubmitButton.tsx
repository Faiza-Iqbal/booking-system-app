// lib
import { Button } from "@mui/material";

// styles
import { useStyles } from "./style";

type SubmitButtonProps = {
  label: string;
};

const SubmitButton = ({ label }: SubmitButtonProps) => {
  const classes = useStyles();

  return (
    <Button className={classes.buttonStyled} type="submit">
      {label}
    </Button>
  );
};
export default SubmitButton;
