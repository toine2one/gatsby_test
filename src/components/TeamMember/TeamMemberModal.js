import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./TeamMemberModal.module.scss"
import ReactDOM from "react-dom"

const TeamMemberModal = ({ name, role, bio, image, isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.container}>
            <div className={styles.overlay} onClick={hide}></div>
            <div className={styles.modal}>
              <GatsbyImage
                className={styles.avatarImg}
                image={getImage(image)}
              ></GatsbyImage>
              <p className={styles.memberName}>{name}</p>
              <p className={styles.memberRole}>{role}</p>
              <p className={styles.memberBio}>{bio}</p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null

export default TeamMemberModal
