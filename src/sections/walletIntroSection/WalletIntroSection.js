import React from "react"
import PageSection from "../../components/PageSection/PageSection"
import PageSectionColumns from "../../components/PageSection/PageSectionColumns"
import * as styles from "./WalletIntroSection.module.scss"

export default function WalletIntroSection({ image }) {
  return (
    <PageSection classes={styles.walletIntroSection}>
      <PageSectionColumns
        titleTop="Blockchain Made Easy for Everyone"
        title="Cryptopia Wallet"
        image={image}
        buttonText="Learn More"
        text={
          "Your Cryptopia account is your wallet. Non-custodial with a baked-in Multisig feature, it functions as both an in-game and dedicated stand-alone wallet. The current blockchain gaming user experience is complicated, similar to the early internet. Our integrated wallet is the solution for large adoption"
        }
      ></PageSectionColumns>
    </PageSection>
  )
}
