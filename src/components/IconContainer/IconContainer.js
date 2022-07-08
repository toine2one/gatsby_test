import React, { useState } from "react"
import * as styles from "./IconContainer.module.scss"

export default function IconContainer({
  iconShowEl,
  iconClosedEl,
  onClose,
  onOpen,
}) {
  const [show, setShow] = useState()

  const toggle = () => {
    if (show) {
      setShow(false)
      onClose()
    } else {
      setShow(true)
      onOpen()
    }
  }

  return (
    <div className={styles.iconContainer} onClick={() => toggle()}>
      <div className={!show ? styles.show : ""}>{iconClosedEl}</div>
      <div className={show ? styles.show : ""}>{iconShowEl}</div>
    </div>
  )
}
