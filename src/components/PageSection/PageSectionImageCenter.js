import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./PageSectionImageCenter.module.scss"

export default function PageSectionImageCenter({
  image,
  imageClass,
  title,
  subtitle,
}) {
  return (
    <div className={`${styles.container} container h-100`}>
      <div className="row vh-100">
        <div className="col col-lg-12 d-flex flex-column justify-content-center align-items-center h-100">
          <GatsbyImage
            className={imageClass}
            loading="lazy"
            image={getImage(image)}
          ></GatsbyImage>
          {title ? <h1>{title}</h1> : null}
          {subtitle ? <h2>{subtitle}</h2> : null}
        </div>
      </div>
    </div>
  )
}
