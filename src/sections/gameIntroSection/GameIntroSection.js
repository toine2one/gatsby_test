import React from "react"
import PageSection from "../../components/PageSection/PageSection"
import PageSectionColumns from "../../components/PageSection/PageSectionColumns"
import * as styles from "./GameIntroSection.module.scss"

export default function GameIntroSection({ image }) {
  return (
    <PageSection classes={styles.gameIntroSection}>
      <PageSectionColumns
        titleTop="Groundbreaking"
        title="Blockchain-Driven Metaverse Game"
        image={image}
        buttonText="Learn More"
        text={
          "Welcome to Cryptopia, a persistent world, open-ended, multiplayer strategy and role-playing game that provides a solution to the problem of our unstable world economy. Built entirely on the blockchain, gamers can enjoy the security, visibility, and other benefits of this technology while having fun creating their own ideal society."
        }
      ></PageSectionColumns>
    </PageSection>
  )
}
