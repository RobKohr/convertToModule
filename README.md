Takes a plain js file with a collection of functions in it and outputs a module where all all of those
functions are exported (exports.) and any references to those functions are also changed to the form
exports.functionName

Usage

node convertToModule.js --inputFile=plainJSFile.js --outputFile=newModuleFile.js

This has been created for personal use to convert some specific files, but feel free to modify it and improve it if 
it doesn't completely fix your file.

Known issues:

*Doesn't export variables

*Only works with function definitions of the form
function functionName(bla)...

converting it to 
exports.functionName = function(bla)...

this should also accept
var functionName = function(bla)
and 
functionName = function(bla)


It also won't deal gracefully with functions inside a closure, but that would be beyond the scope of this.
