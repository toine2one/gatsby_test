import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Modal from "../Modal/Modal"
import JoinModalContent from "../JoinModalContent/JoinModalContent"
import useModal from "../../hooks/useModal"
import IconContainer from "../IconContainer/IconContainer"
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu"
import * as styles from "./NavBar.module.scss"

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

export default function NavBar() {
  const { isShowing, toggle } = useModal()
  const [showMobileMenu, setShowMobileMenu] = useState()

  const data = useStaticQuery(graphql`
    query {
      cryptopiaLogoTextWhite: file(
        relativePath: { eq: "logos/logo_cryptopia_text_white.png" }
      ) {
        ...defaultImageQuery
      }
    }
  `)

  return (
    <div>
      <nav className={`${styles.container}`}>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col col-lg-2 h-100 d-flex align-items-center">
              <Link to="/">
                <GatsbyImage
                  className={styles.logo}
                  image={getImage(data.cryptopiaLogoTextWhite)}
                ></GatsbyImage>
              </Link>
            </div>
            <div className="col col-lg-8 h-100 d-flex justify-content-center align-items-center">
              <ul className="d-none d-lg-block">
                <li>Home</li>
                <li>Story</li>
                <li>Game</li>
                <li>Wallet</li>
                <li>Team</li>
                <li>Roadmap</li>
                <li>Faq</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="col col-lg-2 h-100 d-flex justify-content-end align-items-center">
              <button
                className={`${styles.joinButton} btn-custom blue d-none d-lg-block`}
                onClick={toggle}
              >
                JOIN NOW
              </button>
              <div className="d-lg-none">
                <IconContainer
                  iconClosedEl={<img src="/svg/icons/icon_hamburgerMenu.svg" />}
                  iconShowEl={<img src="/svg/icons/cross_white.svg" />}
                  onOpen={() => setShowMobileMenu(true)}
                  onClose={() => setShowMobileMenu(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <MobileNavMenu show={showMobileMenu}></MobileNavMenu>

      <Modal isShowing={isShowing} hide={toggle}>
        <JoinModalContent></JoinModalContent>
      </Modal>
    </div>
  )
}
