import { useState, useCallback, useEffect } from "react";

const storageToken = "userToken";

export const useAuth = () => {
  const [token, setToken] = useState(null);

  const login = useCallback((jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem(storageToken, jwtToken);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem(storageToken);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem(storageToken);
    if (data) {
      login(data);
    }
  }, [login]);

  return { login, logout, token };
};
