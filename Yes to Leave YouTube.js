// ==UserScript==
// @name        Yes to leave YouTube
// @namespace   veringsek
// @match       https://www.youtube.com/redirect*
// @grant       none
// @version     1.0
// @author      veringsek
// @description Open the link automatically on YouTube redirect page.
// ==/UserScript==

document.getElementById('invalid-token-redirect-goto-site-button').click();