import React, { useState, useEffect } from "react";
import API_KEY from "../keys";

const CONTEXT_KEY = "358eafb7c32169559";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
  }, [term]);

  return { data };
};

export default useGoogleSearch;
