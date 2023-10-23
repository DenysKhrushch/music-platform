import React, { FC, useContext, useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  RadioGroup,
  Typography,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CreditCardForm from "../credit-card-form/credit-card-form";
import theme from "@/ui-library/theme";
import { RadioOption } from "./payment-details-tab.types";
import { dividerSx } from "./payment-details-tab.styles";
import CardRadio from "@/ui-library/card-radio/card-radio";
import AddCard from "@/ui-library/add-card/add-card";
import SubscriptionPlan from "@/ui-library/subscription-plan/subscription-plan";
import { ProfileContext } from "@/context";

const options = [
  {
    label: "**** **** **** 3314 | 09/26",
    value: "**** **** **** 3314 | 09/26",
  },
  {
    label: "**** **** **** 3311 | 01/25",
    value: "**** **** **** 3311 | 01/25",
  },
];
const emptyCard = {
  label: "**** **** **** 0000 | MM/YY",
  value: "**** **** **** 0000 | MM/YY",
};

const subscriptionPlanData = {
  title: "Premium Individual",
  description:
    "Ad-free music listening, offline listening,  and unlimited skips.",
  paymentInfo: { money: "$4.99", date: "6/14/23" },
  actionButtonChangePlanText: "Change plan",
  actionButtonChangeText: "Change",
  disabled: true,
};

export const PaymentDetailsTab: FC = () => {
  const [isEditCard, setIsEditCard] = useState(false);
  const { setIsSubscriptionInfoDialogShowed, setIsPlanChanging } =
    useContext(ProfileContext);

  return (
    <Box sx={{ maxWidth: "650px", paddingLeft: "24px" }}>
      {!isEditCard ? (
        <>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.primary.main, fontSize: "22px" }}
          >
            Saved payment cards
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "12px" }}>
            Manage your payment details
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.main,
              fontSize: "16px",
              marginTop: "16px",
            }}
          >
            Me cards
          </Typography>
          <FormControl fullWidth>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              sx={{ marginBottom: "8px" }}
            >
              {options.map((option: RadioOption, index) => (
                <>
                  <CardRadio
                    subText={option.subText}
                    key={index}
                    label={option.label}
                    radioPosition={"right"}
                    value={option.value}
                    icon={
                      <CreditCardIcon
                        sx={{
                          color: theme.palette.primary.light,
                          marginRight: "24px",
                        }}
                      />
                    }
                  ></CardRadio>
                  <Divider sx={dividerSx} />
                </>
              ))}
              <AddCard
                label={emptyCard.label}
                clickHandler={() => setIsEditCard(true)}
                value={emptyCard.value}
                icon={
                  <CreditCardIcon
                    sx={{
                      color: theme.palette.primary.light,
                      marginRight: "24px",
                    }}
                  />
                }
              ></AddCard>
            </RadioGroup>
          </FormControl>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.primary.main, fontSize: "22px" }}
          >
            Subscription plan
          </Typography>
          <SubscriptionPlan
            title={subscriptionPlanData.title}
            description={subscriptionPlanData.description}
            paymentInfo={subscriptionPlanData.paymentInfo}
            actionButtonChangeText={
              subscriptionPlanData?.actionButtonChangeText
            }
            actionButtonChangeHandler={() => setIsPlanChanging(true)}
            actionButtonChangePlanText={
              subscriptionPlanData?.actionButtonChangePlanText
            }
            actionButtonChangePlanHandler={() =>
              setIsSubscriptionInfoDialogShowed(true)
            }
            disabled={subscriptionPlanData?.disabled}
          />
        </>
      ) : (
        <CreditCardForm
          label={"Add card"}
          handleCancelClick={() => setIsEditCard(false)}
          handleAddCard={() => setIsEditCard(false)}
        />
      )}
    </Box>
  );
};
export default PaymentDetailsTab;
