import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./PageSection.module.scss"

export default function PageSection({ children, image, classes }) {
  return (
    <div className={`${styles.container} ${classes}`}>
      {/* <img
        className={styles.bgImg}
        src={backgroundImagePath}
        alt={backgroundImageName}
      /> */}
      <GatsbyImage
        loading="eager"
        className={styles.bgImg}
        image={getImage(image)}
        alt="Section background"
      />
      {children}
    </div>
  )
}
