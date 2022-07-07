import React from "react"
import FaqQuestionContainer from "../../components/FaqQuestion/FaqQuestionContainer"
import PageSection from "../../components/PageSection/PageSection"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./FaqSection.module.scss"

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

export default function FaqSection() {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg/figures/bg_space_figures.png" }) {
        ...defaultImageQuery
      }

      techAdv: file(
        relativePath: { eq: "factions/advisors/tech/thinking.png" }
      ) {
        ...defaultImageQuery
      }
    }
  `)

  return (
    <PageSection classes={styles.container} title="FAQ" image={data.bg}>
      <div className="container">
        <div className="row">
          <div className="col col-lg-7 d-flex align-items-center">
            <FaqQuestionContainer></FaqQuestionContainer>
          </div>
          <div className="col col-lg-5 d-none d-lg-flex align-items-center">
            <div className={styles.image}>
              <GatsbyImage
                className={styles.image}
                image={getImage(data.techAdv)}
                alt="Tech advisor thinking"
              />
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
