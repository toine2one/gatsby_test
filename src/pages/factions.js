import React, { useEffect, useState } from "react"
import { Faction, FactionDataService } from "../services/FactionDataService"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./factionInfo.module.scss"
import MainLayout from "../layouts/MainLayout"
import parse from "html-react-parser"
import { getQueryParams } from "../helpers/getQueryParams"

export default function FactionInfo({ data }) {
  const [factionIsSetByUrlParam, setFactionIsSetByUrlParam] = useState(false)
  const factionDataService = new FactionDataService()
  const [selectedFaction, setSelectedFaction] = useState(
    factionDataService.get(Faction.ECO)
  )

  useEffect(() => {
    const params = getQueryParams(window.location.href)
    if (Object.keys(params).length > 0 && !factionIsSetByUrlParam) {
      setSelectedFaction(factionDataService.get(params.a))
      setFactionIsSetByUrlParam(true)
    }
  }, [selectedFaction])

  const descriptionToTwoColumns = description => {
    var parafArray = description.split("<br/><br/>")

    var first = parafArray.slice(0, parafArray.length / 2)
    var second = parafArray.slice(parafArray.length / 2, parafArray.length)

    return [first.join("<br/><br/>"), second.join("<br/><br/>")]
  }

  const getActiveTabStyleClass = faction => {
    switch (faction) {
      case "Eco":
        return styles.factionInfoTabsEcoActive
      case "Tech":
        return styles.factionInfoTabsTechActive
      case "Industrial":
        return styles.factionInfoTabsIndustrialActive
      case "Traditional":
        return styles.factionInfoTabsTraditionalActive

      default:
        break
    }
  }

  const getFactionFadedBackroundStyle = faction => {
    return {
      background: `url('${
        data[faction.toLowerCase() + "Faded"].childImageSharp.gatsbyImageData
          .images.fallback.src
      }')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "spread",
      backgroundPosition: "center",
    }
  }

  return (
    <MainLayout>
      <div className={styles.factionInfoPage}>
        <div className={`${styles.factionInfoTabs}`}>
          <div className="container">
            <div className="row">
              {factionDataService.getAll().map(f => {
                return (
                  <div className="col col-lg-3">
                    <div
                      className={`${styles.factionInfoTabsItem} ${
                        selectedFaction.name === f.name
                          ? getActiveTabStyleClass(f.name)
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedFaction(factionDataService.get(f.name))
                      }
                    >
                      {f.name}
                      <GatsbyImage
                        className={`${styles.factionInfoTabsItemImg}`}
                        style={{
                          filter:
                            selectedFaction.name === f.name
                              ? "none"
                              : "grayscale(100%)",
                        }}
                        image={getImage(data[f.name.toLowerCase() + "Badge"])}
                        alt={`Eco faction badge`}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {selectedFaction ? (
          <div className={styles.factionInfoContent}>
            <div className="container">
              <div className="row">
                <div className="col col-lg-12 flex-center-hor">
                  <GatsbyImage
                    className={``}
                    image={getImage(
                      data[selectedFaction.name.toLowerCase() + "Header"]
                    )}
                    alt={`${selectedFaction} faction header`}
                  />
                </div>
                <div className="col-lg-12">
                  <h2 style={{ color: selectedFaction.colorCode }}>
                    {selectedFaction.name} Faction
                  </h2>
                </div>
              </div>
              <div className={`row ${styles.factionInfoContentDesc}`}>
                <div className="col col-12 col-sm-12 col-lg-6">
                  {parse(
                    descriptionToTwoColumns(selectedFaction.description)[0]
                  )}
                </div>
                <div className="col col-12 col-sm-12 col-lg-6">
                  {parse(
                    descriptionToTwoColumns(selectedFaction.description)[1]
                  )}
                </div>
              </div>
              <div className="row">
                <div
                  className={`col col-lg-12 ${styles.factionInfoContentStats}`}
                >
                  <GatsbyImage
                    className={``}
                    image={getImage(
                      data[selectedFaction.name.toLowerCase() + "Stats"]
                    )}
                    alt={`${selectedFaction} faction stats`}
                  />
                </div>
              </div>
            </div>
            <div
              className={styles.factionInfoContentAdvisorBio}
              style={getFactionFadedBackroundStyle(selectedFaction.name)}
              // style="@GetFactionFadedBackgroundStyle(SelectedFaction)"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 style={{ color: selectedFaction.colorCode }}>
                      {selectedFaction.advisor.fullName} & the{" "}
                      {selectedFaction.nameAlias}
                    </h2>
                  </div>
                </div>
                <div
                  className={`row ${styles.factionInfoContentAdvisorBioText}`}
                >
                  <div className="col col-12 col-sm-12 col-lg-6">
                    {parse(
                      descriptionToTwoColumns(
                        selectedFaction.advisor.backgroundStory
                      )[0]
                    )}
                  </div>
                  <div className="col col-12 col-sm-12 col-lg-6">
                    {parse(
                      descriptionToTwoColumns(
                        selectedFaction.advisor.backgroundStory
                      )[1]
                    )}
                  </div>
                </div>
                <img
                  src="/images/gradients/gradient_1F2032_top.png"
                  className={`${styles.factionInfoContentAdvisorBioGradientTop}`}
                />
                <img
                  src="/images/gradients/gradient_1F2032_bottom.png"
                  className={`${styles.factionInfoContentAdvisorBioGradientBottom}`}
                />
              </div>
            </div>
          </div>
        ) : null}
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
    ecoBadge: file(relativePath: { eq: "factions/badges/Eco_badge.png" }) {
      ...defaultImageQuery
    }

    techBadge: file(relativePath: { eq: "factions/badges/Tech_badge.png" }) {
      ...defaultImageQuery
    }

    industrialBadge: file(
      relativePath: { eq: "factions/badges/Industrial_badge.png" }
    ) {
      ...defaultImageQuery
    }

    traditionalBadge: file(
      relativePath: { eq: "factions/badges/Traditional_badge.png" }
    ) {
      ...defaultImageQuery
    }

    ecoHeader: file(relativePath: { eq: "factions/headers/eco_header.png" }) {
      ...defaultImageQuery
    }

    techHeader: file(relativePath: { eq: "factions/headers/tech_header.png" }) {
      ...defaultImageQuery
    }

    industrialHeader: file(
      relativePath: { eq: "factions/headers/industrial_header.png" }
    ) {
      ...defaultImageQuery
    }

    traditionalHeader: file(
      relativePath: { eq: "factions/headers/traditional_header.png" }
    ) {
      ...defaultImageQuery
    }

    ecoFaded: file(
      relativePath: { eq: "factions/faded_backgrounds/bg_eco_faded.png" }
    ) {
      ...defaultImageQuery
    }

    techFaded: file(
      relativePath: { eq: "factions/faded_backgrounds/bg_tech_faded.png" }
    ) {
      ...defaultImageQuery
    }

    industrialFaded: file(
      relativePath: { eq: "factions/faded_backgrounds/bg_industrial_faded.png" }
    ) {
      ...defaultImageQuery
    }

    traditionalFaded: file(
      relativePath: {
        eq: "factions/faded_backgrounds/bg_traditional_faded.png"
      }
    ) {
      ...defaultImageQuery
    }

    ecoStats: file(relativePath: { eq: "factions/stats/eco_stats.png" }) {
      ...defaultImageQuery
    }

    techStats: file(relativePath: { eq: "factions/stats/tech_stats.png" }) {
      ...defaultImageQuery
    }

    industrialStats: file(
      relativePath: { eq: "factions/stats/industrial_stats.png" }
    ) {
      ...defaultImageQuery
    }

    traditionalStats: file(
      relativePath: { eq: "factions/stats/traditional_stats.png" }
    ) {
      ...defaultImageQuery
    }

    gradientTop: file(
      relativePath: { eq: "gradients/gradient_1F2032_top.png" }
    ) {
      ...defaultImageQuery
    }

    gradientBottom: file(
      relativePath: { eq: "gradients/gradient_1F2032_bottom.png" }
    ) {
      ...defaultImageQuery
    }
  }
`
