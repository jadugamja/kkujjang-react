import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../services/const";

axios.defaults.baseURL = BASE_URL;

const useAxios = ({ path, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios[method](path, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, path, body, headers]);

  return { response, error, loading };
};

export default useAxios;
