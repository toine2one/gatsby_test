import React, { useContext, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AppContext } from "../../contexts/AppContext"
import {
  ContactProfileService,
  ContactProfileStatus,
} from "../../services/ContactProfileService"
import * as styles from "./JoinModalContent.module.scss"

export const defaultImageQuery = graphql`
  fragment defaultImageQuery on File {
    childImageSharp {
      gatsbyImageData(
        blurredOptions: { width: 10 }
        placeholder: NONE
        quality: 100
      )
    }
  }
`

export default function JoinModalContent() {
  const [emailInput, setEmailInput] = useState("")
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [emailSubscriptionStatus, setEmailSubscriptionStatus] = useState(0)
  const { contactProfile, hasContactProfile, onContactProfileChangeHandler } =
    useContext(AppContext)

  const data = useStaticQuery(graphql`
    query {
      discord: file(
        relativePath: { eq: "logos/partners/discord_white_lg.png" }
      ) {
        ...defaultImageQuery
      }

      envelop: file(relativePath: { eq: "icons/icon_email_envelope_lg.png" }) {
        ...defaultImageQuery
      }

      checkmark: file(relativePath: { eq: "icons/icon_checkmark_round.png" }) {
        ...defaultImageQuery
      }

      metamask: file(
        relativePath: { eq: "logos/partners/icon_metamask_md.png" }
      ) {
        ...defaultImageQuery
      }
    }
  `)

  const handleClickEmailSubmitAsync = async () => {
    try {
      if (validateEmail(emailInput)) {
        setEmailSubscriptionStatus(1)
        const result = await ContactProfileService.createAsync(emailInput)

        if (result) {
          setEmailSubscriptionStatus(2)
          onContactProfileChangeHandler()
        } else {
          setEmailSubscriptionStatus(-1)
        }
      }
    } catch (error) {
      console.log(error)
      setEmailSubscriptionStatus(-1)
      // TODO: show error modal
    }
  }

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleEmailInput = ev => {
    setEmailInput(ev.target.value)
    setEmailIsValid(validateEmail(ev.target.value))
  }

  const emailInputElement = () => {
    return (
      <div className={styles.emailInput}>
        <h2>Join with Email</h2>
        <input
          className="input-custom purple"
          placeholder="Enter Your Email Address"
          onChange={handleEmailInput}
        />
        <button
          className="btn-custom"
          disabled={!emailIsValid || emailSubscriptionStatus > 0}
          onClick={() => handleClickEmailSubmitAsync()}
        >
          SUBMIT
        </button>
      </div>
    )
  }

  const contactProfileCreatedMessageElement = () => {
    return (
      <div className={styles.contactProfileCreated}>
        <div className={styles.message}>
          <GatsbyImage
            className={styles.createdImage}
            image={getImage(data.envelop)}
            alt="envelope icon"
          />
          <p>
            Please check your email <br />
            and click on the verification link
          </p>
        </div>
      </div>
    )
  }

  const contactProfileVerifiedMessageElement = () => {
    return (
      <div className={styles.contactProfileVerified}>
        <div className={styles.message}>
          <GatsbyImage
            className={styles.createdImage}
            image={getImage(data.checkmark)}
            alt="checkmark icon"
          />
          <p>Successfully subscribed</p>
        </div>
      </div>
    )
  }

  const connectWithMetamaskElement = () => {
    return (
      <div className={styles.connectMetamask}>
        <h2>Connect With MetaMask</h2>
        <GatsbyImage
          className={styles.metamaskImage}
          image={getImage(data.metamask)}
          alt="MetaMask icon"
        />
        <button
          className="btn-custom"
          disabled={!emailIsValid || emailSubscriptionStatus > 0}
          onClick={() => handleClickEmailSubmitAsync()}
        >
          CONNECT
        </button>
      </div>
    )
  }

  const getEmailSubscriptionElement = () => {
    if (!hasContactProfile) {
      return emailInputElement()
    }
    if (contactProfile.status === ContactProfileStatus.CREATED) {
      return contactProfileCreatedMessageElement()
    }
    if (contactProfile.status === ContactProfileStatus.VERIFIED) {
      return contactProfileVerifiedMessageElement()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.emailSubscription}>
        {getEmailSubscriptionElement()}
      </div>
      <div className={styles.discordLink}>
        <h2>Join Discord</h2>
        <GatsbyImage
          className={styles.discordImage}
          image={getImage(data.discord)}
          alt="Discord logo"
        />
        <button className="btn-custom">JOIN</button>
      </div>
    </div>
  )
}
