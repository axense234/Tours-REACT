// React
import { useEffect } from "react";

const useGetTours = (setTours, setLoading, tours) => {
  useEffect(() => {
    const timeout = setTimeout(
      fetch(tours)
        .then(() => {
          setTours(tours);
          setLoading(false);
        })
        .catch((error) => console.log(error)),
      2000
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [setLoading, setTours, tours]);
};

export default useGetTours;
