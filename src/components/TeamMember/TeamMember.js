import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./TeamMember.module.scss"

export default function TeamMember({ name, role, bio, image }) {
  return (
    <div className={styles.teamMemberContainer}>
      <div className={styles.teamMember}>
        <div className={styles.teamMemberAvatar}>
          <GatsbyImage
            loading="lazy"
            image={getImage(image)}
            alt="Team avatar"
          ></GatsbyImage>
        </div>
        <div className={styles.teamMemberInfo}>
          <div className={styles.teamMemberInfoName}>
            <p>{name}</p>
          </div>
          <div className={styles.teamMemberInfoRole}>
            <p>{role}</p>
          </div>
          <div className={styles.teamMemberSocial}>
            <ul></ul>
          </div>
          <div className={styles.teamMemberBio}>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
