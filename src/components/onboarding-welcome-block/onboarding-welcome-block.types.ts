export interface OnboardingWelcomeBlockProps {
  onNextStep: () => void;
  onPrevStep: () => void;
  handleRoleSelection?: (
    role: "sync-buyer" | "individual-music-producer" | "catalog-owner"
  ) => void;
}
