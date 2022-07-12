import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageSection from "../../components/PageSection/PageSection"
import * as styles from "./MintSection.module.scss"

export default function MintSection() {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg/cryptopia_under_construction.png" }) {
        ...defaultImageQuery
      }

      industrialShip: file(
        relativePath: {
          eq: "factions/flags/flag_long_ea_ships/flag_long_ea_ship_industrial.png"
        }
      ) {
        ...defaultImageQuery
      }

      techShip: file(
        relativePath: {
          eq: "factions/flags/flag_long_ea_ships/flag_long_ea_ship_tech.png"
        }
      ) {
        ...defaultImageQuery
      }

      traditionalShip: file(
        relativePath: {
          eq: "factions/flags/flag_long_ea_ships/flag_long_ea_ship_traditional.png"
        }
      ) {
        ...defaultImageQuery
      }

      ecoShip: file(
        relativePath: {
          eq: "factions/flags/flag_long_ea_ships/flag_long_ea_ship_eco.png"
        }
      ) {
        ...defaultImageQuery
      }
    }
  `)

  return (
    <PageSection image={data.bg} classes={styles.container}>
      <h1>Early Access</h1>
      <div className="container h-100 d-flex align-items-center flex-column justify-content-center">
        <div className="row flex-nowrap">
          <div className="col-lg-3 footer-section__footer__mint-option">
            <GatsbyImage
              className={styles.ship}
              image={getImage(data.ecoShip)}
              alt="Eco faction ship with flag"
            />
          </div>
          <div className="col-lg-3 footer-section__footer__mint-option">
            <GatsbyImage
              className={styles.ship}
              image={getImage(data.techShip)}
              alt="Tech faction ship with flag"
            />
          </div>
          <div className="col-lg-3 footer-section__footer__mint-option">
            <GatsbyImage
              className={styles.ship}
              image={getImage(data.industrialShip)}
              alt="Industrial faction ship with flag"
            />
          </div>
          <div className="col-lg-3 footer-section__footer__mint-option">
            <GatsbyImage
              className={styles.ship}
              image={getImage(data.traditionalShip)}
              alt="Traditional faction ship with flag"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <a href="https://cryptopia.com/early-access">
              <button className="btn-custom">GET EARLY ACCESS</button>
            </a>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
