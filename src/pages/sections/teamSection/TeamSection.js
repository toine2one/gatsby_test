import React from "react"
import PageSection from "../../../components/PageSection/PageSection"
import TeamMember from "../../../components/TeamMember/TeamMember"
import * as styles from "./TeamSection.module.scss"

export default function TeamSection() {
  return (
    <PageSection classes={styles.container}>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade vh-100"
        data-bs-ride="carousel"
        data-interval="false"
      >
        <div className="carousel-inner h-100">
          <div className="carousel-item active d-flex align-items-center justify-content-center h-100 w-100">
            <div style={{ color: "white" }} className="">
              YOOO 1
            </div>
          </div>
          <div class="carousel-item d-flex align-items-center justify-content-center h-100 w-100">
            <div style={{ color: "white" }} className="">
              YOOO 2
            </div>
          </div>
          <div class="carousel-item d-flex align-items-center justify-content-center h-100 w-100">
            <div style={{ color: "white" }} className="">
              YOOO 3
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </PageSection>
  )
}
