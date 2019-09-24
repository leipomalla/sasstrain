/**
 * Project specific gulp configuration
 */

module.exports = {

    /**
     * URL for BrowserSync to mirror
     */
    devUrl: function() {
      return "http://devURL.local";
    },
  
    /**
     * JS files
     *
     * "build-file-name.js": [
     *   "../node_modules/some-module/some-module.js",
     *   "scripts/cool-scripts.js"
     * ]
     */
    js: function() {
      return {
  
        // main js to be loaded in footer
        "main.js": [
  
          // polyfill for object-fit
          "../node_modules/objectFitPolyfill/dist/objectFitPolyfill.min.js",
  
          // vanilla js version of fitvids, that makes iframe videos responsice (https://www.npmjs.com/package/fitvids)
          "../node_modules/fitvids/dist/fitvids.js",

          "scripts/main.js"
  
        ],
  
        // critical js to be loaded in <head>
        "critical.js": [
  
          // library to lazyload images and iframes that have class "lazyload"
          "../node_modules/lazysizes/lazysizes.js",
  
          // project specific critical js
          "scripts/critical.js"
  
        ],
  
      }
    },
  
    /**
     * CSS files
     *
     * "build-file-name.css": [
     *   "../node_modules/some-module/some-module.css",
     *   "styles/main.scss"
     * ]
     */
    css: function() {
      return {
  
        "style.css": [
          "scss/style.scss"
        ],
  
      }
    }
  
  };
  