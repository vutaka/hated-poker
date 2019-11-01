import React from "react";
import { Field } from "../src/components/atoms/Field"
import { Input } from "../src/components/atoms/Input";

export default { title: "Field" };

export const withText = () => <Field label="文字">ああああああ</Field>;

export const withInput = () => <Field label="文字"><Input /></Field>;