import React, {useState} from "react";
import { Input } from "../src/presenter/atoms/Input";

export default { title: "Input" };

export const withValue = () => {
  const [hoge, setHoge] = useState("ホゲホゲ");
  return <Input value={hoge} onChange={e => setHoge(e.target.value)} />;
};

export const withReadOnly = () => <Input value={"ホゲホゲ"} readOnly={true}/>;