import axios from "axios";
import React, { useState } from "react";

const useFetching = () => {
  const [data, setData] = useState([]);

  const getAllData=(url) => {
    axios.get(url).then((res)=>setData(res.data))
  };

  return {data,getAllData};
};

export default useFetching;
