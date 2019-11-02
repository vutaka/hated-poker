import React, { useRef, useImperativeHandle, forwardRef } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

export function Input(props, ref) {
  const inputEl = useRef(null);
  useImperativeHandle(ref, () => ({
    select: () => {
      inputEl.current.select();
    }
  }));
  return (
    <input
      className={classNames(styles.input, props.additionalClass)}
      ref={inputEl}
      {...props} />
  )
}
// eslint-disable-next-line no-func-assign
Input = forwardRef(Input);