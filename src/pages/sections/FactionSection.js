import PageSection from "../../components/PageSection/PageSection"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./FactionSection.module.scss"

import React from "react"

export default function FactionSection({ data }) {
  return (
    <PageSection classes={styles.factionSection}>
      <h1>Factions</h1>
      <h2>Which side will you take</h2>
      <div className="container">
        <div className="row">
          <div className="col col-lg-3">
            <GatsbyImage
              loading="lazy"
              image={getImage(data.factionContainerEco)}
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3">
            <GatsbyImage
              loading="lazy"
              image={getImage(data.factionContainerTech)}
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3">
            <GatsbyImage
              image={getImage(data.factionContainerIndustrial)}
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3">
            <GatsbyImage
              loading="lazy"
              image={getImage(data.factionContainerTraditional)}
            ></GatsbyImage>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
