export interface AddCardProps {
  label: string;
  value: string | boolean;
  subText?: string;
  clickHandler: () => void;
  icon?: JSX.Element;
}
