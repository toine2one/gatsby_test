import React from "react"
import * as styles from "./PageSectionColumns.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PageSectionColumns({
  titleTop,
  title,
  text,
  image,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className={`${styles.container} container`}>
      <div className="row flex-wrap-reverse">
        <div
          className={`${styles.info} col col-lg-6 col-12 col-sm-12 d-flex flex-column justify-content-center`}
        >
          <h3>{titleTop}</h3>
          <h1>{title}</h1>
          <p>{text}</p>
          <button
            className={`${styles.button} custom-btn blue`}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
        <div className={`${styles.image} col col-lg-6 col-12 col-sm-12`}>
          <GatsbyImage loading="lazy" image={getImage(image)}></GatsbyImage>
        </div>
      </div>
    </div>
  )
}
