import React, { FC, useState } from "react";
import { Box, Chip, InputAdornment, Typography } from "@mui/material";
import { InlineDropdown } from "../inline-dropdown";
import { Input } from "../input";
import { TeamSearchInputProps } from "./team-search-input.types";
import { chipsContainer, inputPropsStyle } from "./team-search-input.styles";
import theme from "../theme";
import { Button } from "../button";

export const TeamSearchInput: FC<TeamSearchInputProps> = ({
  selected,
  onSelectChange,
  setOpen,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [badges, setBadges] = useState<string[]>([]);

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: {
    key: string;
    preventDefault: () => void;
  }) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();

      const value = inputValue.trim();

      if (value) {
        setBadges((prevBadges) => [...prevBadges, value]);
        setInputValue("");
      }
    } else if (event.key === "Backspace" && inputValue === "") {
      setBadges((prevBadges) => prevBadges.slice(0, -1));
    }
  };

  const handleBadgeDelete = (badgeIndex: number) => {
    setBadges((prevBadges) =>
      prevBadges.filter((_, index) => index !== badgeIndex)
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Input
        label="Email, comma separated"
        value={inputValue}
        size="small"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box sx={chipsContainer}>
                {badges.map((badge, index) => (
                  <Chip
                    key={index}
                    label={badge}
                    size="small"
                    onDelete={() => handleBadgeDelete(index)}
                    sx={{
                      marginRight: "4px",
                      marginBottom: "2px",
                      backgroundColor: theme.palette.primary.main,
                    }}
                  />
                ))}
              </Box>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <InlineDropdown
                options={[
                  { label: "Can View", value: "can view" },
                  { label: "Can Edit", value: "can edit" },
                ]}
                value={selected.value}
                label={selected.label}
                icon={<></>}
                handleChange={onSelectChange}
              />
            </InputAdornment>
          ),
          style: inputPropsStyle,
        }}
      />
      <Box sx={{ marginLeft: "10px" }}>
        <Button
          disabled={!badges.length}
          variant="outlined"
          onClick={() => setOpen(true)}
        >
          <Typography
            variant="h6"
            sx={!badges.length ? null : { color: theme.palette.primary.main }}
          >
            Invite
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default TeamSearchInput;
