import theme from "../theme";

export const setIconStyles = (condition: boolean) =>
  condition
    ? { color: theme.customColors.green.main, marginRight: "9.67px" }
    : { color: theme.palette.secondary.main, marginRight: "9.67px" };
