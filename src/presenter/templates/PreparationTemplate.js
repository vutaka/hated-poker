import React from "react";
import { Header } from "../molecules/Header";
import {ContentPanel} from "../atoms/ContentPanel";

export function PreparationTemplate(props) {
  return(
    <>
      <Header title={props.title}/>
      <ContentPanel>
        {props.children}
      </ContentPanel>
    </>
  )
}