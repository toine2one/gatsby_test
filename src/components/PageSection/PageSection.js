import React from "react"
import * as styles from "./PageSection.module.scss"

export default function PageSection({
  children,
  backgroundImagePath,
  backgroundImageName,
  backgroundImage,
}) {
  return (
    <div className={styles.container}>
      <img src={backgroundImagePath} alt={backgroundImageName} />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
