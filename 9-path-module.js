//PATH MODULE : allows us to interact with file paths

const path = require('path');
console.log(path.sep);//seperates the path

const filePath = path.join('./content','subfolder','text.txt');
console.log(filePath);//provides the file path

const base = path.basename(filePath);
console.log(base);//.basename provides the last value of a path

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);//provides the absolute path to a file
