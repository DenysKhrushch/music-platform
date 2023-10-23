import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";
import { CSSObject, Theme } from "@mui/material/styles";

export const asideNavContainerSx: SxProps = {
  color: theme.customColors.neutral.neutral80,
  padding: 0,
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "space-between",
};

const openedMixin = (theme: Theme): CSSObject => ({
  width: 295,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const drawerSx = (
  theme: Theme,
  open: boolean
): SxProps<Theme> | undefined => ({
  width: 295,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ".MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.dark,
    marginTop: "80px",
    borderRight: `1px solid #41474D`,
    height: "calc(100vh - 80px)",
  },
  ...open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  },
  ...!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  },
});

export const listItemButtonSx = (open: boolean): SxProps => ({
  minHeight: 48,
  justifyContent: open ? "initial" : "center",
  py: 2,
  px: 3,
});

export const listItemIconSx = (open: boolean): SxProps => ({
  color: "inherit",
  minWidth: 0,
  mr: open ? 3 : "auto",
  justifyContent: "center",
});

export const listItemTextSx = (open: boolean): SxProps => ({
  margin: 0,
  opacity: open ? 1 : 0,
});
