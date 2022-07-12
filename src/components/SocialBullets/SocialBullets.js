import React from "react"
import * as styles from "./SocialBullets.module.scss"
import { AppConstants } from "../../Constants"

export default function SocialBullets() {
  return (
    <div className={styles.socialBullets}>
      <a
        target="_blank"
        href={AppConstants.FacebookURL}
        className={`${styles.socialBullet} ${styles.fb}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/icons/social/icon_fb_alt_white.png"
          alt="Social Facebook"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.TwitterURL}
        className={`${styles.socialBullet} ${styles.twitter}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/icons/social/icon_twitter_white.png"
          alt="Social Twitter"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.RedditURL}
        className={`${styles.socialBullet} ${styles.reddit}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/icons/social/icon_reddit_white.png"
          alt="Social Reddit"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.OpenseaCollectionURL}
        className={`${styles.socialBullet} ${styles.opensea}`}
      >
        <img
          className={styles.hoverScale}
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/logos/partners/opensea_white.png"
          alt="Social OpenSea"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.YoutubeURL}
        className={`${styles.socialBullet} ${styles.youtube}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/icons/social/icon_youtube_white.png"
          alt="Social Youtube"
        />
      </a>
      <a
        target="_blank"
        href={AppConstants.InstagramURL}
        className={`${styles.socialBullet} ${styles.instagram}`}
      >
        <img
          src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/icons/social/icon_instagram.png"
          alt="Social Instagram"
        />
      </a>
      <div className={styles.discordContainer}>
        <a
          target="_blank"
          href={AppConstants.DiscordURL}
          className={`${styles.socialBullet} ${styles.discord}`}
        >
          <img
            src="https://cryptopia.com/cdn-cgi/image/format=auto,quality=100/images/logos/partners/discord_white.png"
            alt="Social Discord"
          />
        </a>
      </div>
    </div>
  )
}
