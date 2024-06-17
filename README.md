# CookieClicker-Optimal-Autobuy

Following Repository contains the JS code for a web script which can be applied to the Cookie Clicker web game by using the TamperMonkey web extension.

## To do list:

- Optimise process currently a little slow

- Stop from repeating when there isnt enough money to upgrade, currently the process repeats regardless of whether an upgrade was clicked or not. Wastes computational power

- Buggy when interacting with the site whilst script is running

## Notes For Future Adjustments

- <bold><strong>Issue with big number multiplation, leaving a small decimal at the end. Must be fixed before calculation begins</strong></bold>

- The switch case applied to adjusting the prices in only up to quadrillions unit. Should be implemented better for further progression

- First version only considers available items, should implement functionality to also calculate with the next item to be unlocked

- Could add functionality to include efficiency brought by store upgrades but requires much more functionality

- Could make into an extension, or add a gui allowing users to stop / edit the process

- 2 Modes, supposed Cheapskate mode and Greedy mode

- Cheapskate mode (similar to current model), finds the most cost effective upgrade. Does not care for gain in CPS and always buys the cheapest 1 CPS building upgrade

- Greedy mode, More emphasis on upgrading buildings which would give a larger cps upgrade rather than the cheapest one. Still takes into account price to find the most cost effective way to reach highest cps. This would take into account the increase cost of upgrading after a building has been upgraded before it has been clicked.
## Script Functionality

- [v1.0.0](./src/ccOptimizer.js) - Continously checks for most cost effective upgrade and automatically buys the building - 17/06/2024

## How to Set Up

<ol>
</ol>
