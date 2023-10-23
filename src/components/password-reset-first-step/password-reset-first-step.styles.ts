import theme from "@/ui-library/theme";

export const setColor = (condition: boolean) =>
  condition
    ? { color: theme.customColors.neutral.neutral20 }
    : { color: theme.customColors.neutral.neutral80, opacity: 0.38 };
