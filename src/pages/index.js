import React from "react"
import MainLayout from "../layouts/MainLayout"
import MainConceptArtPageSection from "../components/MainConceptArtPageSection/MainConceptArtPageSection"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./index.module.scss"
import PageSection from "../components/PageSection/PageSection"

export default function Home({ data }) {
  console.log(data)
  return (
    <MainLayout>
      <MainConceptArtPageSection
        backgroundPlaceholderImgPath={
          data.bg1.childImageSharp.gatsbyImageData.placeholder.fallback.src
        }
        backgroundImgPath={
          data.bg1.childImageSharp.gatsbyImageData.images.fallback.src
        }
      >
        <div className={styles.topSection}>
          <GatsbyImage
            loading="lazy"
            className={styles.playbutton}
            image={getImage(data.playbutton)}
            alt="Video play button"
          ></GatsbyImage>
          <h1>Blockchain Metaverse</h1>
        </div>
      </MainConceptArtPageSection>

      <MainConceptArtPageSection
        backgroundPlaceholderImgPath={
          data.bg2.childImageSharp.gatsbyImageData.placeholder.fallback.src
        }
        backgroundImgPath={
          data.bg2.childImageSharp.gatsbyImageData.images.fallback.src
        }
      ></MainConceptArtPageSection>

      <MainConceptArtPageSection
        backgroundPlaceholderImgPath={
          data.bg3.childImageSharp.gatsbyImageData.placeholder.fallback.src
        }
        backgroundImgPath={
          data.bg3.childImageSharp.gatsbyImageData.images.fallback.src
        }
      >
        <div
          className={`${styles.whitepaperSection} h-100 d-flex align-items-center`}
        >
          <div className="container">
            <div className="row">
              <div
                className={`${styles.info} col-lg-6 d-flex flex-column justify-content-center`}
              >
                <h3>A World Based On</h3>
                <h1>The Lost Revolutionary White Paper</h1>
                <p>
                  A few years after Satoshi Nakamoto’s Bitcoin white paper
                  changed the world, another white paper of mysterious origin
                  created a stir. Satoshi’s work states that the world is due
                  for economic collapse due to its reliance on fiat currency. It
                  would take only one crisis, such as climate change, to unleash
                  an unmitigated global catastrophe. His startling proposal:
                  Cryptopia World, a nation based on the blockchain, a new
                  society would serve as an example for all others to follow.
                </p>
              </div>
              <div
                className={`${styles.graphic} col-lg-6 d-flex justify-content-center`}
              >
                <GatsbyImage
                  loading="lazy"
                  image={getImage(data.legacyWhitepaperGraphic)}
                ></GatsbyImage>
              </div>
            </div>
          </div>
        </div>
      </MainConceptArtPageSection>
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
    </MainLayout>
  )
}

export const bgImageQuery = graphql`
  fragment bgImageQuery on File {
    childImageSharp {
      gatsbyImageData(blurredOptions: { width: 10 }, placeholder: BLURRED)
    }
  }
`

export const defaultImageQuery = graphql`
  fragment defaultImageQuery on File {
    childImageSharp {
      gatsbyImageData(
        blurredOptions: { width: 10 }
        placeholder: TRACED_SVG
        quality: 100
      )
    }
  }
`

export const query = graphql`
  query {
    bg1: file(relativePath: { eq: "bg/main_concept_art_1.png" }) {
      ...bgImageQuery
    }

    bg2: file(relativePath: { eq: "bg/main_concept_art_2.png" }) {
      ...bgImageQuery
    }

    bg3: file(relativePath: { eq: "bg/main_concept_art_3.png" }) {
      ...bgImageQuery
    }

    playbutton: file(relativePath: { eq: "main/video_play_button.png" }) {
      ...defaultImageQuery
    }

    legacyWhitepaperGraphic: file(
      relativePath: { eq: "main/legacy_white_paper_graphic.png" }
    ) {
      ...defaultImageQuery
    }

    factionContainerEco: file(
      relativePath: {
        eq: "factions/factionContainers/eco_select_container.png"
      }
    ) {
      ...defaultImageQuery
    }

    factionContainerTech: file(
      relativePath: {
        eq: "factions/factionContainers/tech_select_container.png"
      }
    ) {
      ...defaultImageQuery
    }

    factionContainerIndustrial: file(
      relativePath: {
        eq: "factions/factionContainers/industrial_select_container.png"
      }
    ) {
      ...defaultImageQuery
    }

    factionContainerTraditional: file(
      relativePath: {
        eq: "factions/factionContainers/traditional_select_container.png"
      }
    ) {
      ...defaultImageQuery
    }
  }
`
