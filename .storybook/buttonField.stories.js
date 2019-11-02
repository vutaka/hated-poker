import React from "react";
import { Button } from "../src/presenter/atoms/Button";
import { ButtonField } from "../src/presenter/atoms/ButtonField";

export default { title: "ButtonField" };

export const one = () => (<ButtonField><Button>ほげ</Button></ButtonField>);

export const many = () => (<ButtonField><Button>ほげ</Button><Button>ほげ</Button><Button>ほげ</Button><Button>ほげ</Button></ButtonField>);