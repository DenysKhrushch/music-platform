import React, { FC } from "react";
import { Select, MenuItem, ListItemIcon, Typography, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { InlineDropdownTypes } from "./inline-dropdown.types";
import theme from "../theme";
import { dropdown, menu } from "./inline-dropdown.styles";
export const InlineDropdown: FC<InlineDropdownTypes> = (props) => {
  const {
    id,
    name,
    options,
    handleChange,
    value,
    label,
    onBlur,
    icon,
    dangerOption,
    ...rest
  } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {icon}
      <Select
        id={id}
        name={name}
        value={value}
        label={label}
        onBlur={onBlur}
        sx={dropdown}
        MenuProps={{
          sx: menu,
        }}
        onChange={handleChange as any}
        renderValue={() => <Typography variant="h6">{label}</Typography>}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={
              dangerOption && dangerOption.value === option.value
                ? { color: theme.palette.error.dark }
                : null
            }
          >
            {option.label}
            {value === option.value && (
              <ListItemIcon>
                <CheckIcon
                  fontSize="small"
                  sx={{
                    color: theme.palette.secondary.main,
                    marginLeft: "15.5px",
                  }}
                />
              </ListItemIcon>
            )}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
export default InlineDropdown;
