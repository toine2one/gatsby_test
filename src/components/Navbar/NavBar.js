import React, { useState } from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Modal from "../Modal/Modal"
import JoinModalContent from "../JoinModalContent/JoinModalContent"
import useModal from "../../hooks/useModal"
import IconContainer from "../IconContainer/IconContainer"
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu"
import * as styles from "./NavBar.module.scss"
import { AppConstants } from "../../Constants"

export default function NavBar() {
  const { isShowing, toggle } = useModal()
  const [showMobileMenu, setShowMobileMenu] = useState()
  const [scrollPosY, setScrollPosY] = useState(0)

  document.addEventListener("scroll", () => {
    setScrollPosY(window.scrollY)
  })

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
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/game">
                  <li>Game</li>
                </Link>
                <Link to="/wallet">
                  <li>Wallet</li>
                </Link>
                <Link to="/factions">
                  <li>Factions</li>
                </Link>
                <Link to="/tokenomics">
                  <li>Tokenomics</li>
                </Link>
                <Link to={AppConstants["Medium"]} target="_blank">
                  <li>Blog</li>
                </Link>
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
        <div
          className={`${styles.navMint} ${
            scrollPosY > 50 ? styles.compact : ""
          }`}
        >
          <img className={styles.mintLight} src="/images/mint_bar/light.png" />
          <div className={styles.mintMessage}>
            <img
              className="d-none d-md-block"
              src="/images/mint_bar/segments_left.png"
            />
            <h2>GET YOUR EARLY-ACCESS SHIP NOW</h2>
            <img
              className="d-none d-md-block"
              src="/images/mint_bar/segments_right.png"
            />
          </div>
          <a href="https://cryptopia.com/early-access" target="_blank">
            <img
              className={styles.mintButton}
              src="/images/mint_bar/mint_button.webp"
            />
          </a>
        </div>
      </nav>

      <MobileNavMenu show={showMobileMenu}></MobileNavMenu>

      <Modal isShowing={isShowing} hide={toggle}>
        <JoinModalContent></JoinModalContent>
      </Modal>
    </div>
  )
}
