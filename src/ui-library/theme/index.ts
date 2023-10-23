import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});
declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      dark: {
        surface: string;
        surfaceContainer: string;
        surfaceContainerLow: string;
        outlined: string;
        surfaceDarkContainer: string;
      };
      neutral: {
        neutral80: string;
        neutral20: string;
        neutral10: string;
      };
      blue: {
        main: string;
      };
      green: {
        main: string;
      };
      orange: {
        main: string;
      };
      primary: string;
      danger: string;
      default: string;
      light: {
        main: string;
      };
    };
  }
  interface ThemeOptions {
    customColors: {
      dark: {
        surface: string;
        surfaceContainer: string;
        surfaceContainerLow: string;
        outlined: string;
        surfaceDarkContainer: string;
      };
      neutral: {
        neutral80: string;
        neutral20: string;
        neutral10: string;
      };
      blue: {
        main: string;
      };
      green: {
        main: string;
      };
      orange: {
        main: string;
      };
      primary: string;
      danger: string;
      default: string;
      light: {
        main: string;
      };
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#8CCDFF",
      dark: "#111416",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#C1C7CE",
      light: "#E2E2E5",
    },
    error: {
      main: "#FFB4AB",
      dark: "#FF5449",
      light: "#FFDAD6",
    },
  },
  customColors: {
    dark: {
      surface: "#41474D",
      surfaceContainer: "#1E2022",
      surfaceContainerLow: "#1A1C1E",
      outlined: "#8B9198",
      surfaceDarkContainer: "#333537",
    },
    neutral: {
      neutral80: "#C6C6C9",
      neutral20: "#00344E",
      neutral10: "#101416",
    },
    blue: {
      main: "#3898D3",
    },
    green: {
      main: "#00BD84",
    },
    orange: {
      main: "#FFB259",
    },
    primary: "#CAE6FF",
    danger: "#FFDAD6",
    default: "#2E3133",
    light: {
      main: "#F0F0F3",
    },
  },
  typography: {
    allVariants: {
      fontFamily: roboto.style.fontFamily,
      color: "#FFFFFF",
    },
    h1: {
      fontSize: "45px",
      fontWeight: 400,
      lineHeight: "52px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "32px",
    },
    h4: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    h5: {
      fontSize: "22px",
      fontWeight: 400,
      lineHeight: "28px",
    },
    h6: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1440,
      xl: 1536,
    },
  },
});
export default theme;
