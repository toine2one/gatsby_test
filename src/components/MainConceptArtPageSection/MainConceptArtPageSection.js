import React from "react"
import * as styles from "./MainConceptArtPageSection.module.scss"

export default function MainConceptArtPageSection({
  backgroundImgPath,
  backgroundPlaceholderImgPath,
  children,
}) {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundPlaceholderImgPath})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "auto 100vh",
    backgroundColor: "gray",
  }

  return (
    <section
      className={`${styles.container} lazy-style`}
      data-bg-img={backgroundImgPath}
      style={backgroundStyle}
    >
      {children}
    </section>
  )
}