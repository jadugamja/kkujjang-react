import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { BASE_URL } from "../services/const";

axios.defaults.baseURL = BASE_URL;

// config = { method, url, headers, data }
const useAxios = (config, executeOnMount = true) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.request(config);
      setResponse(res?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [config]);

  useEffect(() => {
    if (executeOnMount) {
      fetchData();
    }
  }, []);

  return { response, error, loading, fetchData };
};

export default useAxios;
