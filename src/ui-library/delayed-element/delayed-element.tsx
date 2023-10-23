import React, { FC, ReactNode, useEffect, useState } from "react";
import { setDelay } from "./delayed-element.styles";
import { Box } from "@mui/material";

interface DelayedElementProps {
  delay?: number;
  animation: boolean;
  children: ReactNode[];
}
export const DelayedElement: FC<DelayedElementProps> = ({
  delay,
  animation,
  children,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return <Box sx={setDelay(show, animation)}>{children}</Box>;
};

export default DelayedElement;
