export interface ScreenProps {
  navigation?: any;
  route?: {
    params?: Record<string, any>;
  };
}

export interface QueryProviderProps {
  children: React.ReactNode;
}
