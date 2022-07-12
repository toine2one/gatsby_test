import React from "react"
import MainLayout from "../layouts/MainLayout"
import PageSection from "../components/PageSection/PageSection"
import PageSectionImageCenter from "../components/PageSection/PageSectionImageCenter"
import FactionSection from "../sections/factionSection/FactionSection"
import { graphql } from "gatsby"
import * as styles from "./game.module.scss"
import PageSectionColumns from "../components/PageSection/PageSectionColumns"

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
        <PageSection
          classes={styles.gameplayTypesSection}
          image={data.gameplayTypes}
        >
          <PageSectionImageCenter></PageSectionImageCenter>
        </PageSection>
        <PageSection
          classes={styles.bgTycoon}
          image={data.bgTycoon}
          title="Tycoon Gameplay"
          subTitle="Build a business empire by claiming land and profiting from its resources."
        >
          <PageSectionImageCenter></PageSectionImageCenter>
        </PageSection>

        <PageSection image={data.bgMotherboard}>
          <PageSectionColumns
            title="Claim"
            image={data.tilesNFTShip}
            text="Stake your claim on land tiles. Cryptopia has a limited amount of land but potentially unlimited players. This creates scarcity that raises land values over time. Land also contains valuable resources for you to harvest."
          ></PageSectionColumns>
        </PageSection>

        <PageSection image={data.bgMotherboard}>
          <PageSectionColumns
            title="Construct"
            imageLeft={true}
            image={data.tilesNFTConstruct}
            text="Tap resources by constructing the right buildings on your land tiles. Resources can be turned into valuable tokens you can trade or use for construction and production. But remember--extraction also becomes slower and more expensive over time."
          ></PageSectionColumns>
        </PageSection>

        <PageSection image={data.bgHexSides}>
          <PageSectionColumns
            title="Harvest"
            image={data.tilesNFTHarvest}
            text="Say you have claimed a land tile that's rich in coal. To extract it, you must first build a coal mine on the tile. Like all buildings, you must meet the coal mine's material and human resource requirements before it can be constructed."
          ></PageSectionColumns>
        </PageSection>

        <PageSection image={data.bgTechLinesLeft}>
          <PageSectionColumns
            image={data.tilesNFTGenerate}
            imageLeft={true}
            title="Generate"
            text="Burn your Coal tokens in your Power plant to generate electricity, or trade them on the open market.</br></br></br>Electricity is an important commodity, almost everything in Cryptopia uses electricity to run."
          ></PageSectionColumns>
        </PageSection>

        <PageSection image={data.bgTechLinesRight}>
          <PageSectionColumns
            image={data.tilesNFTMetropolis}
            title="Build a metropolis"
            text="Reach the ultimate goal and build your own DeFi metropolis. Will you operate your own Dex or start a DeFi project right within Cryptopia?</br></br>By allowing other players to stake and trade using your services, you'll realize endless profits!"
          ></PageSectionColumns>
        </PageSection>

        <PageSection classes={styles.defiEmpireSection} image={data.bgHexSides}>
          <PageSectionImageCenter
            title="Build your own DeFi empire"
            subtitle="Cash in on fees when other players use your DeFi projects"
            image={data.gameplaySwap}
          ></PageSectionImageCenter>
        </PageSection>

        <PageSection classes={styles.defiEmpireSection} image={data.bgHexSides}>
          <PageSectionImageCenter
            title="Not enough capital to bootstrap your business empire? Go Public!"
            subtitle="Start a publicly traded company and allow other players to buy your shares (ERC20)"
            image={data.shareholderGameplay}
          ></PageSectionImageCenter>
        </PageSection>

        <PageSection
          classes={styles.bgAdventure}
          image={data.bgAdventure}
          title="Adventure Gameplay"
          subTitle="Choose a career, develop personal skills, and become an in-demand professional"
        >
          <PageSectionImageCenter></PageSectionImageCenter>
        </PageSection>

        <PageSection image={data.bgWavesLeft}>
          <PageSectionColumns
            image={data.tilesNFTShip}
            title="Ships"
            text="All citizens gain a ship upon joining Cryptopia. Your ship is primary means of transport and an NFT you can trade. You can use modules to upgrade your vessel's speed and cargo, gain new ships as quest rewards, or buy ships from sellers."
          ></PageSectionColumns>
        </PageSection>

        <PageSection image={data.bgWavesRight}>
          <PageSectionColumns
            image={data.adventureGlobe}
            imageLeft={true}
            title="Quests"
            text="Explore Cryptopia and find the best places to apply your skills. As your abilities grow, so will your wealth and your access to even greater opportunities."
          ></PageSectionColumns>
        </PageSection>

        <PageSection
          classes={styles.bgWorkforce}
          image={data.bgWorkforce}
          title="Career"
          subTitle="The better your skills, the more quest types will be available to you."
        >
          <PageSectionImageCenter></PageSectionImageCenter>
        </PageSection>

        <PageSection
          classes={styles.defiEmpireSection}
          image={data.bgDotWaves0Mirrored}
        >
          <PageSectionImageCenter
            title="Let the best players compete for your assets"
            subtitle="Look for the right players to complete quests with your assets. Find the ones that are truly engaged and will get the job done."
            image={data.recruitmentGameplay}
          ></PageSectionImageCenter>
        </PageSection>

        <PageSection
          classes={styles.defiEmpireSection}
          image={data.bgDotWaves0Mirrored}
        >
          <PageSectionImageCenter
            title="Use the Quest finder"
            subtitle="The better your stats, the better the chances are that you get the job! Invest time to increase the attractiveness of your profile."
            image={data.questFinderGameplay}
          ></PageSectionImageCenter>
        </PageSection>

        <PageSection
          classes={styles.defiEmpireSection}
          image={data.bgDotWaves0}
        >
          <PageSectionImageCenter
            title="Sabotage"
            subtitle="Faction may send Saboteurs to infiltrate each other's buildings and slow down production"
            image={data.shareholderGameplay}
          ></PageSectionImageCenter>
        </PageSection>

        <PageSection classes={styles.bgWorkforce} image={data.bgDotWaves1}>
          <PageSectionImageCenter
            title="Loyalty"
            subtitle="Owners can protect against saboteurs by increasing loyalty with loyalty cards"
            image={data.loyaltyGameplay}
          ></PageSectionImageCenter>
        </PageSection>
      </div>
    </MainLayout>
  )
}

