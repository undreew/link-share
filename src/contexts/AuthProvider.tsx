"use client";

import { isEmpty } from "lodash";
import { createContext, useContext } from "react";
import { useEffect, useMemo, useState } from "react";

interface AuthContextType {
  isAuth: boolean;
  accessToken: string;
  authenticate: (accessToken: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  accessToken: "",
  authenticate: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isAuth = useMemo(
    () => (accessToken ? !isEmpty(accessToken) : false),
    [accessToken]
  );

  function authenticate(accessToken: string) {
    setAccessToken(accessToken);
    window.localStorage.setItem("user", JSON.stringify(accessToken));
  }

  useEffect(() => {
    setIsLoading(true);
    const storedToken = window.localStorage.getItem("user");
    if (storedToken) setAccessToken(storedToken);
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, accessToken, authenticate }}>
      {isLoading ? (
        <div className="min-h-screen">
          <h1 className="body-sm">Loading...</h1>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
