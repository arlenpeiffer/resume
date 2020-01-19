module.exports = {
  siteMetadata: {
    title: `Arlen Peiffer — Resume`,
    description: `Resume & personal website for Arlen Peiffer, a self-taught front end develper based in Los Angeles, California`,
    author: `@arlenpeiffer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arlen Peiffer — Resume`,
        short_name: `Arlen Peiffer`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#6A3FCE`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
