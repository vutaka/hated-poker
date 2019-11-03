import React, {useRef} from "react"
import {Input} from "../atoms/Input"
import {Button} from "../atoms/Button"
import styles from "./TextCopy.module.scss"

export function TextCopy(props) {
  const inputEl = useRef(null);
  const copyText = () => {
    inputEl.current.select();
    document.execCommand("copy");
  }
  return (
    <div className={styles.text_copy_wrapper}>
      <Input
        value={props.value}
        readOnly={true}
        ref={inputEl}
        additionalclass={styles.copy_source} />
      <Button
        onClick={copyText}
        additionalClass={styles.action_button}>
        コピー
      </Button>
    </div>
  )
}