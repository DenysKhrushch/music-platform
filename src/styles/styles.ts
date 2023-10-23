import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const layoutWrapper: SxProps = {
  height: "100vh !important",
  background: theme.palette.primary.dark,
  display: "flex",
  alignItems: "space-between",
  justifyContent: "spac",
  flexDirection: "column",
};

export const styledSignWrapper: SxProps = {
  display: "flex",
  width: "100%",
  height: "100%",
  paddingTop: "81px",
  justifyContent: "space-between",
};

export const styledSignFormWrapper: SxProps = {
  display: "flex",
  paddingTop: "32px",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
};

// export const StyledSignWrapper = styled(Box)`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   justify-content: space-between;
// `;
// export const StyledSignPage = styled(Box)`
//   height: 100vh !important;
//   background: ${theme.palette.primary.dark};
//   display: flex;
//   align-items: space-between;
//   justify-content: space-around;
//   flex-direction: column;
// `;
// export const StyledSignFormWrapper = styled(Box)`
//   display: flex;
//   padding-top: 32px;
//   width: 100%;
//   flex-direction: column;
//   align-items: center;
// `;
// export const Title = styled(Typography)`
//   width: 384px;
//   height: 32px;
//   margin-bottom: 8px;
// `;
//
// export const Description = styled(Typography)`
//   width: 384px;
//   height: 40px;
//   letter-spacing: 0.25px;
// `;
//
// export const Icon = styled(Box)`
//   margin-right: 24px;
//   margin-bottom: 64px;
//   padding: 25px;
//   background: rgba(255, 255, 255, 0.02);
//   border: 1px solid #72787e;
//   border-radius: 6px;
// `;

export const resetPasswordCurrentStep: SxProps = {
  color: "#fff",
  marginBottom: "8px",
  textAlign: "left",
  width: "100%",
};

export const pageContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

export const resetPasswordPage: SxProps = {
  flex: "1 1",
  background: theme.palette.primary.dark,
  display: "flex",
  alignItems: "space-between",
  justifyContent: "space-around",
  flexDirection: "column",
};

export const resetPasswordWrapper: SxProps = {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
};
export const resetPasswordFormWrapper = {
  display: "flex",
  paddingTop: "32px",
  marginTop: "80px",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
};
