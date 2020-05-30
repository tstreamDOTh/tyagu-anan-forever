module.exports = {
  siteMetadata: {
    title: `Aananya Weds Thiyagaraj`,
    description: `The most anticipated wedding of the decade`,
    author: `thiyagaraj`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#9990d7`,
        theme_color: `#9990d7`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCgEOWBv7WXdwdtY6RWC00T4qXQUYjrnag",
          authDomain: "funcky.firebaseapp.com",
          databaseURL: "https://funcky.firebaseio.com",
          projectId: "funcky",
          storageBucket: "funcky.appspot.com",
          messagingSenderId: "970379730199",
          appId: "1:970379730199:web:9b0730a99449e11722eb52",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
