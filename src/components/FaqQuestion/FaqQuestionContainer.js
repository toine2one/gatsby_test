import React, { useState, useEffect } from "react"
import { AppConstants } from "../../Constants"
import FaqQuestion from "./FaqQuestion"
import * as styles from "./FaqQuestion.module.scss"
import parse from "html-react-parser"

export default function FaqQuestionContainer({ children }) {
  const [questions, setQuestions] = useState([])
  const [activeQuestionState, setActiveQuestionState] = useState(null)

  useEffect(() => {
    const questions = [
      {
        question: "What is Cryptopia?",
        answer:
          "Cryptopia is a blockchain based defi metaverse game. The game is serverless and all information is stored on and read from the blockchain. The game has elements from the so-called 4x genre like Civilization and Settlers. Big difference is that the fourth X is absent: there is no extinction in our game. There is competition between four factions, but no faction can be wiped out. It is all about explore, expand and exploit.",
      },
      {
        question: "What do you need in order to play?",
        answer:
          "Nothing! When you create a game account your multi-sig wallet is mined. Since this is a multi-sig wallet, you can store any ERC-20 compatible token. This is why we call it a metaverse DeFi game: we can bridge to other projects in our game. Not only projects that are on our 'native' chain (currently we plan Polygon), but also other chains. For example, we have very nice chats with the Avalanche team who can help build a bridge.",
      },
      {
        question: "Do you need an expensive NFT to play?",
        answer:
          "No, absolutely not. Unlike other DeFi games you can also earn tokens without an expensive NFT. The game is free to play (F2P) and play to earn (P2E). F2P is an important aspect: you don't need an expensive NFT. Cryptopia is not a game where only the first ones can earn while raising the barrier to entry. Every player can earn in our game: rich, poor and in between. How you go about it is up to you: invest your time or your assets. Or both. Players can stake other players.",
      },
      {
        question: "So, there are NFTs and tokens?",
        answer:
          "Yes! All items in the game are tradable. There are fungible tokens for resources and products like oil, gold, glass and plastic. There are also non fungible tokens for items that represent ownership or uniqueness: for example ships, blueprints for construction of buildings and title deeds.",
      },
      {
        question: "Do rich players have an advantage?",
        answer:
          "Yes, it is relatively easier for them to acquire the more expensive NFTs. However, players can pool resources in Cryptopia. Through a series of smart contracts you can agree upon the distribution of returns, profit, etc.",
      },
      {
        question: "Are you related to the Cryptopia Exchange?",
        answer:
          "No! We have nothing to do with the Cryptopia Exchange. Are you a victim of the hack? We are very sorry to hear that. For the latest information on the claims process, please visit the site of the liquidators here.",
      },
      {
        question: "Do you have NFTs for sale?",
        answer: `Yes, we have a limited amount of early access NFTs. These will give you early access to our public beta on the testnet from Q3 2022*. And you will be the first to explore Cryptopia on the mainnet from Q2 2023*! <a target="blank" href="${AppConstants["EarlyAccessURL"]}">For more info go here</a>.`,
      },
    ]
    setQuestions(questions)
  }, [activeQuestionState])

  function setActiveQuestion(ref) {
    ref !== activeQuestionState
      ? setActiveQuestionState(ref)
      : setActiveQuestionState(null)
  }

  return (
    <div className={styles.container}>
      <ul className={styles.faq}>
        {questions.map(q => (
          <FaqQuestion
            key={q.question.replaceAll(" ", "_")}
            question={q.question}
            activeQuestion={activeQuestionState}
            setActiveQuestion={setActiveQuestion}
            active={activeQuestionState === q.question.replaceAll(" ", "_")}
          >
            {parse(q.answer)}
          </FaqQuestion>
        ))}
      </ul>
    </div>
  )
}
