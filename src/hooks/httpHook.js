import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseUrl = "https://back-wb-helper.ru/api/v1/";

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        const resp = await fetch(`${baseUrl}${url}`, {
          method,
          body,
          headers,
        });
        const data = await resp.json();
        if (!resp.ok) {
          throw new Error("что то не так");
        }
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e);
        throw e;
      }
    },
    []
  );

  return { loading, request, error };
};
