import React from "react"
import PageSection from "../../components/PageSection/PageSection"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./RoadmapSection.module.scss"

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

export default function RoadmapSection() {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg/bg_high_level_roadmap.png" }) {
        ...defaultImageQuery
      }

      roadmapCoins: file(
        relativePath: { eq: "roadmap/milestones/roadmap_coins.png" }
      ) {
        ...defaultImageQuery
      }

      roadmapWallet: file(
        relativePath: { eq: "roadmap/milestones/roadmap_wallet.png" }
      ) {
        ...defaultImageQuery
      }

      roadmapMap: file(
        relativePath: { eq: "roadmap/milestones/roadmap_map.png" }
      ) {
        ...defaultImageQuery
      }

      roadmapRocket: file(
        relativePath: { eq: "roadmap/milestones/roadmap_rocket.png" }
      ) {
        ...defaultImageQuery
      }
    }
  `)

  return (
    <PageSection classes={styles.container} image={data.bg}>
      <div className={styles.content}>
        <h1>Cryptopia Roadmap</h1>
        <h2>2021 - 2022</h2>
        <div className={`${styles.roadmap} d-none d-lg-flex`}>
          <div className="container">
            <div className="row flex-nowrap">
              <div className="col col-lg-3">
                <div className={`${styles.milestone}`}>
                  <h3>Q4 2021</h3>
                  <h4 className={styles.q1a}>Proof of Concept</h4>
                  <GatsbyImage
                    className={styles.image}
                    image={getImage(data.roadmapCoins)}
                    alt="Roadmap milestone 2021 Q4 - Proof of Concept"
                  />
                  <ul className={styles.q1a}>
                    <li>Private Sale</li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className={`${styles.milestone}`}>
                  <h3>Q1 2022</h3>
                  <h4 className={styles.q1}>Marketplace & Wallet</h4>
                  <GatsbyImage
                    className={styles.image}
                    image={getImage(data.roadmapWallet)}
                    alt="Roadmap milestone 2022 Q1 - NFT Marketplace"
                  />
                  <ul className={styles.q1}>
                    <li>Private Sale</li>
                    <li>NFT Marketplace (50%)</li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className={`${styles.milestone}`}>
                  <h3>Q2 2022</h3>
                  <h4 className={styles.q2}>Gameplay</h4>
                  <GatsbyImage
                    className={styles.image}
                    image={getImage(data.roadmapMap)}
                    alt="Roadmap milestone 2022 Q2 - Marketplace & Wallet"
                  />
                  <ul className={styles.q2}>
                    <li>Gameplay Navigation (90%)</li>
                    <li>World Maps (50%)</li>
                    <li>Game Resources (100%)</li>
                    <li>Player Profile (40%)</li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className={`${styles.milestone}`}>
                  <h3>Q3 2022</h3>
                  <h4 className={styles.q3}>Public Beta Testnet</h4>
                  <GatsbyImage
                    className={styles.image}
                    image={getImage(data.roadmapRocket)}
                    alt="Roadmap milestone 2022 Q3 - Gameplay"
                  />

                  <ul className={styles.q3}>
                    <li>Wallet</li>
                    <li>Start Public Sale</li>
                    <li>Prepare for Public Beta Testnet</li>
                    <li>Start Public Beta Testnet</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
