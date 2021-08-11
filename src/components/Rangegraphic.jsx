import React from "react";
import useInfoRange from "../hooks/useInfoRange";
import Graphic from "./Graphic";
import Spinner from "./Spinner";

const Rangegraphic = () => {
  const { infoRange } = useInfoRange("spain");

  return (
    <>{infoRange.length === 0 ? <Spinner /> : <Graphic info={infoRange} />}</>
  );
};

export default Rangegraphic;
