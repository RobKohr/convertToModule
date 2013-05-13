var argv = require('optimist').argv;

var filePath = argv.inputFile;
var outputPath = argv.outputFile;

var fs = require('fs');
//node convertToModule.js --inputFile=offlineTransaction.js 

var file = fs.readFileSync(process.cwd()+'/'+filePath)+'';
var pattern = /function\ ([a-zA-Z0-9]+)/g;
var matches = file.match(pattern);
var functions = [];
for(var i in matches){
    var match = matches[i];
    match = match.replace(/function\ /, '');
    functions[i] = match;
}
for(var i in functions){
    var f = functions[i];
    console.log(f);
    var re = new RegExp(f, 'g'); 
    file = file.replace(re, 'exports.'+f+'', 'g');
    var re = new RegExp("function\\ exports\\."+f+""); 
    file = file.replace(re, 'exports.'+f+' = function');
}

fs.writeFile(outputPath, file);
