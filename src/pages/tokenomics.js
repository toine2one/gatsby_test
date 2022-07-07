import React from "react"
import MainLayout from "../layouts/MainLayout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./tokenomics.module.scss"

export default function tokenomics({ data }) {
  console.log(data)
  return (
    <MainLayout>
      <div className={`${styles.tokenomicsPage}`}>
        <div className="container"></div>
        <section className={`${styles.tokenomics}`}>
          <div className="container">
            <div className="row">
              <div className="col col-lg-12 ">
                <header>
                  <h1>Tokenomics</h1>
                  <h2>
                    Cryptopia token (CRT) is the in-game token of Cryptopia.{" "}
                    <br />
                  </h2>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12">
                <div className={styles.subjectPoint}>
                  <div className={styles.subjectPointInfo}>
                    <div className={styles.subjectPointIndexContainer}>
                      <div className={styles.subjectPointIndex}>1</div>
                    </div>
                    <h3>Currency for Transactions</h3>
                    <p>
                      All tradeable or purchasable items in the game are
                      denominated in CRT. This goes for the resources and
                      products (fungible tokens) like oil, coal, gold, plastic,
                      circuit boards, and so on. This also applies to the NFTs:
                      title deeds, blueprints, loyalty cards, and ships, to name
                      a few.
                    </p>
                    <GatsbyImage
                      className={styles.subjectPointImg}
                      image={getImage(data.transactions)}
                      alt="Roadmap milestone 2022 Q3 - Gameplay"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12">
                <div className={styles.subjectPoint}>
                  <div className={styles.subjectPointInfo}>
                    <div className={styles.subjectPointIndexContainer}>
                      <div className={styles.subjectPointIndex}>2</div>
                    </div>
                    <h3>Quest rewards</h3>
                    <p>
                      Some quests that are successfully completed will reward
                      you with CRT.
                    </p>
                    <GatsbyImage
                      className={styles.subjectPointImg}
                      image={getImage(data.rewards)}
                      alt="Roadmap milestone 2022 Q3 - Gameplay"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12">
                <div className={styles.subjectPoint}>
                  <div className={styles.subjectPointInfo}>
                    <div className={styles.subjectPointIndexContainer}>
                      <div className={styles.subjectPointIndex}>3</div>
                    </div>
                    <h3>Voting</h3>
                    <p>
                      When you stake your tokens in a staking facility, you get
                      voting rights. These voting rights are proportional to the
                      amount of tokens staked. The more you stake, the more
                      power your vote has.{" "}
                      <a
                        target="_blank"
                        href="https://blog.cryptopia.com/blogs/post/voting-on-the-blockchain-how-does-cryptopia-do-it"
                      >
                        Read more about staking in Cryptopia here
                      </a>
                      .
                    </p>
                    <GatsbyImage
                      className={styles.subjectPointImg}
                      image={getImage(data.voting)}
                      alt="Roadmap milestone 2022 Q3 - Gameplay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.totalSupply}>
          <div className="container">
            <div className="row">
              <div className="col col-lg-12">
                <header>
                  <h1>Total Supply</h1>
                  <h2>
                    Cryptopia has a fixed amount of 10 billion CRT. This means
                    that our token is deflationary by nature.
                    <br /> The more players there are, the higher the demand for
                    CRT and, thus, the higher the value.
                  </h2>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12">
                <h3>Distribution of total supply</h3>
              </div>
            </div>
            <div className={`${styles.totalSupplyDistribution} row`}>
              <div className="col col-12 col-sm-12 col-lg-6">
                <ul>
                  <li>
                    <div className={styles.totalSupplyDistributionImg}>
                      <GatsbyImage
                        image={getImage(data.tokenomics)}
                        alt="Roadmap milestone 2022 Q3 - Gameplay"
                      />
                    </div>
                    <p>
                      The largest part is reserved for the game: <br />
                      40% (4 billion CRT) is locked in the game, waiting to be
                      claimed by players.
                    </p>
                  </li>
                  <li>
                    <div className="total-supply-distribu tion-img">
                      <GatsbyImage
                        image={getImage(data.balance)}
                        alt="Roadmap milestone 2022 Q3 - Gameplay"
                      />
                    </div>
                    <p>
                      Another 10% (1 billion CRT) is reserved for liquidity.
                    </p>
                  </li>
                  <li>
                    <div className="total-supply-distribution-img">
                      <img src="/images/tokenomics/icons/icon_tokenomics_bill.png" />
                    </div>
                    <p>
                      25% (2.5 billion CRT) is being sold to investors. There is
                      a private sale for 23% and a public sale for 2%.
                    </p>
                  </li>
                  <li>
                    <div className="total-supply-distribution-img">
                      <GatsbyImage
                        image={getImage(data.partnerships)}
                        alt="Roadmap milestone 2022 Q3 - Gameplay"
                      />
                    </div>
                    <p>
                      5% (0.5 billion CRT) is designated for partnerships:
                      consider them as reserved for promotions and airdrops in
                      other communities.
                    </p>
                  </li>
                  <li>
                    <div className="total-supply-distribution-img">
                      <GatsbyImage
                        image={getImage(data.treasure)}
                        alt="Roadmap milestone 2022 Q3 - Gameplay"
                      />
                    </div>
                    <p>20% (2 billion CRT) is reserved for company treasury.</p>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-6 total-supply-img">
                <GatsbyImage
                  image={getImage(data.totalSupply)}
                  alt="Roadmap milestone 2022 Q3 - Gameplay"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.circSupply}>
          <div className="container">
            <div className="row">
              <div className="col col-lg-12">
                <header>
                  <h2>Circulating Supply</h2>
                </header>
              </div>
            </div>
            <div className="row flex-wrap">
              <div className="col col-12 col-sm-12 col-lg-6 circ-supply-img d-flex justify-content-center">
                <GatsbyImage
                  image={getImage(data.circulatingSupply)}
                  alt="Roadmap milestone 2022 Q3 - Gameplay"
                />
              </div>
              <div className="col col-12 col-sm-12 col-lg-6 circ-supply-info d-flex flex-column justify-content-center">
                <p>
                  The circulating supply is difficult to predict. The tokens
                  held by investors and the team are subject to a vesting scheme
                  of 24 months. If and when these tokens will be available is
                  yet to be seen.
                </p>
                <p>
                  Another factor for the size of the circulating supply is the
                  rate by which the 40% in-game rewards are earned and held. We
                  of course believe that Cryptopia offers plenty of game-play
                  and fun. This is why we have confidence in a healthy in-game
                  economy and fitting circulating supply.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.funds}>
          <div className="container">
            <div className="row">
              <div className="col col-lg-12">
                <h2>Use of funds</h2>
              </div>
            </div>
            <div className="row flex-sm-wrap-reverse">
              <div
                className={`${styles.fundsInfo} col col-12 col-sm-12 col-lg-6`}
              >
                <p>
                  The proceeds of the private and public sale will further fuel
                  the development of Cryptopia. Prior to the sales, the team
                  self-funded the development for more than two years.
                </p>
                <ul>
                  <li className={styles.marketing}>
                    <p>Marketing</p>
                    <p>47%</p>
                  </li>
                  <li className={styles.legal}>
                    <p>Legal</p>
                    <p>5%</p>
                  </li>
                  <li className={styles.development}>
                    <p>Development</p>
                    <p>22.5%</p>
                  </li>
                  <li className={styles.operationalCost}>
                    <p>Operational Cost</p>
                    <p>22.5%</p>
                  </li>
                  <li className={styles.startup}>
                    <p>Start-up + HR</p>
                    <p>3%</p>
                  </li>
                </ul>
              </div>
              <div className="col col-12 col-sm-12 col-lg-6  funds-img">
                <GatsbyImage
                  image={getImage(data.funds)}
                  alt="Roadmap milestone 2022 Q3 - Gameplay"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

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

