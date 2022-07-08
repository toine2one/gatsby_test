import React from "react"
import * as styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className="container">
          <div className="row flex-wrap">
            <div className="col-lg-6">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-12 padding-sides-0">
                    <div className={styles.linkLists}>
                      <ul className={styles.list}>
                        <li className={styles.title}>Website</li>
                        <li>
                          <a href="/home">Home</a>
                        </li>
                        <li>
                          <a href="/game">Game</a>
                        </li>
                        <li>
                          <a href="/wallet">Wallet</a>
                        </li>
                      </ul>
                      <ul className={styles.list}>
                        <li className={styles.title}>Cryptopia</li>
                        <li>
                          <a
                            target="_blank"
                            href="https://support.cryptopia.com/"
                          >
                            Support
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://blog.cryptopia.com">
                            Blog
                          </a>
                        </li>
                      </ul>
                      <ul className={styles.list}>
                        <li className={styles.title}>Downloads</li>
                        <li>
                          <a
                            target="_blank"
                            href="https://github.com/cryptopia-com/whitepaper-legacy/blob/main/Cryptopia_Legacy__White_Paper.pdf"
                          >
                            Legacy White-Paper
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://github.com/cryptopia-com/lightpaper/blob/main/Cryptopia%20Litepaper.pdf"
                          >
                            Light-Paper
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="/Downloads/Logo_pack.zip">
                            Logo Pack
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="/Downloads/Art_pack.zip">
                            Art Pack
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-6 padding-sides-0">
              <div className="col col-lg-7 col-12 col-sm-12 padding-sides-0">
                <p className={styles.partnersTitle}>Partners</p>
                <div className={styles.partners}>
                  <ul>
                    <li>
                      <a target="_blank" href="https://daxio.com/">
                        <img
                          src="https://imagedelivery.net/AEeMo_nDMhzwvZCx83W_Xg/9b48511f-aaec-4c3c-98fe-d14eca836f00/public"
                          alt="Daxio partner"
                        />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://dotnet.microsoft.com/">
                        <img
                          src="https://imagedelivery.net/AEeMo_nDMhzwvZCx83W_Xg/ebf1c832-1ef4-4584-a42c-3bf8509f7900/public"
                          alt="Dotnet partner"
                        />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://polygon.technology/">
                        <img
                          src="https://imagedelivery.net/AEeMo_nDMhzwvZCx83W_Xg/fdd2db0f-f505-43ff-7e5c-1eb7d27aa300/public"
                          alt="Polygon partner"
                        />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://opensea.io/">
                        <img
                          src="https://imagedelivery.net/AEeMo_nDMhzwvZCx83W_Xg/d8a596f5-9ef4-4e4a-6e6b-2d5ae1a8b100/public"
                          alt="OpenSea partner"
                        />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://ethereum.org/en/">
                        <img
                          src="https://imagedelivery.net/AEeMo_nDMhzwvZCx83W_Xg/970abfd4-eca7-43fc-c46f-43caffd1bb00/public"
                          alt="Ethereum partner"
                        />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://nethereum.com/">
                        <img
                          src="https://imagedelivery.net/AEeMo_nDMhzwvZCx83W_Xg/3c1f196d-cc79-437f-a5fc-75d45df71d00/public"
                          alt="Nethereum partner"
                        />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://unity.com/">
                        <img
                          src="https://imagedelivery.net/AEeMo_nDMhzwvZCx83W_Xg/ca5c4258-a475-4396-1075-940971ee8000/public"
                          alt="Unity partner"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerEnd}>
        <div className="container">
          <div className="row">
            <div className="col col-6 col-lg-6 padding-sides-0 flex-center-ver">
              <p>Copyright © {new Date().getFullYear()} Cryptopia Ltd.</p>
            </div>
            <div className="col col-6 col-lg-6 padding-sides-0 nav__social flex-center-ver"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
