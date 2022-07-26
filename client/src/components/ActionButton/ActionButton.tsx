import { Button } from "@mui/material";

type ActionButtonProps = {
  label?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const ActionButton = ({
  label,
  className,
  children,
  onClick,
}: ActionButtonProps) => {
  return (
    <Button className={className} onClick={onClick}>
      {label || children}
    </Button>
  );
};
export default ActionButton;
