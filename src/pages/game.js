import React from "react"
import MainLayout from "../layouts/MainLayout"
import MainConceptArtPageSection from "../components/MainConceptArtPageSection/MainConceptArtPageSection"
import PageSection from "../components/PageSection/PageSection"
import PageSectionImageCenter from "../components/PageSection/PageSectionImageCenter"
import FactionSection from "../sections/factionSection/FactionSection"
import { graphql } from "gatsby"
import * as styles from "./game.module.scss"

export default function game({ data }) {
  return (
    <MainLayout>
      <div className={styles.container}>
        <PageSection classes={styles.topSection} image={data.bgGameMap0}>
          <h1>Groundbreaking Blockchain-Driven Metaverse Game</h1>
        </PageSection>
        <PageSection classes={styles.playToEarnSection} image={data.bgGameMap1}>
          <PageSectionImageCenter
            image={data.productionGameplay}
            title="Play to Earn in a Next-Gen Crypto Game"
          ></PageSectionImageCenter>
        </PageSection>

        <PageSection classes={styles.forSection} image={data.bgGameMap2}>
          <PageSectionImageCenter
            image={data.defiGameplay}
            title="For Crypto Savvies and Gamers alike"
          ></PageSectionImageCenter>
        </PageSection>

        <PageSection classes={styles.forSection} image={data.bgGameMap3}>
          <PageSectionImageCenter
            image={data.walletMobile}
            title="Seamless experience with Cryptopia integrated crypto wallet"
            subtitle="Doesn’t require other external wallets (MetaMask)"
          ></PageSectionImageCenter>
        </PageSection>
        <FactionSection
          images={[
            data.factionContainerEco,
            data.factionContainerTech,
            data.factionContainerIndustrial,
            data.factionContainerTraditional,
          ]}
        ></FactionSection>

        <PageSection classes={styles.defiEmpireSection} image={data.bgHexSides}>
          <PageSectionImageCenter
            title="Build your own DeFi empire"
            subtitle="Cash in on fees when other players use your DeFi projects"
            image={data.gameplaySwap}
          ></PageSectionImageCenter>
        </PageSection>

        <PageSection
          classes={styles.gameplayTypesSection}
          image={data.gameplayTypes}
        >
          <PageSectionImageCenter></PageSectionImageCenter>
        </PageSection>
      </div>
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
        placeholder: NONE
        quality: 100
      )
    }
  }
`

export const query = graphql`
  query {
    bgGameMap0: file(relativePath: { eq: "bg/bg_tile_floor_0.png" }) {
      ...defaultImageQuery
    }

    bgGameMap1: file(relativePath: { eq: "bg/bg_tile_floor_1.png" }) {
      ...defaultImageQuery
    }

    bgGameMap2: file(relativePath: { eq: "bg/bg_tile_floor_2.png" }) {
      ...defaultImageQuery
    }

    bgGameMap3: file(relativePath: { eq: "bg/bg_tile_floor_3.png" }) {
      ...bgImageQuery
    }

    gameplayTypes: file(relativePath: { eq: "bg/bg_gameplay_types.png" }) {
      ...bgImageQuery
    }

    gameplaySwap: file(
      relativePath: { eq: "gameplay/gameplay_DEX_swap_framed.png" }
    ) {
      ...defaultImageQuery
    }

    productionGameplay: file(
      relativePath: { eq: "gameplay/production_gameplay_frame.png" }
    ) {
      ...defaultImageQuery
    }

    defiGameplay: file(
      relativePath: { eq: "gameplay/defi_gameplay_frame.png" }
    ) {
      ...defaultImageQuery
    }

    walletMobile: file(relativePath: { eq: "wallet/wallet_frame_mobile.png" }) {
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

    bgTycoon: file(relativePath: { eq: "bg/bg_tycoon_gameplay.png" }) {
      ...defaultImageQuery
    }

    bgHexSides: file(relativePath: { eq: "bg/bg_hex_sides.png" }) {
      ...defaultImageQuery
    }

    bgMotherboard: file(relativePath: { eq: "bg/bg_motherboard_2.png" }) {
      ...defaultImageQuery
    }

    bgTechLinesLeft: file(relativePath: { eq: "bg/bg_tech_lines_left.png" }) {
      ...defaultImageQuery
    }

    bgTechLinesRight: file(relativePath: { eq: "bg/bg_tech_lines_right.png" }) {
      ...defaultImageQuery
    }

    bgAdventure: file(relativePath: { eq: "bg/bg_adventure_gameplay.png" }) {
      ...defaultImageQuery
    }

    bgWavesRight: file(relativePath: { eq: "bg/bg_waves_right.png" }) {
      ...defaultImageQuery
    }

    bgWavesLeft: file(relativePath: { eq: "bg/bg_waves_left.png" }) {
      ...defaultImageQuery
    }

    bgWorkforce: file(relativePath: { eq: "bg/bg_workforce.png" }) {
      ...defaultImageQuery
    }

    bgDotWaves0: file(relativePath: { eq: "bg/bg_dot_waves_0.png" }) {
      ...defaultImageQuery
    }

    bgDotWaves0Mirrored: file(
      relativePath: { eq: "bg/bg_dot_waves_0_mirrored.png" }
    ) {
      ...defaultImageQuery
    }

    bgDotWaves1: file(relativePath: { eq: "bg/bg_dot_waves_1.png" }) {
      ...defaultImageQuery
    }
  }
`
