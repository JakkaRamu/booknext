import { StorageKeys } from "@/constants/commonConstants/storageKeys";
import { useLoginState } from "@/hooks/useLoginState";
import { getItem, saveItem } from "@/store/deviceStore/secureStore";
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setLoginState } = useLoginState();

  // Load user from storage on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const isLoggedIn = await getItem(StorageKeys.IS_LOGGED_IN);
        console.log("AuthProvider - Loading user, isLoggedIn:", isLoggedIn);
        if (isLoggedIn) {
          const userData = await getItem(StorageKeys.USER_DATA);
          console.log("AuthProvider - Loaded userData:", userData);
          if (userData) {
            setUser(userData);
          }
        }
      } catch (error) {
        console.error("Error loading user from storage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (user: User) => {
    console.log("AuthProvider - Logging in user:", user);
    setUser(user);
    await Promise.all([
      saveItem(StorageKeys.USER_DATA, user),
      setLoginState.mutateAsync(true),
    ]);
  };

  const logout = async () => {
    console.log("AuthProvider - Logging out");
    setUser(null);
    await Promise.all([
      saveItem(StorageKeys.USER_DATA, null),
      setLoginState.mutateAsync(false),
    ]);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