export const query = graphql`
  query {
    transactions: file(
      relativePath: { eq: "tokenomics/icon_tokenomics_coin_transactions.png" }
    ) {
      ...defaultImageQuery
    }

    rewards: file(
      relativePath: { eq: "tokenomics/icon_tokenomics_reward.png" }
    ) {
      ...defaultImageQuery
    }

    voting: file(
      relativePath: { eq: "tokenomics/icon_tokenomics_voting.png" }
    ) {
      ...defaultImageQuery
    }

    tokenomics: file(
      relativePath: { eq: "tokenomics/icons/icon_tokenomics_cryptopia.png" }
    ) {
      ...defaultImageQuery
    }

    balance: file(
      relativePath: { eq: "tokenomics/icons/icon_tokenomics_balance.png" }
    ) {
      ...defaultImageQuery
    }

    partnerships: file(
      relativePath: { eq: "tokenomics/icons/icon_tokenomics_partnership.png" }
    ) {
      ...defaultImageQuery
    }

    treasure: file(
      relativePath: { eq: "tokenomics/icons/icon_tokenomics_treasure.png" }
    ) {
      ...defaultImageQuery
    }

    totalSupply: file(
      relativePath: { eq: "tokenomics/tokenomics_total_supply.png" }
    ) {
      ...defaultImageQuery
    }

    circulatingSupply: file(
      relativePath: { eq: "tokenomics/tokenomics_circulating_supply.png" }
    ) {
      ...defaultImageQuery
    }

    funds: file(
      relativePath: { eq: "tokenomics/tokenomics_use_of_funds.png" }
    ) {
      ...defaultImageQuery
    }
  }
`
