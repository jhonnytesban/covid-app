import React, { useState, useEffect, memo } from "react";
import { fetchInfoRange } from "../helpers/fecthInfoRange";
import Graphic from "./Graphic";
import Spinner from "./Spinner";

const Rangegraphic = memo(() => {
  const [infoRange, setInfoRange] = useState([]);

  useEffect(() => {
    fetchInfoRange("spain").then((res) => {
      setInfoRange(res);
    });
  }, []);

  return (
    <>
      {infoRange.length === 0 ? (
        <Spinner />
      ) : (
        <Graphic info={infoRange} />
      )}
    </>
  );
});

export default Rangegraphic;
