import React from "react";
import { QRCode } from "../src/components/atoms/QRCode";

export default { title: "QRCode" };

export const withValue = () => {
  const url = "https://github.com/";
  return (<div style={{width: "100px"}}><QRCode encodedURL={url} /></div>);
};
