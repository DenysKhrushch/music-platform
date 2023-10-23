import React, { FC } from "react";
import { BadgesProps } from "./badges.types";
import { Box } from "@mui/material";
import { badgeItem } from "./badges.styles";

export const Badges: FC<BadgesProps> = ({ badges }) => {
  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      {badges.map((badge, index) => (
        <Box key={index} sx={badgeItem}>
          {badge}
        </Box>
      ))}
    </Box>
  );
};

export default Badges;
