const path = require(`path`)

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Cryptopia | Blockchain-Driven Metaverse Game",
    titleTemplate: "%s",
    description:
      "Cryptopia World is an independent city-state society based on the blockchain, where citizens can buy, sell, vote, and perform other essential activities using a safe, secure, and transparent system. Additionally, as a seasteading country, Cryptopia World lies outside of any existing nation’s borders, allowing its citizens free reign to experiment and create the community they want for themselves. Cryptopia has become humanity’s haven, the reboot of society the world needs to survive.",
    url: "https://cryptopia.com", // No trailing slash allowed!
    image: "/og-image.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@Cryptopia_OFCL",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
}
