// npm - global command , comes with node
// npm --version

// TWO WAYS OF USAGE :

// local dependency - use it only in this particular project [ mostly used ]
// npm i <packageName> , i stands for install

// global dependency - use it in any project [ used lesser ]
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file [ stores important info about project / package ]
// manual approach [ create package.json in the root , create properties etc... ] - manual method
// npm init [ step by step , press enter to skip ] - automatic method
// npm init -y [ everything default ]



const _ = require('lodash');

const items = [1,[2,[3,[4,[5,[6,[7]]]]]]];

const newItems = _.flattenDeep(items);// flattenDeep converts nested arrays into normal arrays

console.log(newItems);