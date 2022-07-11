import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../layouts/MainLayout"
import PageSection from "../components/PageSection/PageSection"
import PageSectionColumns from "../components/PageSection/PageSectionColumns"
import PageSectionImageCenter from "../components/PageSection/PageSectionImageCenter"
import * as styles from "./Wallet.module.scss"

export default function wallet({ data }) {
  return (
    <MainLayout>
      <div className={styles.container}>
        <PageSection classes={styles.topSection} image={data.bgTechLinesLeft}>
          <h1>Cryptopia Wallet Blockchain Made Easy for Everyone</h1>
        </PageSection>
        <PageSection image={data.bgWavesLeft}>
          <PageSectionImageCenter
            title="Transfer, Swap, Buy and Sell directly from your wallet"
            image={data.walletMain}
          ></PageSectionImageCenter>
        </PageSection>
        <PageSection image={data.bgWavesRight}>
          <PageSectionColumns
            title="Multisig Security"
            text="Your Cryptopia account is your wallet. Non-custodial with a baked-in Multisig feature, it functions as both an in-game and dedicated stand-alone wallet."
            image={data.walletMultisig}
          ></PageSectionColumns>
        </PageSection>
        <PageSection image={data.bgWavesLeft}>
          <PageSectionImageCenter
            title="Built in NFT deck"
            subtitle="Stores Native Cryptocurrencies (ETH), Tokens (ERC20) and NFT’s (ERC721)"
            image={data.walletNFTDeck}
          ></PageSectionImageCenter>
        </PageSection>
        <PageSection image={data.bgWavesRight}>
          <PageSectionColumns
            imageLeft={true}
            title="Blockchain Made Easy for Everyone"
            text="The current blockchain gaming user experience is complicated, similar to the early internet. Our integrated wallet is the solution for large adoption:"
            image={data.walletSwap}
          ></PageSectionColumns>
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
    bgTechLinesLeft: file(
      relativePath: { eq: "bg/bg_connectionLines_minimal_figures_left.png" }
    ) {
      ...defaultImageQuery
    }

    bgWavesRight: file(relativePath: { eq: "bg/bg_waves_right.png" }) {
      ...defaultImageQuery
    }

    bgWavesLeft: file(relativePath: { eq: "bg/bg_waves_left.png" }) {
      ...defaultImageQuery
    }

    walletMain: file(relativePath: { eq: "wallet/wallet_frame_mobile.png" }) {
      ...defaultImageQuery
    }

    walletMultisig: file(
      relativePath: { eq: "wallet/wallet_multisig_concept_transparant.png" }
    ) {
      ...defaultImageQuery
    }

    walletNFTDeck: file(
      relativePath: { eq: "wallet/wallet_nft_deck_title_deed.png" }
    ) {
      ...defaultImageQuery
    }

    walletSwap: file(relativePath: { eq: "wallet/wallet_swap.png" }) {
      ...defaultImageQuery
    }
  }
`
