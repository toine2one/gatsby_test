import React, { useEffect } from "react"
import * as styles from "./FaqQuestion.module.scss"

export default function FaqQuestion({
  question,
  children,
  setActiveQuestion,
  activeQuestion,
  active,
}) {
  useEffect(() => {}, [activeQuestion])

  return (
    <li
      className={active ? styles.itemActive : ""}
      onClick={() => setActiveQuestion(question.replaceAll(" ", "_"))}
    >
      <p className={styles.itemTitle}>{question}</p>
      {active ? <p className={styles.itemText}>{children}</p> : ""}
      <img src="/images/icons/icon_arrow_white.png" alt="Arrow" />
    </li>
  )
}
