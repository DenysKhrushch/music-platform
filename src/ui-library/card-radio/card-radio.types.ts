export interface CardRadioProps {
  label: string;
  value: string | boolean;
  outlined?: boolean;
  subText?: string;
  icon?: JSX.Element;
  radioPosition?: "left" | "right";
}
