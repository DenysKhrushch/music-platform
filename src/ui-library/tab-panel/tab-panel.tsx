import React, { FC, ReactNode } from "react";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export const TabPanel: FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{ padding: "24px 0px 0px" }}
    >
      {value === index && children}
    </Box>
  );
};

export default TabPanel;
