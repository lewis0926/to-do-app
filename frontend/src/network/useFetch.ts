import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = (import.meta.env.REACT_APP_BASE_URL || 'http://localhost:8000') + '/todo';

const useFetch = (subUrl: string) => {
  const url = `${baseUrl}/${subUrl}`;

  const [data, setData] = useState<any|null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<any|null>(null);

  useEffect(() => {
    const fetchData = () => {
      axios.get(url)
        .then(res => {
          setData(res?.data)
          setIsPending(false)
        })
        .catch(err => {
          setError(err)
          setIsPending(false)
        })
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;