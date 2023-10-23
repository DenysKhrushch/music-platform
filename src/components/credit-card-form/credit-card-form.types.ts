export interface CardDetails {
  cardNumber: string;
  expiryDate: string;
  securityCode: string;
  saveCard: boolean;
}

export interface CreditCardFormProps {
  label: string;
  cardDetails?: CardDetails;
  handleCancelClick?: () => void;
  handleAddCard: () => void;
}

export interface CreditCardFormErrors {
  cardNumber?: string;
  expiryDate?: string;
  securityCode?: string;
}

export interface CreditCardFormValues {
  cardNumber: string;
  expiryDate: string;
  securityCode: string;
  saveCard: boolean;
}