export const bg = graphql`
  fragment bg on File {
    childImageSharp {
      gatsbyImageData(
        blurredOptions: { width: 10 }
        placeholder: NONE
        quality: 75
      )
    }
  }
`

export const query = graphql`
  query {
    bgGameMap0: file(relativePath: { eq: "bg/bg_tile_floor_0.png" }) {
      ...bg
    }

    bgGameMap1: file(relativePath: { eq: "bg/bg_tile_floor_1.png" }) {
      ...bg
    }

    bgGameMap2: file(relativePath: { eq: "bg/bg_tile_floor_2.png" }) {
      ...bg
    }

    bgGameMap3: file(relativePath: { eq: "bg/bg_tile_floor_3.png" }) {
      ...bg
    }

    gameplayTypes: file(relativePath: { eq: "bg/bg_gameplay_types.png" }) {
      ...defaultImageQuery
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

    shareholderGameplay: file(
      relativePath: { eq: "gameplay/gameplay_shareholders_framed.png" }
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

    tilesNFTShip: file(
      relativePath: { eq: "concepts/tiles_nft/tiles_nft_ship_white.png" }
    ) {
      ...defaultImageQuery
    }

    tilesNFTConstruct: file(
      relativePath: { eq: "concepts/tiles_nft/tiles_nft_construct_white.png" }
    ) {
      ...defaultImageQuery
    }

    tilesNFTHarvest: file(
      relativePath: { eq: "concepts/tiles_nft/tiles_nft_harvest_c6.png" }
    ) {
      ...defaultImageQuery
    }

    tilesNFTGenerate: file(
      relativePath: { eq: "concepts/tiles_nft/tiles_nft_generate_power.png" }
    ) {
      ...defaultImageQuery
    }

    tilesNFTMetropolis: file(
      relativePath: { eq: "concepts/tiles_nft/tiles_metropolis.png" }
    ) {
      ...defaultImageQuery
    }

    adventureGlobe: file(
      relativePath: { eq: "concepts/hex_adventure_globe_no_hex.png" }
    ) {
      ...defaultImageQuery
    }

    recruitmentGameplay: file(
      relativePath: { eq: "gameplay/gameplay_reqruitment_center.png" }
    ) {
      ...defaultImageQuery
    }

    questFinderGameplay: file(
      relativePath: { eq: "gameplay/Gameplay_quest_finder.png" }
    ) {
      ...defaultImageQuery
    }

    sabotageSnippetGameplay: file(
      relativePath: { eq: "gameplay/Gameplay_quest_finder.png" }
    ) {
      ...defaultImageQuery
    }

    loyaltyGameplay: file(
      relativePath: { eq: "gameplay/sabotage_loyalty_framed.png" }
    ) {
      ...defaultImageQuery
    }
  }
`
