import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

export const useRequestData = (path, token) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${path}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [path]);
  return { data, loading };
};
