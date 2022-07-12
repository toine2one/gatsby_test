import React, { useState } from "react"
import { AppConstants } from "../../Constants"
import * as styles from "./SocialBulletsMobile.module.scss"

export default function SocialBulletsMobile() {
  const [opened, setOpened] = useState(false)

  return (
    <div className={`${styles.bulletMenu} ${opened ? styles.opened : ""}`}>
      <a
        target="_blank"
        href={AppConstants.FacebookURL}
        className={`${styles.socialBullet} ${styles.item1} ${styles.fb}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/icons/social/icon_fb_alt_white.png"
          alt="Social Facebook"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.TwitterURL}
        className={`${styles.socialBullet} ${styles.item2} ${styles.twitter}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/icons/social/icon_twitter_white.png"
          alt="Social Twitter"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.RedditURL}
        className={`${styles.socialBullet} ${styles.item3} ${styles.reddit}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/icons/social/icon_reddit_white.png"
          alt="Social Reddit"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.OpenseaCollectionURL}
        className={`${styles.socialBullet} ${styles.item4} ${styles.opensea}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/logos/partners/opensea_white.png"
          alt="Social OpenSea"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.YoutubeURL}
        className={`${styles.socialBullet} ${styles.item5} ${styles.youtube}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/icons/social/icon_youtube_white.png"
          alt="Social Youtube"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.InstagramURL}
        className={`${styles.socialBullet} ${styles.item6} ${styles.instagram}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/icons/social/icon_instagram.png"
          alt="Social Instagram"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.DiscordURL}
        className={`${styles.socialBullet} ${styles.item7} ${styles.discord}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/logos/partners/discord_white.png"
          alt="Social Discord"
        />
      </a>
      <div
        onClick={() => setOpened(!opened)}
        className={`${styles.socialBullet} ${styles.menu}`}
      >
        <img src="/images/icons/icon_dots_menu.png" alt="dots menu icon" />
      </div>
    </div>
  )
}
