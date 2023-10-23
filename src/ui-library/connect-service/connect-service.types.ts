export interface ConnectServiceProps {
  serviceName: string;
  serviceIcon: JSX.Element;
  isConnected: boolean;
  handleConnect: () => void;
}
