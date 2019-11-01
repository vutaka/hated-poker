import React, {useRef} from "react"
import {Input} from "../atoms/Input"
import {Button} from "../atoms/Button"

export function TextCopy(props) {
  const inputEl = useRef(null);
  const copyText = () => {
    inputEl.current.select();
    document.execCommand("copy");
  }
  return (
    <>
      <Input
        value={props.value}
        readOnly={true}
        ref={inputEl} />
      <Button
        onClick={copyText}>
        コピー
      </Button>
    </>
  )
}