import React from "react"
import PageSection from "../../components/PageSection/PageSection"
import PageSectionColumns from "../../components/PageSection/PageSectionColumns"
import { useStaticQuery, graphql, navigate } from "gatsby"
import * as styles from "./GameIntroSection.module.scss"

export default function GameIntroSection({ image }) {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg/figures/bg_wavesBottom_figures.png" }) {
        ...defaultImageQuery
      }
    }
  `)

  return (
    <PageSection classes={styles.gameIntroSection} image={data.bg}>
      <PageSectionColumns
        titleTop="Groundbreaking"
        title="Blockchain-Driven Metaverse Game"
        image={image}
        buttonClass="blue border-blue"
        buttonText="Learn More"
        onButtonClick={() => navigate("/game")}
        text={
          "Welcome to Cryptopia, a persistent world, open-ended, multiplayer strategy and role-playing game that provides a solution to the problem of our unstable world economy. Built entirely on the blockchain, gamers can enjoy the security, visibility, and other benefits of this technology while having fun creating their own ideal society."
        }
      ></PageSectionColumns>
    </PageSection>
  )
}
