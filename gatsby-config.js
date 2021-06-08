module.exports = {
  siteMetadata: {
    title: "Gurleen Vasir",
    menubar: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Projects',
        link: '/projects'
      }
    ]
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
