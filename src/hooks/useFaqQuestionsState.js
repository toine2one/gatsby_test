import { useState } from "react"

const useFaqQuestionsState = () => {
  const [activeQuestionState, setActiveQuestionState] = useState(null)

  function setActiveQuestion(ref) {
    if (activeQuestionState !== ref) {
      setActiveQuestionState(ref)
    } else {
      setActiveQuestionState(null)
    }
  }

  return {
    activeQuestionState,
    setActiveQuestion,
  }
}

export default useFaqQuestionsState
