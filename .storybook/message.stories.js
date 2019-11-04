import React from "react";
import { Message } from "../src/presenter/atoms/Message"
import { ContentPanel } from "../src/presenter/atoms/ContentPanel"

export default { title: "Message" };

export const normal = () => <ContentPanel><Message text="ここになにがしかのメッセージが出る予定なんすよ" /></ContentPanel>;