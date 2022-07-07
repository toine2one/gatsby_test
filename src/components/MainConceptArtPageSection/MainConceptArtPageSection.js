import React from "react"
import * as styles from "./MainConceptArtPageSection.module.scss"

export default function MainConceptArtPageSection({
  backgroundImgPath,
  backgroundPlaceholderImgPath,
  classes,
  children,
}) {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundPlaceholderImgPath})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "auto 100vh",
  }

  return (
    <section
      className={`${styles.container} ${classes} lazy-style`}
      data-bg-img={backgroundImgPath}
      style={backgroundStyle}
    >
      <img
        className={styles.bgImg}
        src={backgroundPlaceholderImgPath}
        alt="Background placeholder"
      />
      {children}
    </section>
  )
}
