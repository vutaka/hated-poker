import React from "react";
import { Field } from "../src/presenter/atoms/Field"
import { Input } from "../src/presenter/atoms/Input";

export default { title: "Field" };

export const withText = () => <Field label="文字">ああああああ</Field>;

export const withInput = () => <Field label="文字あああああ"><Input /></Field>;