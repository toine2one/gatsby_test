import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageSection from "../../../components/PageSection/PageSection"
import * as styles from "./FactionSection.module.scss"

export default function FactionSection({ images }) {
  return (
    <PageSection classes={styles.factionSection}>
      <h1>Factions</h1>
      <h2>Which side will you take</h2>
      <div className="container">
        <div className="row">
          <div className="col col-lg-3">
            <GatsbyImage
              loading="lazy"
              image={getImage(images[0])}
              alt="Eco faction container"
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3">
            <GatsbyImage
              loading="lazy"
              image={getImage(images[1])}
              alt="Tech faction container"
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3">
            <GatsbyImage
              image={getImage(images[2])}
              alt="Industrial faction container"
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3">
            <GatsbyImage
              loading="lazy"
              image={getImage(images[3])}
              alt="Traditional faction container"
            ></GatsbyImage>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
