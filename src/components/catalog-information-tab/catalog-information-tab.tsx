import React, { FC } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import theme from "@/ui-library/theme";
import {
  cell,
  listItem,
  percentageTitle,
} from "@/components/catalog-information-tab/catalog-information-tab.styles";
import Chip from "@/ui-library/chip/chip";

export const CatalogInformationTab: FC = () => {
  const artists = [
    {
      name: "Thomas Smith",
      role: "Producer",
      percentage: 75,
      isMainCollaborator: true,
      avatar: "/images/avatar.png",
    },
    {
      name: "Martin Kay",
      role: "Producer",
      percentage: 25,
      avatar: "/images/avatar-2.png",
    },
  ];

  return (
    <Box sx={{ maxWidth: "625px", paddingLeft: "24px" }}>
      <Typography
        variant="body1"
        sx={{ color: theme.palette.primary.main, fontSize: "22px", mb: 4 }}
      >
        Catalog information
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: "16px" }}>
        Your primary genres
      </Typography>
      <Box mb={4} ml={-0.5}>
        {[
          { label: "Other", value: "other" },
          { label: "Alternative", value: "alternative" },
          { label: "Dance (EDM)", value: "dance_edm" },
        ].map((genre) => (
          <Chip
            key={genre.value}
            selectedChips={[]}
            option={genre}
            value={genre.value}
          />
        ))}
      </Box>
      <Typography variant="h4">
        Collaborations of featured artists in your catalog
      </Typography>
      {artists.map((artist) => (
        <Box key={artist.name} sx={listItem}>
          <Box sx={{ ...cell, width: "260px" }}>
            <Avatar sx={{ mr: 2 }} alt={artist.name} src={artist.avatar} />
            <Box>
              <Typography variant="h6">{artist.name}</Typography>
              {artist.isMainCollaborator && (
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Main Collaborator
                </Typography>
              )}
            </Box>
          </Box>
          <Box sx={cell}>
            <Box>
              <Typography sx={percentageTitle}>
                Exclusivity percentage
              </Typography>
              <Typography variant="h6">{artist.percentage}%</Typography>
            </Box>
          </Box>
          <Box sx={cell}>
            <Typography variant="body2">{artist.role}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default CatalogInformationTab;
