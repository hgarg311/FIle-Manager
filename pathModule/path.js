let path = require('path');
let fs = require('fs');

let inputArr=process.argv.slice(2);
 //console.log(inputArr);

let fileName = inputArr[0];
let content = inputArr[1];

// console.log('fileName',fileName);
// console.log('content',content);

let currentPath= process.cwd();
// console.log(currentPath);

let joinedPath = path.join(currentPath,'abc','def.txt');
// console.log(joinedPath);

let file = path.basename(' ./red.js');
// console.log(file);

let extName = path.extname('\Users\harsh\Desktop\pp14\fileOrganizer\pathModule> node path.js');
// console.log(extName);