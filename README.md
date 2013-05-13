Takes a plain js file with a collection of functions in it and outputs a module where all all of those
functions are exported (exports.) and any references to those functions are also changed to the form
exports.functionName

Usage

node convertToModule.js --inputFile=plainJSFile.js --outputFile=newModuleFile.js
