import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageSection from "../../components/PageSection/PageSection"
import * as styles from "./WalletIntroSection.module.scss"

export default function WalletIntroSection({ image }) {
  return (
    <PageSection classes={styles.walletIntroSection}>
      <div className="container">
        <div className="row">
          <div
            className={`${styles.info} col col-lg-6 d-flex flex-column justify-content-center`}
          >
            <h3>Blockchain Made Easy for Everyone</h3>
            <h1>Cryptopia Wallet</h1>
            <p>
              Your Cryptopia account is your wallet. Non-custodial with a
              baked-in Multisig feature, it functions as both an in-game and
              dedicated stand-alone wallet. The current blockchain gaming user
              experience is complicated, similar to the early internet. Our
              integrated wallet is the solution for large adoption
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
