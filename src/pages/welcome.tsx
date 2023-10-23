import React, { FC, useEffect } from "react";

import { Box } from "@mui/material";
import { Formik, useFormik } from "formik";
// import { layoutWrapper } from "@/styles/globals";
import { WelcomeContent } from "../components/welcome-content";
import { WelcomeFormValues } from "@/components/welcome-form/welcome-form.types";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

const WelcomePage: FC = () => {
  const initialValues: WelcomeFormValues = {
    role: "sync-buyer",
  };

  const { getUser } = useAuth();
  const router = useRouter();

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

  const formik = useFormik({
    initialValues,
    validate: (values) => {
      const errors: any = {};

      if (!values.role) {
        errors.role = "Required field";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit as any}
      >
        <WelcomeContent />
      </Formik>
    </Box>
  );
};

export default WelcomePage;
