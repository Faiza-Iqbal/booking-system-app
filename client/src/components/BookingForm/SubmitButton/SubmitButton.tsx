import { Button, CircularProgress } from "@mui/material";

import { useStyles } from "./SubmitButtonStyled.style";

type SubmitButtonProps = {
  label: string;
  loading: boolean;
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const classes = useStyles();

  return (
    <Button className={classes.buttonStyled} type="submit">
      {loading && <CircularProgress color="inherit" />}
      {label}
    </Button>
  );
};
export default SubmitButton;
