import React from "react"
import useModal from "../../hooks/useModal"
import JoinModalContent from "../JoinModalContent/JoinModalContent"
import Modal from "../Modal/Modal"
import * as styles from "./MobileNavMenu.module.scss"

export default function MobileNavMenu({ show }) {
  const { isShowing, toggle } = useModal()

  return (
    <nav
      className={`${styles.mobileNavMenu} ${
        show ? styles.mobileNavMenuShow : ""
      }`}
    >
      <div className={styles.content}>
        <div className={styles.joinBox}>
          <button className={`btn-custom blue`} onClick={toggle}>
            JOIN NOW
          </button>
        </div>
        <ul className={styles.list}>
          <li className={styles.header}>Pages</li>
          <li className={styles.navigate}>
            <a>Home</a>
          </li>
          <li className={styles.navigate}>
            <a>Game</a>
          </li>
          <li className={styles.navigate}>
            <a>Wallet</a>
          </li>
        </ul>
      </div>
      <Modal isShowing={isShowing} hide={toggle}>
        <JoinModalContent></JoinModalContent>
      </Modal>
    </nav>
  )
}
