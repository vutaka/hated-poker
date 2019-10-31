import React, { useState } from "react";
import { SelectForList } from "../src/components/atoms/SelectForList";

export default { title: "Select" };

export const withList = () => {
  const [hoge, setHoge] = useState(1);
  const list = Array.from(Array(5), (v, k) => {return {value: k + 1, text: (k + 1) + "人"}})
  
  return <SelectForList list={list}  />;
};
