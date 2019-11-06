import React from "react";
import styles from "./StepIndicator.module.scss";

export function StepIndicator(props) {
    return (
        <span className={styles.stepIndicator}>
            <span className={styles.shapes}>
                <span className="progress-title">{props.text}</span>
            </span>
        </span>
    )
}

