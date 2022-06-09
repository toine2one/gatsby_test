import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageSection from "../../../components/PageSection/PageSection"
import * as styles from "./GameIntroSection.module.scss"

export default function GameIntroSection({ image }) {
  return (
    <PageSection classes={styles.gameIntroSection}>
      <div className="container">
        <div className="row">
          <div className={`${styles.info} col col-lg-6`}>
            <h3>Groundbreaking</h3>
            <h1>Blockchain-Driven Metaverse Game</h1>
            <p>
              Welcome to Cryptopia, a persistent world, open-ended, multiplayer
              strategy and role-playing game that provides a solution to the
              problem of our unstable world economy. Built entirely on the
              blockchain, gamers can enjoy the security, visibility, and other
              benefits of this technology while having fun creating their own
              ideal society.
            </p>
          </div>
          <div className="col col-lg-6">
            <GatsbyImage loading="lazy" image={getImage(image)}></GatsbyImage>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
