module.exports = {
  siteMetadata: {
    siteUrl: "https://www.redteaparty.cn",
    title: "红茶会我的世界",
    author: {
      name: "WJLOGWHEN",
      summary: "Headman of the Undead",
    },
    description: "红茶会我的世界服务器主页 | Red Tea Party Minecraft community survival multiplayer server",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
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
