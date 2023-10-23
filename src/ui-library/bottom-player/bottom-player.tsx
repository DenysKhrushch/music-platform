import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import theme from "../theme";
import { timeToMinutesSeconds } from "./bottom-player.utils";
import PlayerContext from "@/context/PlayerContext";
import { playerContainer } from "./bottom-player.styles";

export const BottomPlayer: FC = () => {
  const {
    isMuted,
    toggleMute,
    isPlaying,
    setIsPlaying,
    nextTrack,
    previousTrack,
    currentTrack,
  } = useContext(PlayerContext);

  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const [wavesurferObj, setWavesurferObj] = useState<WaveSurfer | null>(null);

  const [duration, setDuration] = useState<number | string>("00:00");
  const [currentTime, setCurrentTime] = useState("00:00");

  useEffect(() => {
    const initWavesurfer = async () => {
      const WaveSurfer = (await import("wavesurfer.js")).default;
      if (containerRef.current && !wavesurferObj) {
        const wavesurfer = WaveSurfer.create({
          container: containerRef.current,
          waveColor: theme.palette.secondary.main,
          barGap: 2,
          barWidth: 3,
          barRadius: 3,
          height: 32,
          cursorWidth: 3,
          cursorColor: theme.palette.secondary.main,
          responsive: true,
          progressColor: theme.palette.primary.main,
        });

        wavesurfer.on("ready", () => {
          setDuration(
            timeToMinutesSeconds(Math.floor(wavesurfer.getDuration()))
          );
        });

        setWavesurferObj(wavesurfer);
      }
    };

    initWavesurfer();
  }, []);

  useEffect(() => {
    if (wavesurferObj) {
      if (isMuted) {
        wavesurferObj.setVolume(0);
      } else {
        wavesurferObj.setVolume(1);
      }
    }
  }, [isMuted]);

  useEffect(() => {
    if (wavesurferObj) {
      const waves = document.querySelectorAll("wave");
      if (waves.length > 1) {
        waves[0].remove();
      }
    }
  }, [wavesurferObj]);

  useEffect(() => {
    if (currentTrack && wavesurferObj) {
      wavesurferObj.load(currentTrack.url);
    }
  }, [currentTrack, wavesurferObj]);

  useEffect(() => {
    if (wavesurferObj)
      if (isPlaying) {
        wavesurferObj.play();
      } else {
        wavesurferObj.pause();
      }
  }, [isPlaying]);

  useEffect(() => {
    if (wavesurferObj) {
      wavesurferObj.on("ready", () => {
        wavesurferObj.enableDragSelection({});
      });

      wavesurferObj.on("play", () => {
        setIsPlaying(true);
      });

      wavesurferObj.on("audioprocess", () => {
        setCurrentTime(
          timeToMinutesSeconds(Math.floor(wavesurferObj.getCurrentTime()))
        );
      });

      wavesurferObj.on("finish", () => {
        nextTrack();
      });

      wavesurferObj.on("region-updated", (region) => {
        const regions = region.wavesurfer.regions.list;
        const keys = Object.keys(regions);
        if (keys.length > 1) {
          regions[keys[0]].remove();
        }
      });
    }
  }, [wavesurferObj]);

  return (
    <Box sx={playerContainer}>
      <Box
        id="player-controls-info-container"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box id="track-info" sx={{ display: "flex", alignItems: "center" }}>
          <Image
            alt="track-cover"
            src={currentTrack.imgUrl}
            width={40}
            height={40}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginLeft: "16px",
            }}
          >
            <Typography variant="h6">{currentTrack.name}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {currentTrack.author}
            </Typography>
          </Box>
          <IconButton>
            <FavoriteBorderIcon
              sx={{
                color: theme.palette.secondary.main,
                width: "24px",
                height: "24px",
                marginLeft: "16px",
              }}
            />
          </IconButton>
        </Box>
        <Box
          id="track-controls"
          sx={{ display: "flex", alignItems: "center", gap: "24px" }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {currentTime}
          </Typography>
          <Box
            id="track-action-buttons"
            sx={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <IconButton onClick={() => previousTrack()}>
              <SkipPreviousIcon
                sx={{
                  color: theme.palette.primary.light,
                  width: "24px",
                  height: "24px",
                }}
              />
            </IconButton>
            <IconButton onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <PauseCircleIcon
                  sx={{
                    color: theme.palette.primary.light,
                    width: "40px",
                    height: "40px",
                  }}
                />
              ) : (
                <PlayCircleIcon
                  sx={{
                    color: theme.palette.primary.light,
                    width: "40px",
                    height: "40px",
                  }}
                />
              )}
            </IconButton>
            <IconButton onClick={() => nextTrack()}>
              <SkipNextIcon
                sx={{
                  color: theme.palette.primary.light,
                  width: "24px",
                  height: "24px",
                }}
              />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {duration}
          </Typography>
          <IconButton onClick={() => toggleMute()}>
            {isMuted ? (
              <VolumeOffIcon
                sx={{
                  color: theme.palette.secondary.main,
                  width: "24px",
                  height: "24px",
                }}
              />
            ) : (
              <VolumeUpIcon
                sx={{
                  color: theme.palette.secondary.main,
                  width: "24px",
                  height: "24px",
                }}
              />
            )}
          </IconButton>
        </Box>
        <Box
          id="track-secondary-actions-container"
          sx={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <IconButton>
            <EditIcon
              sx={{
                color: theme.palette.secondary.main,
                width: "24px",
                height: "24px",
              }}
            />
          </IconButton>
          <IconButton>
            <ShareIcon
              sx={{
                color: theme.palette.secondary.main,
                width: "24px",
                height: "24px",
              }}
            />
          </IconButton>
          <IconButton>
            <FileDownloadOutlinedIcon
              sx={{
                color: theme.palette.secondary.main,
                width: "24px",
                height: "24px",
              }}
            />
          </IconButton>
          <IconButton>
            <AddIcon
              sx={{
                color: theme.palette.secondary.main,
                width: "24px",
                height: "24px",
              }}
            />
          </IconButton>
          <IconButton>
            <ShoppingBasketOutlinedIcon
              sx={{
                color: theme.palette.secondary.main,
                width: "24px",
                height: "24px",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box id="player-progress" sx={{ marginTop: "26px" }}>
        <Box ref={containerRef} />
        <Box ref={timelineRef} />
      </Box>
    </Box>
  );
};

export default BottomPlayer;
