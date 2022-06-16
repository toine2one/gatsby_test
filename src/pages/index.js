import React from "react"
import MainLayout from "../layouts/MainLayout"
import MainConceptArtPageSection from "../components/MainConceptArtPageSection/MainConceptArtPageSection"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./index.module.scss"
import GameIntroSection from "../sections/gameIntroSection/GameIntroSection"
import WalletIntroSection from "../sections/walletIntroSection/WalletIntroSection"
import FactionSection from "../sections/factionSection/FactionSection"
import TeamSection from "../sections/teamSection/TeamSection"
import Modal from "../components/Modal/Modal"
import useModal from "../hooks/useModal"
import RoadmapSection from "../sections/roadmapSection/RoadmapSection"
import SEO from "../components/SEO"
import TokenomicsSection from "../sections/tokenomicsSection/TokenomicsSection"

export default function Home({ data }) {
  const { isShowing, toggle } = useModal()

  const organizationSchemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Corporation",
      name: "Cryptopia Inc.",
      alternateName: "Cryptopia Metaverse",
      url: "https://cryptopia.com",
      logo: "https://cryptopia.com/icon-512.png",
      sameAs: [
        "https://www.facebook.com/cryptopiacom",
        "https://twitter.com/Cryptopia_OFCL",
        "https://www.instagram.com/cryptopia_official",
        "https://www.youtube.com/c/CryptopiaOfficial",
        "https://www.linkedin.com/company/cryptopiametaverse",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Welcome to Cryptopia",
      description:
        "Ships are about to get real! Cryptopia's foundation has been laid and it's time to join a faction. Who will you be in the new world? What ethos do you follow? Join us now on Early Access and get a head start building the metaverse.",
      thumbnailUrl: "https://img.youtube.com/vi/-g3gXKg_13w/0.jpg",
      uploadDate: "2022-04-05",
      duration: "PT1M25S",
      publisher: {
        "@type": "Organization",
        name: "Cryptopia Inc.",
        logo: {
          "@type": "ImageObject",
          url: "https://cryptopia.com/icon-60.png",
          width: 60,
          height: 60,
        },
      },
      contentUrl:
        "https://drive.google.com/file/d/1NfrlQ_tzQFp4kyapCm244ZRV3TuTdFJd/view",
      embedUrl: "https://www.youtube.com/embed/-g3gXKg_13w",
    },
  ]

  return (
    <MainLayout>
      <SEO schemaMarkup={organizationSchemaMarkup} />
      <MainConceptArtPageSection
        backgroundPlaceholderImgPath={
          data.bg1.childImageSharp.gatsbyImageData.placeholder.fallback
        }
        backgroundImgPath={
          data.bg1.childImageSharp.gatsbyImageData.images.fallback.src
        }
      >
        <div className={styles.topSection}>
          <div onClick={toggle}>
            <GatsbyImage
              loading="lazy"
              className={styles.playbutton}
              image={getImage(data.playbutton)}
              alt="Video play button"
            ></GatsbyImage>
          </div>
          <h1>Blockchain Metaverse</h1>
          <Modal isShowing={isShowing} hide={toggle}>
            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/-g3gXKg_13w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Modal>
        </div>
      </MainConceptArtPageSection>

      <MainConceptArtPageSection
        backgroundPlaceholderImgPath={
          data.bg2.childImageSharp.gatsbyImageData.placeholder.fallback
        }
        backgroundImgPath={
          data.bg2.childImageSharp.gatsbyImageData.images.fallback.src
        }
      ></MainConceptArtPageSection>

      <MainConceptArtPageSection
        backgroundPlaceholderImgPath={
          data.bg3.childImageSharp.gatsbyImageData.placeholder.fallback
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
              <div className={`col-lg-6 d-flex justify-content-center`}>
                <GatsbyImage
                  loading="lazy"
                  image={getImage(data.legacyWhitepaperGraphic)}
                  alt="Legacy whitepaper graphic"
                ></GatsbyImage>
              </div>
            </div>
          </div>
        </div>
      </MainConceptArtPageSection>

      <FactionSection
        images={[
          data.factionContainerEco,
          data.factionContainerTech,
          data.factionContainerIndustrial,
          data.factionContainerTraditional,
        ]}
      ></FactionSection>

      <GameIntroSection image={data.gameplayProductionFrame}></GameIntroSection>
      <WalletIntroSection image={data.walletFrame}></WalletIntroSection>
      <TeamSection imageData={data}></TeamSection>
      <RoadmapSection></RoadmapSection>
      <TokenomicsSection />
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

    gameplayProductionFrame: file(
      relativePath: { eq: "gameplay/production_gameplay_frame.png" }
    ) {
      ...defaultImageQuery
    }

    walletFrame: file(relativePath: { eq: "wallet/wallet_frame_mobile.png" }) {
      ...defaultImageQuery
    }

    teamAvatarAmi: file(relativePath: { eq: "team/avatars/ami_avatar.png" }) {
      ...defaultImageQuery
    }

    teamAvatarDavid: file(
      relativePath: { eq: "team/avatars/David_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarDivesh: file(
      relativePath: { eq: "team/avatars/Divesh_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarErik: file(relativePath: { eq: "team/avatars/erik_avatar.png" }) {
      ...defaultImageQuery
    }

    teamAvatarFrank: file(
      relativePath: { eq: "team/avatars/frank_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarHansco: file(
      relativePath: { eq: "team/avatars/hansco_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarJon: file(relativePath: { eq: "team/avatars/jon_avatar.png" }) {
      ...defaultImageQuery
    }

    teamAvatarLauderic: file(
      relativePath: { eq: "team/avatars/Lauderic_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarMaarten: file(
      relativePath: { eq: "team/avatars/maarten_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarMarkA: file(
      relativePath: { eq: "team/avatars/mark_a_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarMateo: file(
      relativePath: { eq: "team/avatars/mateo_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarMatt: file(relativePath: { eq: "team/avatars/matt_avatar.png" }) {
      ...defaultImageQuery
    }

    teamAvatarOguz: file(relativePath: { eq: "team/avatars/oguz_avatar.png" }) {
      ...defaultImageQuery
    }

    teamAvatarPichapen: file(
      relativePath: { eq: "team/avatars/Pichapen_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarSangho: file(
      relativePath: { eq: "team/avatars/sangho_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarStefan: file(
      relativePath: { eq: "team/avatars/stefan_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarToine: file(
      relativePath: { eq: "team/avatars/toine_avatar.png" }
    ) {
      ...defaultImageQuery
    }

    teamAvatarZimri: file(
      relativePath: { eq: "team/avatars/zimri_avatar.png" }
    ) {
      ...defaultImageQuery
    }
  }
`
