import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./PageSectionColumns.module.scss"
import parse from "html-react-parser"

export default function PageSectionColumns({
  titleTop,
  title,
  text,
  image,
  imageClass,
  buttonText,
  buttonClass,
  onButtonClick,
  imageLeft,
  children,
}) {
  const rowWithColumnsElement = () => {
    if (!imageLeft) {
      return (
        <div className="row flex-wrap-reverse">
          <div
            className={`${styles.info} col col-lg-6 col-12 col-sm-12 d-flex flex-column justify-content-center`}
          >
            {titleTop ? <h3>{titleTop}</h3> : null}
            <h1>{parse(title)}</h1>
            <p>{parse(text)}</p>
            {children}
            {buttonText ? (
              <button
                className={`${styles.button} ${buttonClass} btn-custom`}
                onClick={onButtonClick}
              >
                {buttonText}
              </button>
            ) : null}
          </div>
          <div
            className={`${styles.image} col col-lg-6 col-12 col-sm-12 d-flex justify-content-center`}
          >
            <GatsbyImage
              className={imageClass}
              loading="lazy"
              image={getImage(image)}
            ></GatsbyImage>
          </div>
        </div>
      )
    } else {
      return (
        <div className="row">
          <div
            className={`${styles.image} col col-lg-6 col-12 col-sm-12 d-flex justify-content-start`}
          >
            <GatsbyImage
              className={imageClass}
              loading="lazy"
              image={getImage(image)}
            ></GatsbyImage>
          </div>
          <div
            className={`${styles.info} col col-lg-6 col-12 col-sm-12 d-flex flex-column justify-content-center`}
          >
            {titleTop ? <h3>{titleTop}</h3> : null}
            <h1>{parse(title)}</h1>
            <p>{parse(text)}</p>
            {children}
            {buttonText ? (
              <button
                className={`${styles.button} ${buttonClass} btn-custom`}
                onClick={onButtonClick}
              >
                {buttonText}
              </button>
            ) : null}
          </div>
        </div>
      )
    }
  }

  return (
    <div className={`${styles.container} container`}>
      {rowWithColumnsElement()}
    </div>
  )
}
