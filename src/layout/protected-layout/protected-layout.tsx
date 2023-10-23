import React, {
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { useAuth } from "@/hooks/useAuth";
import { asideNavItems } from "@/constants/aside-nav-items";
import { layoutWrapperSx } from "../layout.styles";
import {
  asideNavContainerSx,
  drawerSx,
  listItemButtonSx,
  listItemIconSx,
  listItemTextSx,
} from "./protected-layout.styles";
import { ProfileContext } from "@/context";
import Header from "@/ui-library/header/header";
import { BottomPlayer } from "@/ui-library/bottom-player";
import PlayerContext from "@/context/PlayerContext";

interface ProtectedLayoutProps {
  children?: ReactNode;
}

const ProtectedLayout: FC<ProtectedLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const { signOut, getUser } = useAuth();
  const {
    isPasswordChanging,
    isDeclineConfirmed,
    setIsDeclineDialogShowed,
    setIsPasswordChanging,
    setAfterConfirmAction,
    setIsDeclineConfirmed,
  } = useContext(ProfileContext);
  const { isPlayerShowed } = useContext(PlayerContext);

  const [open, setOpen] = useState<boolean>(false);
  const { profileRole } = useContext(ProfileContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInf = await getUser();

        if (!userInf) {
          router.replace("/sign-in");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [open]);

  return (
    <Box>
      <Header authorized />
      <Box sx={layoutWrapperSx}>
        <MuiDrawer
          open={open}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          variant="permanent"
          sx={drawerSx(theme, open)}
        >
          <List sx={asideNavContainerSx}>
            <Box>
              {asideNavItems.map(({ title, icon, route }) => (
                <ListItem
                  key={title}
                  disablePadding
                  sx={{
                    borderLeft: pathname.includes(route)
                      ? `4px solid ${theme.palette.primary.main}`
                      : "none",
                  }}
                >
                  <ListItemButton
                    selected={pathname.includes(route)}
                    onClick={() => {
                      if (isPasswordChanging && !isDeclineConfirmed) {
                        setIsDeclineDialogShowed(true);
                        if (route === "/profile") {
                          setAfterConfirmAction(
                            () => () =>
                              router.push(`${route}?role=${profileRole}`)
                          );
                        } else {
                          setAfterConfirmAction(() => () => router.push(route));
                        }
                      } else {
                        if (route === "/profile") {
                          router.push(`${route}?role=${profileRole}`);
                        } else {
                          router.push(route);
                        }
                        setIsPasswordChanging(false);
                        setIsDeclineConfirmed(false);
                      }
                    }}
                    sx={listItemButtonSx(open)}
                  >
                    <ListItemIcon sx={listItemIconSx(open)}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={title} sx={listItemTextSx(open)} />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
            <ListItem key="logout" disablePadding>
              <ListItemButton
                sx={listItemButtonSx(open)}
                onClick={() => signOut()}
              >
                <ListItemIcon
                  sx={{
                    ...listItemIconSx(open),
                    color: theme.palette.error.light,
                  }}
                >
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Log out"
                  primaryTypographyProps={{
                    style: { color: theme.palette.error.light },
                  }}
                  sx={listItemTextSx(open)}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </MuiDrawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflowY: "scroll",
            maxHeight: "calc(100vh-81px)",
            paddingBottom: "24px",
          }}
        >
          {children}
        </Box>
      </Box>
      {isPlayerShowed ? <BottomPlayer /> : null}
    </Box>
  );
};

export default ProtectedLayout;
