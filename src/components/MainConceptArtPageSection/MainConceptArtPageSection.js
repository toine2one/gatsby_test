import React from "react"
import * as styles from "./MainConceptArtPageSection.module.scss"

export default function MainConceptArtPageSection({ backgroundImgPath }) {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImgPath})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "auto 100vh",
  }

  return (
    <section className={styles.container} style={backgroundStyle}>
      <h1>Some section TEXT here</h1>
    </section>
  )
}
