const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/vlad/Desktop/repos/photographerPortfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/vlad/Desktop/repos/photographerPortfolio/src/pages/404.js"))),
  "component---src-pages-contacts-js": hot(preferDefault(require("/home/vlad/Desktop/repos/photographerPortfolio/src/pages/contacts.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("/home/vlad/Desktop/repos/photographerPortfolio/src/pages/gallery.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/vlad/Desktop/repos/photographerPortfolio/src/pages/index.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/home/vlad/Desktop/repos/photographerPortfolio/src/pages/success.js")))
}

