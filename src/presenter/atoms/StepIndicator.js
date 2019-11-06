import React from "react";
import styles from "./StepIndicator.module.scss";
import classnames from "classnames"

export function StepIndicator(props) {
    return (
        <div className={classnames(styles.stepIndicator, { [styles.current]: props.isCurrent })}>
            <span className={styles.title}>
                {props.title}
            </span>
            <span className={styles.text}>
                {props.text}
            </span>
        </div>
    )
}

