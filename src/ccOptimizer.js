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

        setTimeout(async function(){

            //------------------------------------------------------------------------------
            //GET LIST OF ALL AVAILABLE BUILDINGS
            //------------------------------------------------------------------------------
            const items = document.getElementsByClassName('product unlocked');

            console.log(items);
            console.log("HTML Collection of Products Output");
            console.log("Length :",items.length);

            for (let i=0;i<items.length;i++){
                console.log(items[i]);

            }
            //------------------------------------------------------------------------------
            //1)GET PRICE OF EACH BUILDING
            //2)CONVERT PRICE TO NUMERICAL VALUE
            //------------------------------------------------------------------------------
            console.log("HTML Collection elements Output");
            //1)
            let prices = [];
            for (let i=0;i<items.length;i++){
                prices.push(items[i].lastChild.querySelector('.price').textContent);

            }
            console.log(prices);
            console.log("Prices output");
            let adjustedPrice = [];
            //2)
            // TO FIX: DOES NOT WORK FOR PRICES LESS THAN A MILLION AS IT USEES COMMA, AND ALSO NO CASE FOR THIS
            //Above fixed
            for(let i=0;i<prices.length;i++){
                let index = prices[i].indexOf(' ');
                let unit = prices[i].substring(index+1);
                let temp = prices[i].substring(0,index);
                temp = temp.replace(/,/g,'');
                console.log(unit);
                switch(unit){
                    case "million":
                        adjustedPrice.push(parseFloat(temp)*1000000);
                        break;
                    case "billion":
                        adjustedPrice.push(parseFloat(temp)*1000000000);
                        break;
                    case "trillion":
                        adjustedPrice.push(parseFloat(temp)*1000000000000);
                        break;
                    case "quadrillion":
                        adjustedPrice.push(parseFloat(temp)*1000000000000000);
                        break;
                    default:
                        adjustedPrice.push(parseFloat(temp));
                }

            }
            console.log(adjustedPrice);
            //-----------------------------------------------------------------------------
            //GET LIST OF COOKIES PER BER BUILDING
            //-----------------------------------------------------------------------------
            let cookies = [];
            // Simulates hover over each building, gets tooltip element for each and get cookies
            async function simulateHover(){
                console.log("Simulation started");
                let targetE;
                for (let i = 0;i<items.length;i++){
                    targetE = document.getElementById('product'+i);
                    console.log(i);
                    if (targetE){
                        await new Promise(resolve =>{
                            Game.tooltip.dynamic = 1;
                            Game.tooltip.draw(this, function(){
                                return Game.ObjectsById[i].tooltip();
                            },'store');
                            Game.tooltip.wobble();

                            targetE.dispatchEvent(new Event('mouseover'));
                            let cookieText;
                            setTimeout(() =>{
                                let tooltip = document.querySelector('#tooltip');
                                if (tooltip){
                                    cookieText = tooltip.querySelector('#tooltipBuilding').children.item(7).textContent;
                                    cookies.push(cookieText);
                                }else{
                                    console.log("No tooltip");
                                }
                                targetE.dispatchEvent(new Event('mouseout'));
                                resolve();
                            },50);
                        });

                    }else{
                        console.log('Target element not found');
                    }
                }
                console.log(cookies);
            }

            await simulateHover();
            //------------------------------------------------------------------------------------------------------------
            //1)USES REGEX TO GET THE NUMERICAL NUMBER OF COOKIES EACH BUILDING PRODUCES
            //2)CONVERTS STRING TO INTEGER VALUE
            //-----------------------------------------------------------------------------------------------------------

            //1)
            const numberReg = /\d+,?\.?\d+/;
            const unitReg = /\b\w*illion\b/;
            let cookiesNum = [];
            let cookiesUnit = [];
            let adjustedCookies = [];
            for (let i =0;i<cookies.length;i++){

                cookiesNum.push(cookies[i].match(numberReg)[0].replace(/,/g,''));
                let temp = cookies[i].match(unitReg);
                if(temp){
                    cookiesUnit.push(temp[0]);
                }else{
                    cookiesUnit.push(null);
                   }
            }

            console.log(cookiesNum);
            console.log(cookiesUnit);
            //2
            for(let i = 0;i<cookies.length;i++){
                switch(cookiesUnit[i]){
                    case "million":
                        adjustedCookies.push(parseFloat(cookiesNum[i])*1000000);
                        break;
                    case "billion":
                        adjustedCookies.push(parseFloat(cookiesNum[i])*1000000000);
                        break;
                    default:
                        adjustedCookies.push(parseFloat(cookiesNum[i]));
                }


            }
            console.log(adjustedCookies);

        },1000);
    });
})();