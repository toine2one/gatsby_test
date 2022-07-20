const devMode = false
export let AppConstants = {}

const shared = {
  TwitterURL: "https://twitter.com/Cryptopia_OFCL",
  RedditURL: "https://www.reddit.com/r/Cryptopia_Official",
  InstagramURL: "https://www.instagram.com/cryptopia_official/",
  FacebookURL: "https://www.facebook.com/cryptopiacom",
  TelegramURL: "https://t.me/cryptopia_world",
  DiscordURL: "https://discord.gg/cryptopia",
  YoutubeURL: "https://www.youtube.com/c/CryptopiaOfficial",
  Medium: "https://blog.cryptopia.com/",
  OpenseaCollectionURL: "https://opensea.io/collection/cryptopia-metaverse",
  EarlyAccessURL: "https://cryptopia.com/early-access",
}

if (devMode) {
  // ------ DEVELOPMENT MODE ------
  AppConstants = {
    IDENTITY_API_BASE_URL: "https://localhost:7073",
    ...shared,
  }
} else {
  // ------ PRODUCTION MODE ------
  AppConstants = {
    IDENTITY_API_BASE_URL: "https://cryptopia-identity-api.azurewebsites.net",
    ...shared,
  }
}
