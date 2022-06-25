import axios from "axios";
import React, { useState } from "react";
import BarGraph from "./BarGraph";

export default function App() {
  const [get, setGet] = useState([]);
  const [loading, setloading] = useState(true);

  React.useEffect(() => {
    getrequest();
  }, []);

  const getrequest = async () => {
    try {
      const userRequest = await axios.get("/top4respondents");
      setGet(userRequest.data);
      setloading(false);
    } catch {}
  };

  if (loading === false) {
    return <BarGraph get={get} loading={loading}></BarGraph>;
  } else {
    return <p>loading</p>;
  }
}
