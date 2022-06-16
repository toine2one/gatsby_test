import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./TeamMember.module.scss"
import TeamMemberModal from "./TeamMemberModal"
import useTeamMemberModal from "../../hooks/useTeamMemberModal"

export default function TeamMember({ name, role, bio, image }) {
  const { isShowing, toggle } = useTeamMemberModal()

  return (
    <div className={styles.container} onClick={toggle}>
      <GatsbyImage
        loading="lazy"
        className={styles.avatarImg}
        image={getImage(image)}
      ></GatsbyImage>
      <p className={styles.memberName}>{name}</p>
      <p className={styles.memberRole}>{role}</p>
      <TeamMemberModal
        name={name}
        role={role}
        image={image}
        bio={bio}
        isShowing={isShowing}
        hide={toggle}
      ></TeamMemberModal>
    </div>
  )
}
