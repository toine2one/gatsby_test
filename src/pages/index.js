import React from "react"
import MainConceptArtPageSection from "../components/MainConceptArtPageSection/MainConceptArtPageSection"
import MainLayout from "../layouts/MainLayout"

export default function Home() {
  function makeid(length) {
    var result = ""
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const loopSomeContent = () => {
    const emptyArray = new Array(1000)

    return emptyArray.map(v => {
      return makeid(100)
    })
  }

  return (
    <MainLayout>
      <MainConceptArtPageSection backgroundImgPath="/bg/main_concept_art_1.png"></MainConceptArtPageSection>
      <MainConceptArtPageSection backgroundImgPath="/bg/main_concept_art_2.png"></MainConceptArtPageSection>
      <MainConceptArtPageSection backgroundImgPath="/bg/main_concept_art_3.png"></MainConceptArtPageSection>

      {loopSomeContent()}
    </MainLayout>
  )
}
