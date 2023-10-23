import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const profileIconSx: SxProps = {
  color: "#C6C6C9",
  width: "144px",
  height: "144px",
  padding: 0,
};

export const profileHeaderWrapperSx: SxProps = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "24px",
};
export const profileHeaderContainerSx: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "14px",
};
export const assistiveChipSx: SxProps = {
  padding: "6px 16px 6px 6px",
  display: "flex",
  justifyContent: "flex-start",
  gap: "8px",
  alignItems: "center",
  border: `1px solid ${theme.customColors.dark.outlined}`,
  borderRadius: "8px",
};

export const avatarHoverIcon: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const avatar: SxProps = {
  width: "100%",
  height: "100%",
  transition: "filter 0.3s ease",
  "&:hover": {
    filter: "brightness(50%)",
    cursor: "pointer",
  },
};
