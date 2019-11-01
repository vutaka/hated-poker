import React from "react";
import { Header } from "../../components/molecules/Header";
import {ContentPanel} from "../../components/atoms/ContentPanel";

export function PreparationTemplate(props) {
  return(
    <>
      <Header title={props.title}/>
      <ContentPanel>
        {props.child}
      </ContentPanel>
    </>
  )
}