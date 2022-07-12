import React, { useEffect, useState } from "react"
import * as styles from "./MainConceptArtPageSection.module.scss"

export default function MainConceptArtPageSection({
  backgroundImgPath,
  backgroundImgPathSM,
  backgroundPlaceholderImgPath,
  classes,
  children,
}) {
  const [pageW] = useState(window.innerWidth)

  const getBackgroundImagePath = () => {
    console.log(pageW)
    if (pageW > 640) {
      return backgroundImgPath
    } else {
      console.log(backgroundImgPathSM)
      return backgroundImgPathSM
    }
  }

  const backgroundStyle = {
    backgroundImage: `url(${backgroundPlaceholderImgPath})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "auto 100vh",
  }

  return (
    <section
      className={`${styles.container} ${classes} lazy-style`}
      data-bg-img={getBackgroundImagePath()}
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
