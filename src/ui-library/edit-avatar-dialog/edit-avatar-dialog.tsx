import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { FC, useRef, useState } from "react";
import { SelectChangeEvent } from "@mui/material";

import { EditAvatarDialogProps } from "./edit-avatar-dialog.types";
import { Box, Typography } from "@mui/material";
import { buttonsContainer, dialog, rotateContainer, sliderContainer } from "./edit-avatar-dialog.styles";

import { PhotoDropZone } from "../photo-drop-zone";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AvatarEditor from "react-avatar-editor";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "../button";
import theme from "../theme";
import Slider from "../slider/slider";
import { InlineDropdown } from "../inline-dropdown";

export const EditAvatarDialog: FC<EditAvatarDialogProps> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [editorRef, setEditorRef] = useState<AvatarEditor | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleCancel = () => {
    setSelectedFile(null);
    setOpen(false);
  };
  //TODO: add formik when backend will be ready
  const options = [
    { label: "Everyone can see", value: "everyone can see" },
    { label: "Contacts can see", value: "contacts can see" },
  ];
  const [selectedOption, setSelectedOption] = useState({
    label: "Everyone can see",
    value: "everyone can see",
  });
  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find((option) => option.value === selectedValue);
    setSelectedOption((prev) => selectedOption || prev);
  };

  const handleSave = () => {
    if (editorRef) {
      const canvas = editorRef.getImageScaledToCanvas();
      //TODO: use data url in upload photo request
      const dataUrl = canvas.toDataURL();
    }

    setSelectedFile(null);
    setOpen(false);
  };

  const handleChooseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='edit-avatar-dialog-title'
      aria-describedby='edit-avatar-dialog-description'
      PaperProps={{ sx: dialog }}
    >
      <Typography variant='h3'>Edit Photo</Typography>
      {selectedFile ? (
        <>
          <AvatarEditor
            ref={(ref) => setEditorRef(ref)}
            image={URL.createObjectURL(selectedFile)}
            width={224}
            height={224}
            border={50}
            color={[0, 0, 0, 0.5]}
            scale={scale}
            rotate={rotation}
            borderRadius={500}
            crossOrigin='anonymous'
            style={{ alignSelf: "center" }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button variant='text' sx={{ padding: "0 !important" }} onClick={handleChooseFile}>
              <Typography
                variant='h6'
                sx={{
                  color: theme.palette.primary.main,
                  textTransform: "capitalize",
                }}
              >
                Change photo
              </Typography>
              <input
                type='file'
                accept='image/*'
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileInputChange}
              />
            </Button>
            <InlineDropdown
              id='example-select'
              name='example-select'
              options={options}
              value={selectedOption.value}
              label={selectedOption.label}
              handleChange={handleChange}
              onBlur={() => null as any}
              icon={
                <VisibilityOutlinedIcon
                  sx={{
                    color: theme.palette.primary.light,
                  }}
                />
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant='h6' sx={{ marginBottom: "24px" }}>
                Size
              </Typography>
              <Box sx={sliderContainer}>
                <RemoveIcon sx={{ color: theme.palette.secondary.main }} />
                <Box sx={{ width: "100%", minWidth: "100px" }}>
                  <Slider
                    value={scale}
                    hideMarks
                    marks={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]}
                    min={0.1}
                    max={5}
                    step={0.1}
                    variant='light'
                    handleChange={(e, value) => {
                      setScale(Number(value));
                    }}
                    name='catalogInfo.exclusiveContentPercentage'
                    id='catalogInfo.exclusiveContentPercentage'
                  />
                </Box>
                <AddIcon sx={{ color: theme.palette.secondary.main }} />
              </Box>
            </Box>
            <Box>
              <Box sx={rotateContainer}>
                <Typography variant='h6'>Rotate</Typography>
                <Box sx={{ display: "flex" }}>
                  <RotateLeftIcon
                    sx={{
                      marginRight: "24px",
                      color: theme.palette.secondary.main,
                    }}
                  />
                  <RotateRightIcon sx={{ color: theme.palette.secondary.main }} />
                </Box>
              </Box>
              <Box sx={sliderContainer}>
                <RemoveIcon sx={{ color: theme.palette.secondary.main }} />
                <Box sx={{ width: "100%", minWidth: "100px" }}>
                  <Slider
                    value={rotation}
                    track={false}
                    hideMarks
                    marks={[{ value: -180 }, { value: -90 }, { value: 0 }, { value: 90 }, { value: 180 }]}
                    min={-180}
                    max={180}
                    step={1}
                    handleChange={(e, value) => {
                      setRotation(Number(value));
                    }}
                    variant='light'
                    name='catalogInfo.exclusiveContentPercentage'
                    id='catalogInfo.exclusiveContentPercentage'
                  />
                </Box>
                <AddIcon sx={{ color: theme.palette.secondary.main }} />
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <PhotoDropZone onDrop={setSelectedFile} />
      )}
      <Box sx={buttonsContainer}>
        <Button variant='outlined' onClick={handleCancel} color='primary'>
          <Typography variant='h6' sx={{ color: theme.palette.primary.main }}>
            Cancel
          </Typography>
        </Button>
        <Button variant='contained' fullWidth onClick={handleSave}>
          <Typography variant='h6' sx={{ color: theme.customColors.neutral.neutral20 }}>
            Save changes
          </Typography>
        </Button>
      </Box>
    </Dialog>
  );
};
