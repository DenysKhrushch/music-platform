export interface SubscriptionPlanProps {
  title: string;
  description: string;
  paymentInfo: {
    date: string;
    money: string;
  };
  actionButtonChangePlanText?: string;
  actionButtonChangePlanHandler?: () => void;
  actionButtonChangeText?: string;
  actionButtonChangeHandler?: () => void;
  disabled?: boolean;
}
