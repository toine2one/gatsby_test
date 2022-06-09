import React from "react"
import * as styles from "./PageSection.module.scss"

export default function PageSection({
  children,
  backgroundImagePath,
  backgroundImageName,
  backgroundImage,
  classes,
}) {
  return (
    <div className={`${styles.container} ${classes}`}>
      <img
        className={styles.bgImg}
        src={backgroundImagePath}
        alt={backgroundImageName}
      />
      <div>{children}</div>
    </div>
  )
}
