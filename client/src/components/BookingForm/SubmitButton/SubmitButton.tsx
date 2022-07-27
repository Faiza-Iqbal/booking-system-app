import { Button } from "@mui/material";

import { useStyles } from "./SubmitButtonStyled.style";

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
