import { Box, Grid, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import React, { FC, useRef } from "react";
import { CreditCardFormProps, CreditCardFormValues } from "./credit-card-form.types";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useFormik } from "formik";
import { initialValues, validate } from "./credit-card-form.utils";
import { ApplePayIcon, GooglePayIcon, MastercardIcon, VisaIcon } from "@/ui-icons";
import theme from "@/ui-library/theme";
import { Input } from "@/ui-library/input";
import Checkbox from "@/ui-library/checkbox/checkbox";
import { Button } from "@/ui-library/button";

export const CreditCardForm: FC<CreditCardFormProps> = ({ label, cardDetails, handleCancelClick, handleAddCard }) => {
  const ccRef = useRef<HTMLInputElement>(null);
  const formik = useFormik<CreditCardFormValues>({
    initialValues: cardDetails ? cardDetails : initialValues,
    validate,
    onSubmit: (values) => {
      console.log("formik.values", values);
      handleAddCard();
    },
  });

  return (
    <Box>
<Typography
        variant="h5"
        sx={{ marginBottom: "16px", color: theme.palette.primary.main }}
      >
        {label}
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: "24px" }}>
        <Grid item xs={3}>
          <VisaIcon />
        </Grid>
        <Grid item xs={3}>
          <MastercardIcon />
        </Grid>
        <Grid item xs={3}>
          <ApplePayIcon />
        </Grid>
        <Grid item xs={3}>
          <GooglePayIcon />
        </Grid>
      </Grid>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input
              id="cardNumber"
              name="cardNumber"
              type="tel"
              mask="0000 0000 0000 0000"
              onBlur={formik.handleBlur}
              value={formik.values.cardNumber}
              error={!!formik.errors.cardNumber && formik.touched.cardNumber}
              onChange={formik.handleChange}
              startIcon={
                <CreditCardIcon
                  sx={{ color: theme.customColors.neutral.neutral80 }}
                />
              }
              label="Card number"
              ref={ccRef}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              id="expiryDate"
              name="expiryDate"
              type="tel"
              mask="00/00"
              onBlur={formik.handleBlur}
              value={formik.values.expiryDate}
              error={!!formik.errors.expiryDate && formik.touched.expiryDate}
              onChange={formik.handleChange}
              label="Expiry date"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              id="securityCode"
              name="securityCode"
              type="tel"
              onBlur={formik.handleBlur}
              value={formik.values.securityCode}
              onChange={formik.handleChange}
              error={
                !!formik.errors.securityCode && formik.touched.securityCode
              }
              label="Security code"
              endIcon={
                <HelpOutlineIcon
                  sx={{ color: theme.customColors.neutral.neutral80 }}
                />
              }
              tooltip="Enter the 3-digit CVV code on the back of your card for verification"
              mask="000"
            />
          </Grid>
          <Grid item xs={12}>
            <Checkbox
              variant="text"
              name="saveCard"
              id="saveCard"
              onChange={formik.handleChange}
              value={formik.values.saveCard}
              label="Save card for future purchases and subscriptions. This won't affect how you pay for existing subscriptions and can be managed anytime in your Payment details page."
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Box sx={{ marginRight: "12px" }}>
              <Button variant="outlined" onClick={handleCancelClick}>
                <Typography sx={{ color: theme.palette.primary.main }}>Cancel</Typography>
              </Button>
            </Box>
            <Button variant="contained" disabled={!(formik.isValid && formik.dirty)} onClick={handleAddCard}>
              <Typography
                sx={
                  !(formik.isValid && formik.dirty)
                    ? { color: theme.customColors.neutral.neutral80 }
                    : { color: theme.customColors.neutral.neutral20 }
                }
              >
                Add Card
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreditCardForm;
