let fs=require('fs');
let path=require('path');
let inputArr=process.argv.slice(2);
let inputDir=inputArr[0];

let allEntities = fs.readdirSync(inputDir);
let content="";
for(let i=0;i<allEntities.length;i++)
{
    let entityName=allEntities[i];
    console.log(entityName);
    let eName=path.join(inputDir,entityName);
    let statusObj = fs.lstatSync(eName);
    console.log(statusObj);
    let isFile= statusObj.isFile();
    if(isFile){
        let extName=path.extname(eName);
        if(extName=='.txt'){
            content+=fs.readFileSync(eName);
        }
    }
}
console.log(content);
let summaryFile='C:/Users/harsh/Desktop/pp14/fileOrganizer/summary.txt';
fs.writeFileSync(summaryFile,content);