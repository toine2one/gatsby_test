import { useState } from "react"

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    if (!isShowing) {
      document.body.classList.add("stop-scrolling")
    } else {
      document.body.classList.remove("stop-scrolling")
    }

    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle,
  }
}

export default useModal
