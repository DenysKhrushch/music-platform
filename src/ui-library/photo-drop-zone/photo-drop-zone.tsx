import React from "react";
import { Box, Typography } from "@mui/material";

import { useDropzone, DropzoneOptions } from "react-dropzone";
import { PhotoDropZoneProps } from "./photo-drop-zone.types";
import { container } from "./photo-drop-zone.styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import theme from "../theme";

export const PhotoDropZone: React.FC<PhotoDropZoneProps> = ({ onDrop }) => {
  const dropzoneOptions: DropzoneOptions = {
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: false,
    onDrop: (acceptedFiles: File[]) => {
      onDrop(acceptedFiles[0]);
    },
  };

  const { getRootProps, getInputProps } = useDropzone(dropzoneOptions);

  return (
    <Box {...getRootProps()} sx={container}>
      <input {...getInputProps()} />
      <AddCircleOutlineIcon
        sx={{
          color: theme.palette.primary.light,
          width: "40px",
          height: "40px",
        }}
      />
      <Typography
        variant="h4"
        sx={{ color: theme.palette.secondary.main, textAlign: "center" }}
      >
        Drop any image (JPEG, PNG, GIF)
        <br /> or browse your files
      </Typography>
    </Box>
  );
};
