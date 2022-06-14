import React from "react"
import ReactDOM from "react-dom"
import * as styles from "./Modal.module.scss"

const Modal = ({ isShowing, hide, children }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.container}>
            <div className={styles.overlay} onClick={hide}></div>
            <div className={styles.modal}>
              <img
                onClick={hide}
                className={styles.closeButton}
                src="/svg/icons/cross_white.svg"
              />
              {children}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null
}

export default Modal
