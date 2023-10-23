import { Box, FormControl, FormHelperText, FormLabel } from "@mui/material";
import { AddCardProps } from "./add-card.types";
import { FC } from "react";
import { formSx, subTextSx } from "./add-card.styles";
import React from "react";
import { Button } from "../button";

export const AddCard: FC<AddCardProps> = ({ label, subText, icon, clickHandler }) => {
  return (
    <FormControl sx={subText ? { ...formSx, alignItems: "flex-start" } : { ...formSx, alignItems: "center" }}>
      <Box component='span' sx={subText ? { paddingTop: "6px" } : null}>
        {icon && icon}
        <FormLabel>{label}</FormLabel>
        {subText ? (
          <FormHelperText sx={subTextSx}>
            {subText.split("\n").map((line, index) => (
              <React.Fragment key={index}>{line}</React.Fragment>
            ))}
          </FormHelperText>
        ) : null}
      </Box>
      <Button variant='outlined' onClick={() => clickHandler()}>
        Add card
      </Button>
    </FormControl>
  );
};

export default AddCard;
