import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { BASE_URL } from "../services/const";

const instance = axios.create({
  baseURL: BASE_URL
  // withCredentials: true
});

// config = { method, url, headers, data }
const useAxios = (config, executeOnMount = true) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await instance.request(config);
      setResponse(res.data);
    } catch (error) {
      setError(error.response?.data.error);
    } finally {
      setLoading(false);
    }
  }, [config]);

  useEffect(() => {
    if (executeOnMount) {
      fetchData();
    }
  }, [executeOnMount]);

  return { response, error, loading, fetchData };
};

export default useAxios;
