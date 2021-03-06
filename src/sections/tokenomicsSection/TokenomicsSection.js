import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageSection from "../../components/PageSection/PageSection"
import { useStaticQuery, graphql, navigate } from "gatsby"
import * as styles from "./TokenomicsSection.module.scss"

export default function TokenomicsSection({ image }) {
  const data = useStaticQuery(graphql`
    query {
      tokenomics: file(
        relativePath: { eq: "tokenomics/tokenomics_total_supply.png" }
      ) {
        ...defaultImageQuery
      }

      bg: file(relativePath: { eq: "tokenomics/bg/bg_dots_middle.png" }) {
        ...defaultImageQuery
      }
    }
  `)

  return (
    <PageSection classes={styles.container} image={data.bg}>
      <div className="container">
        <div className="row flex-wrap-reverse">
          <div
            className={`${styles.info} col col-12 col-sm-12 col-lg-6 d-flex flex-column justify-content-center`}
          >
            <h1>Tokenomics</h1>
            <h3 className="d-none d-md-block">
              Cryptopia token (CRT) is the in-game token of Cryptopia
            </h3>
            <p>
              Cryptopia has a fixed amount of 10 billion CRT. This means that
              our token is deflationary by nature. The more players there are,
              the higher the demand for CRT and, thus, the higher the value.
            </p>
            <button
              onClick={() => navigate("/tokenomics")}
              className={`${styles.button} btn-custom blue border-blue`}
            >
              Go to tokenomics page
            </button>
          </div>
          <div className="col col-lg-6 col-12 col-sm-12">
            <GatsbyImage
              image={getImage(data.tokenomics)}
              alt="Roadmap milestone 2022 Q1 - NFT Marketplace"
            />
          </div>
        </div>
      </div>
    </PageSection>
  )
}
