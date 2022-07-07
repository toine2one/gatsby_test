import React from "react"
import * as styles from "./factionInfo.module.scss"

export default function factionInfo() {
  return (
    <div>
      <div class="faction-info-page">
        <div class="faction-info-tabs">
          <div class="container">
            <div class="row">
              <div class="col col-lg-3">
                <div class="faction-info-tabs-item">
                  Eco
                  <img
                    id="faction-badge-eco"
                    src="/images/factions/Badges/Eco_badge.png"
                    alt="Eco faction"
                  />
                </div>
              </div>
              <div class="col col-lg-3">
                <div class="faction-info-tabs-item">
                  Tech
                  <img
                    id="faction-badge-tech"
                    src="/images/factions/Badges/Tech_badge.png"
                    alt="Tech faction"
                  />
                </div>
              </div>
              <div class="col col-lg-3">
                <div class="faction-info-tabs-item">
                  Tech
                  <img
                    id="faction-badge-tech"
                    src="/images/factions/Badges/Tech_badge.png"
                    alt="Tech faction"
                  />
                </div>
              </div>
              <div class="col col-lg-3">
                <div class="faction-info-tabs-item">
                  Traditional
                  <img
                    id="faction-badge-traditional"
                    src="/images/factions/Badges/Traditional_badge.png"
                    alt="Traditional faction"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="faction-info-content">
          <div class="container">
            <div class="row">
              <div class="col col-lg-12 flex-center-hor">
                <img
                  class="faction-info-content-header-img"
                  src="@SelectedFactionData.HeaderImagePath"
                  alt="Alternate Text"
                />
              </div>
              <div class="col-lg-12">
                <h2 style="color: @SelectedFactionData.ColorCode">
                  @SelectedFactionData.Name Faction
                </h2>
              </div>
            </div>
            <div class="row faction-info-content-desc">
              <div class="col col-12 col-sm-12 col-lg-6">
                @((MarkupString)TextToTwoColumns(SelectedFactionData.Description).Item1)
              </div>
              <div class="col col-12 col-sm-12 col-lg-6">
                @((MarkupString)TextToTwoColumns(SelectedFactionData.Description).Item2)
              </div>
            </div>
            <div class="row">
              <div class="col col-lg-12 faction-info-content-stats">
                <img
                  src="@SelectedFactionData.StatsImagePath"
                  alt="@SelectedFactionData.Name stats"
                />
              </div>
            </div>
          </div>
          <div
            class="faction-info-content-advisor-bio"
            style="@GetFactionFadedBackgroundStyle(SelectedFaction)"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h2 style="color: @SelectedFactionData.ColorCode">
                    @SelectedFactionData.FactionAdvisorInfo.FullName &
                    @SelectedFactionData.NameAlias
                  </h2>
                </div>
              </div>
              <div class="row faction-info-content-advisor-bio-text">
                <div class="col col-12 col-sm-12 col-lg-6">
                  @((MarkupString)TextToTwoColumns(
                  SelectedFactionData.FactionAdvisorInfo.BackgroundStory).Item1)
                </div>
                <div class="col col-12 col-sm-12 col-lg-6">
                  @((MarkupString)TextToTwoColumns(
                  SelectedFactionData.FactionAdvisorInfo.BackgroundStory).Item2)
                </div>
                <img
                  src="/images/gradients/gradient_1F2032_top.png"
                  class="faction-info-content-advisor-bio-gradient-top"
                />
                <img
                  src="/images/gradients/gradient_1F2032_bottom.png"
                  class="faction-info-content-advisor-bio-gradient-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
