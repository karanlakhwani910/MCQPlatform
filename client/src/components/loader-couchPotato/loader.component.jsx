// import logo from './logo.svg';
import "./loader.component.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RingLoader from "react-spinners/RingLoader";

function Loader() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#BD10E0");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (
    <div className="loaderStyling">
      <RingLoader color={color} loading={loading} size={100} />
    </div>
  );
}

export default Loader;
