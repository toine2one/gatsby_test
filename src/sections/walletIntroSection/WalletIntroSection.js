import React from "react"
import PageSection from "../../components/PageSection/PageSection"
import PageSectionColumns from "../../components/PageSection/PageSectionColumns"
import { useStaticQuery, graphql, navigate } from "gatsby"
import * as styles from "./WalletIntroSection.module.scss"

export default function WalletIntroSection({ image }) {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg/figures/bg_wavesBottom_figures.png" }) {
        ...defaultImageQuery
      }
    }
  `)

  return (
    <PageSection classes={styles.walletIntroSection} image={data.bg}>
      <PageSectionColumns
        titleTop="Blockchain Made Easy for Everyone"
        buttonClass="blue border-blue"
        title="Cryptopia Wallet"
        image={image}
        buttonText="Learn More"
        onButtonClick={() => navigate("/wallet")}
        text={
          "Your Cryptopia account is your wallet. Non-custodial with a baked-in Multisig feature, it functions as both an in-game and dedicated stand-alone wallet. The current blockchain gaming user experience is complicated, similar to the early internet. Our integrated wallet is the solution for large adoption"
        }
      ></PageSectionColumns>
    </PageSection>
  )
}
