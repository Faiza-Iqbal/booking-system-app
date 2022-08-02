import { useEffect } from "react";

export const useOutsideClickAlerter = (
  ref: any,
  setRangePicker: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        setRangePicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setRangePicker]);
};
