import { Box, Link, Typography } from "@mui/material";
import { SubscriptionPlanProps } from "./subscription-plan.types";
import { FC, useContext } from "react";
import {
  StyledLinkLearnAboutPlan,
  StyledSubscriptionFirstLine,
  StyledSubscriptionPlanTitle,
  StyledSubscriptionPlanWrapper,
  viewDetailsButton,
} from "./subscription-plan.styles";
import React from "react";
import { Button } from "../button";
import theme from "../theme";
import { RainbowCircleIcon } from "@/ui-icons";
import { ProfileContext } from "@/context";
import { useRouter } from "next/router";

export const SubscriptionPlan: FC<SubscriptionPlanProps> = ({
  title,
  description,
  paymentInfo,
  actionButtonChangePlanText,
  actionButtonChangePlanHandler,
  actionButtonChangeText,
  actionButtonChangeHandler,
  disabled,
}) => {
  const { isPlanChanging } = useContext(ProfileContext);
  const router = useRouter();

  // TODO: add role to user on the backend side
  const { role } = router.query;

  return (
    <Box sx={StyledSubscriptionPlanWrapper}>
      <Box sx={StyledSubscriptionFirstLine}>
        <Typography sx={StyledSubscriptionPlanTitle}>
          <RainbowCircleIcon
            style={{ borderRadius: "50%", marginRight: "8px" }}
          />
          {title}
        </Typography>
        {!isPlanChanging && role !== "catalog-owner" && (
          <Button sx={viewDetailsButton} onClick={actionButtonChangeHandler}>
            {actionButtonChangeText}
          </Button>
        )}
        {(isPlanChanging || role === "catalog-owner") && (
          <Button
            variant="contained"
            disabled={disabled}
            onClick={actionButtonChangePlanHandler}
          >
            <Typography
              variant="h6"
              sx={
                disabled
                  ? {
                      color: theme.customColors.neutral.neutral80,
                      opacity: 0.38,
                    }
                  : { color: theme.customColors.neutral.neutral20 }
              }
            >
              {actionButtonChangePlanText}
            </Typography>
          </Button>
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="body1" sx={{ marginBottom: "12px" }}>
            {description}
          </Typography>
          <Link href="/sign-in" sx={StyledLinkLearnAboutPlan}>
            Learn more about your plan
          </Link>
        </Box>

        <Box sx={{ width: "70%", paddingLeft: "65px" }}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.main,
              fontSize: "16px",
              mb: 1.5,
            }}
          >
            Payment
          </Typography>
          <Typography>
            Your next bill: <br />
            for{" "}
            <Box component="span" fontWeight="bold">
              {paymentInfo.money}
            </Box>{" "}
            on{" "}
            <Box component="span" fontWeight="bold">
              {paymentInfo.date}
            </Box>
            .
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SubscriptionPlan;
