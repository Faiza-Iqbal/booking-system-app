import { Button } from "@mui/material";

import { useStyles } from "./SubmitButtonStyled.style";

type SubmitButtonProps = {
  label: string;
  onFormSubmit: (event: React.MouseEvent<HTMLElement>) => void;
};

const SubmitButton = ({ label, onFormSubmit }: SubmitButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.buttonStyled}
      type="submit"
      onClick={onFormSubmit}
    >
      {label}
    </Button>
  );
};
export default SubmitButton;
