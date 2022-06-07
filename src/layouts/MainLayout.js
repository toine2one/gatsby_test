import React from "react"
import "../styles/global.scss"

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <div>
        <div className="main-layout__content">{children}</div>
      </div>
    </div>
  )
}
