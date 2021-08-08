import { useEffect, useState } from "react";
import axios from "axios";
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
        console.log(err.response);
        setLoading(false);
      });
  }, [path]);
  return { data, loading };
};
