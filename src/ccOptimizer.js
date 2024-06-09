// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-06-08
// @description  try to take over the world!
// @author       You
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener('load', function() {

        setTimeout(function(){
            const items = document.getElementsByClassName('product unlocked');

            console.log(items);
            console.log("HTML Collection of Products Output");
            console.log("Length :",items.length);

            for (let i=0;i<items.length;i++){
                console.log(items[i]);
            }

            console.log("HTML Collection elements Output");
            let prices = [];
            for (let i=0;i<items.length;i++){
                prices.push(items[i].lastChild.querySelector('.price').textContent);

            }
            console.log(prices);
            console.log("Prices output");

        },1000);
    });
})();