module.exports = {
  pathPrefix: '/fake-door',
  siteMetadata: {
    title: 'Firefox Concepts',
    description: 'A simple splash site generator for evaluating product concepts',
    repo: 'https://github.com/johngruen'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/products`,
      },
    },
    'gatsby-transformer-remark',
    {
      // TODO: Decide if we need SWs https://www.w3.org/TR/appmanifest/#usage-examples
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/firefox-logo.png', // This path is relative to the root of the site.
      },
    },
    // TODO: Gatsby V2 Beta sw.js file terminally breaks site on refresh until you manually unregister the service worker. Leaving this comment as a warning.
    //'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['node-modules'],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
