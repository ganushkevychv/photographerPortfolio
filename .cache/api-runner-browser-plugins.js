module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-crisp-chat/gatsby-browser.js'),
      options: {"plugins":[],"websiteId":"6ebb07ce-cc37-45c6-af43-caaa718a66d4","enableDuringDevelop":true,"defer":true,"enableImprovedAccessibility":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#040924","theme_color":"#040924","display":"minimal-ui","icon":"src/images/cam.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
