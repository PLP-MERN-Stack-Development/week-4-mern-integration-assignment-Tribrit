import { useEffect, useState } from "react";

const useFetch = (fetchFunc) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchFunc().then(setData);
  }, [fetchFunc]);

  return data;
};

export default useFetch;
