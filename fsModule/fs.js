const path = require('path');
// const { Console } = require('console');
let fs = require('fs');

// let content = fs.readFileSync('f1.txt');
// console.log(content+"");

//  fs.writeFileSync('abc.txt','timon n pumba');

//  fs.appendFileSync('abc.txt',' Hakuna tata');

//  fs.unlinkSync('abc.txt');


 //directories
 //to make a folder
 //fs.mkdirSync('pathModule');

 //to delete a folder
//   fs.rmdirSync('pathModule');

//to check if a file exists or not
// let doesExist=fs.existsSync('fs.js');
// console.log('fs.js',doesExist);

//statusobj of file/folder
// let statusObj=fs.lstatSync('f1.txt');
// console.log(statusObj);

//
//C/USers/


// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());

let fileArr = fs.readdirSync('/Users/harsh/Desktop/pp14/fileOrganizer/dir');
// console.log(fileArr);

let srcPath='C://Users//harsh//Desktop//pp14//fileOrganizer//fsModule//f1.txt';
let destPath='C://Users//harsh//Desktop//pp14//fileOrganizer//fsModule//f2.txt';

let toBeCopiedFileName = path.basename(srcPath);
let dest = path.join('C://Users//harsh//Desktop//pp14//fileOrganizer//dir',toBeCopiedFileName);
console.log(dest);


fs.copyFileSync(srcPath,destPath);
fs.copyFileSync(srcPath,dest);

