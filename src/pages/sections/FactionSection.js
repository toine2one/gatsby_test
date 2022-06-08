import PageSection from "../../components/PageSection/PageSection"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./FactionSection.module.scss"

import React from "react"

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
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3">
            <GatsbyImage
              loading="lazy"
              image={getImage(images[1])}
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3">
            <GatsbyImage image={getImage(images[2])}></GatsbyImage>
          </div>
          <div className="col col-lg-3">
            <GatsbyImage
              loading="lazy"
              image={getImage(images[3])}
            ></GatsbyImage>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
