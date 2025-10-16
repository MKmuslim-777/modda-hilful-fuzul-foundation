import axios from "axios";
import React, { useEffect, useState } from "react";

const useWork = () => {
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios("../WorkData.json").then((data) => {
      setLoading(false);
      setWork(data.data);
    });
  }, []);

  return { work, loading };
};

export default useWork;
