import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

export interface OnboardingFormStepProps {
  stepProps: {
    component: EmotionJSX.Element;
    step: number;
    maxSteps: number;
    progressValue: number;
    title: string;
    subtitle: string;
    onNextStep: () => void;
    onPreviousStep: () => void;
    onSkip: () => void;
    nextStepButtonText: string;
    validationBlock: string;
  };
}
