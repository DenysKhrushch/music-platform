import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@/ui-library/button";
import theme from "@/ui-library/theme";
import { Switch } from "@/ui-library/switch";
import { SpotifyIcon } from "@/ui-icons";
import ConnectService from "@/ui-library/connect-service/connect-service";
import { socialMedia } from "../personal-info-music-producer-form/personal-info-music-producer-form.constants";
import { ProfileContext } from "@/context";
import { ProfileInfoForm } from "@/components/profile-info-form/profile-info-form";

export const ArtistPersonalDetailsTabForm = () => {
  const [spotifyChecked, setSpotifyChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const { isPrivate, setIsPrivate } = useContext(ProfileContext);

  const handleSpotifyChange = () => {
    setSpotifyChecked(!spotifyChecked);
  };

  const handlePrivacyChange = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <ProfileInfoForm isEditMode={isEditMode} setIsEditMode={setIsEditMode}>
      {isEditMode ? (
        <Grid item container spacing={3} alignItems="center" mb={4}>
          <Grid item xs={6}>
            <Typography variant="body1">Your social media activity:</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            justifyContent="flex-end"
            sx={{ textAlign: "right" }}
          >
            <Button
              variant="text"
              startIcon={<AddIcon sx={{ color: theme.palette.primary.main }} />}
            >
              <Typography sx={{ color: theme.palette.primary.main }}>
                Add more
              </Typography>
            </Button>
          </Grid>

          {socialMedia.map((media, ind) => (
            <Grid item key={ind} xs={12}>
              <Box key={ind}>
                <ConnectService
                  isConnected={media.isConnected}
                  serviceIcon={media.icon}
                  serviceName={media.name}
                  handleConnect={() => null}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid item container spacing={3} mb={4}>
          <Grid item xs={12}>
            <Typography variant="body1">Your social media activity:</Typography>
          </Grid>
          <Grid item xs={12}>
            <Switch
              checked={spotifyChecked}
              onChange={handleSpotifyChange}
              icon={
                <Box sx={spotifyChecked ? null : { opacity: 0.6 }}>
                  <SpotifyIcon />
                </Box>
              }
              label="Spotify"
            />
          </Grid>
          <Grid item xs={12}>
            <Switch
              icon={<></>}
              label="Private"
              subLabel="By making this track public you agree to the terms of service."
              checked={isPrivate}
              onChange={handlePrivacyChange}
            />
          </Grid>
        </Grid>
      )}
    </ProfileInfoForm>
  );
};

export default ArtistPersonalDetailsTabForm;
