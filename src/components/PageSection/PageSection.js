import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./PageSection.module.scss"

const headerSty = {}

export default function PageSection({
  children,
  image,
  classes,
  title,
  subTitle,
}) {
  return (
    <div className={`${styles.container} ${classes}`}>
      <GatsbyImage
        loading="eager"
        className={styles.bgImg}
        image={getImage(image)}
        alt="Section background"
      />
      {(title || subTitle) && (
        <div className={styles.heading}>
          {title && <h1>{title}</h1>}
          {subTitle && <h2>{subTitle}</h2>}
        </div>
      )}
      <div
        className={styles.content}
        style={{ height: title || subTitle ? "80%" : "initial" }}
      >
        {children}
      </div>
    </div>
  )
}
