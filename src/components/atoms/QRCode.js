import React from "react";
import styles from "./QRCode.module.scss";

export function QRCode(props) {
  return (
    <img
      src={"https://link-style.info/qrcode/" + props.encodedURL}
      alt="QRコード生成API"
      className={styles.qrCode} />
  )
}