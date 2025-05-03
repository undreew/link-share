import React, { createContext, useContext, useEffect, useState } from "react";

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
	const [isAuth, setIsAuth] = useState<boolean>(false);
	const [accessToken, setAccessToken] = useState<string>("");

	function authenticate(accessToken: string) {
		setAccessToken(accessToken);
	}

	useEffect(() => {
		if (accessToken) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	}, [accessToken]);

	return (
		<AuthContext.Provider value={{ isAuth, accessToken, authenticate }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
