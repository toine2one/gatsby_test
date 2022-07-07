import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import PageSection from "../../components/PageSection/PageSection"
import * as styles from "./FactionSection.module.scss"

export const defaultImageQuery = graphql`
  fragment defaultImageQuery on File {
    childImageSharp {
      gatsbyImageData(
        blurredOptions: { width: 10 }
        placeholder: NONE
        quality: 100
      )
    }
  }
`

export default function FactionSection({ images }) {
  const data = useStaticQuery(graphql`
    query {
      ecoBadge: file(relativePath: { eq: "factions/badges/Eco_badge.png" }) {
        ...defaultImageQuery
      }

      techBadge: file(relativePath: { eq: "factions/badges/Tech_badge.png" }) {
        ...defaultImageQuery
      }

      industrialBadge: file(
        relativePath: { eq: "factions/badges/Industrial_badge.png" }
      ) {
        ...defaultImageQuery
      }

      traditionalBadge: file(
        relativePath: { eq: "factions/badges/Traditional_badge.png" }
      ) {
        ...defaultImageQuery
      }
    }
  `)

  return (
    <PageSection
      classes={styles.factionSection}
      title="Factions"
      subTitle="Which side will you take"
    >
      <div
        className={`${styles.factionContainers} container d-flex justify-content-center align-items-center d-none d-lg-block`}
      >
        <div className="row">
          <div className="col col-lg-3 d-flex justify-content-center">
            <GatsbyImage
              loading="lazy"
              image={getImage(images[0])}
              alt="Eco faction container"
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3 d-flex justify-content-center">
            <GatsbyImage
              loading="lazy"
              image={getImage(images[1])}
              alt="Tech faction container"
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3 d-flex justify-content-center">
            <GatsbyImage
              image={getImage(images[2])}
              alt="Industrial faction container"
            ></GatsbyImage>
          </div>
          <div className="col col-lg-3 d-flex justify-content-center">
            <GatsbyImage
              loading="lazy"
              image={getImage(images[3])}
              alt="Traditional faction container"
            ></GatsbyImage>
          </div>
        </div>
      </div>
      <div className="container d-lg-none">
        <div className="row">
          <div className="col col-6 col-sm-6 d-flex justify-content-center">
            <GatsbyImage
              className={styles.mobileImage}
              image={getImage(data.ecoBadge)}
              alt="Eco faction badge"
            />
          </div>
          <div className="col col-6 col-sm-6 d-flex justify-content-center">
            <GatsbyImage
              className={styles.mobileImage}
              image={getImage(data.techBadge)}
              alt="Tech faction badge"
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-6 col-sm-6 d-flex justify-content-center">
            <GatsbyImage
              className={styles.mobileImage}
              image={getImage(data.industrialBadge)}
              alt="Industrial faction badge"
            />
          </div>
          <div className="col col-6 col-sm-6 d-flex justify-content-center">
            <GatsbyImage
              className={styles.mobileImage}
              image={getImage(data.traditionalBadge)}
              alt="Traditional faction badge"
            />
          </div>
        </div>
      </div>
    </PageSection>
  )
}
