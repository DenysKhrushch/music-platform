import React, { FC, useContext } from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/ui-library/theme";
import SubscriptionPlan from "@/ui-library/subscription-plan/subscription-plan";
import { ProfileContext } from "@/context";
import { Button } from "@/ui-library/button";
import { setColor } from "@/components/personal-details-tab/personal-details-tab.styles";
import { useFormik } from "formik";

const subscriptionPlanData = [
  {
    title: "Premium Individual",
    description:
      "Ad-free music listening, offline listening, and unlimited skips. No Team limitations and no per time loading limit",
    paymentInfo: { money: "$4.99", date: "6/14/23" },
    actionButtonChangePlanText: "Change plan",
    actionButtonChangeText: "Change",
    disabled: true,
  },
  {
    title: "Super Premium Catalogue",
    description:
      "Ad-free music listening, offline listening, and unlimited skips. No Team limitations and no per time loading limit",
    paymentInfo: { money: "$4.99", date: "6/14/23" },
    actionButtonChangePlanText: "Change plan",
    actionButtonChangeText: "Change",
    disabled: false,
  },
  {
    title: "Individual Catalogue",
    description:
      "Ad-free music listening, offline listening, and unlimited skips. No Team limitations and no per time loading limit",
    paymentInfo: { money: "$4.99", date: "6/14/23" },
    actionButtonChangeText: "Change",
    actionButtonChangePlanText: "Change plan",
    disabled: false,
  },
];
export const SubscriptionTab: FC = () => {
  const { setIsSubscriptionInfoDialogShowed, setIsDeclineDialogShowed } =
    useContext(ProfileContext);

  const updateSubscriptionPlan = (values: any) => {
    console.log("UpdateSubscriptionPlan", values);
  };

  const formik = useFormik({
    initialValues: {
      subscriptionPlan: "",
    },
    onSubmit: (values) => updateSubscriptionPlan(values),
  });

  return (
    <form>
      <Box sx={{ maxWidth: "650px", paddingLeft: "24px" }}>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.primary.main, fontSize: "22px" }}
        >
          Subscription Plan
        </Typography>
        {subscriptionPlanData.map((subscriptionData, index) => {
          return (
            <SubscriptionPlan
              key={index}
              title={subscriptionData.title}
              description={subscriptionData.description}
              paymentInfo={subscriptionData.paymentInfo}
              actionButtonChangeText={subscriptionData?.actionButtonChangeText}
              actionButtonChangePlanText={
                subscriptionData?.actionButtonChangePlanText
              }
              actionButtonChangePlanHandler={() =>
                setIsSubscriptionInfoDialogShowed(true)
              }
              disabled={subscriptionData?.disabled}
            />
          );
        })}
        <Box sx={{ display: "flex", gap: "10px", mt: 2 }}>
          <Button
            variant="outlined"
            onClick={() => {
              setIsDeclineDialogShowed(true);
            }}
          >
            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
              Cancel
            </Typography>
          </Button>
          <Box>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={!(formik?.isValid && formik.dirty)}
            >
              <Typography
                variant="h6"
                sx={setColor(formik?.isValid && formik.dirty)}
              >
                Save changes
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
export default SubscriptionTab;
