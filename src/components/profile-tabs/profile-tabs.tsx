import React, { SyntheticEvent, useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import NotificationSettingsTab from "../notification-settings-tab/notification-settings-tab";
import { tabsWrapperSx, tabSx } from "./profile-tabs.styles";
import { PersonalDetailsTab } from "../personal-details-tab";
import { ProfileContext } from "@/context";
import TabPanel from "@/ui-library/tab-panel/tab-panel";
import PaymentDetailsTab from "../payment-details-tab/payment-details-tab";
import SubscriptionTab from "../subscription-tab/subscription-tab";
import { ArtistPersonalDetailsTab } from "../artist-personal-details-tab";
import { TeamManagementTab } from "../team-management-tab";
import { OwnerPersonalDetailsTab } from "../owner-personal-details-tab";
import CatalogInformationTab from "@/components/catalog-information-tab/catalog-information-tab";
import { useRouter } from "next/router";

export const ProfileTabs = () => {
  const router = useRouter();

  // TODO: add role to user on the backend side
  const { role } = router.query;

  const {
    setIsPasswordChanging,
    isPasswordChanging,
    isDeclineConfirmed,
    setIsDeclineDialogShowed,
    setIsDeclineConfirmed,
    setAfterConfirmAction,
    profileTabValue,
    setProfileTabValue,
    isPlanChanging,
  } = useContext(ProfileContext);

  const tabProps = (index: number) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    if (isPasswordChanging && !isDeclineConfirmed) {
      setIsDeclineDialogShowed(true);
      setAfterConfirmAction(() => () => setProfileTabValue(newValue));
    } else {
      setProfileTabValue(newValue);
      setIsPasswordChanging(false);
      setIsDeclineConfirmed(false);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {(() => {
        switch (role) {
          case "sync-buyer":
            return (
              <>
                <Box sx={tabsWrapperSx}>
                  <Tabs value={profileTabValue} onChange={handleChange}>
                    <Tab sx={tabSx} label="Personal Details" {...tabProps(0)} />
                    <Tab sx={tabSx} label="Payment details" {...tabProps(1)} />
                    <Tab
                      sx={tabSx}
                      label="Notification Settings"
                      {...tabProps(2)}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={profileTabValue} index={0}>
                  <PersonalDetailsTab value={profileTabValue} />
                </TabPanel>
                <TabPanel value={profileTabValue} index={1}>
                  {isPlanChanging ? <SubscriptionTab /> : <PaymentDetailsTab />}
                </TabPanel>{" "}
                <TabPanel value={profileTabValue} index={2}>
                  <NotificationSettingsTab value={profileTabValue} />
                </TabPanel>
              </>
            );

          case "individual-music-producer":
            return (
              <>
                <Box sx={tabsWrapperSx}>
                  <Tabs value={profileTabValue} onChange={handleChange}>
                    <Tab sx={tabSx} label="Personal Details" {...tabProps(0)} />
                    <Tab
                      sx={tabSx}
                      label="Catalog Information"
                      {...tabProps(1)}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={profileTabValue} index={0}>
                  <ArtistPersonalDetailsTab />
                </TabPanel>
                <TabPanel value={profileTabValue} index={1}>
                  <CatalogInformationTab />
                </TabPanel>
              </>
            );
          case "catalog-owner":
            return (
              <>
                <Box sx={tabsWrapperSx}>
                  <Tabs value={profileTabValue} onChange={handleChange}>
                    <Tab sx={tabSx} label="Personal Details" {...tabProps(0)} />
                    <Tab sx={tabSx} label="Team" {...tabProps(1)} />
                    <Tab sx={tabSx} label="Subscription" {...tabProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={profileTabValue} index={0}>
                  <OwnerPersonalDetailsTab />
                </TabPanel>
                <TabPanel value={profileTabValue} index={1}>
                  <TeamManagementTab />
                </TabPanel>
                <TabPanel value={profileTabValue} index={2}>
                  <SubscriptionTab />
                </TabPanel>
              </>
            );
        }
      })()}
    </Box>
  );
};

export default ProfileTabs;
