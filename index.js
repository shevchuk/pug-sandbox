const pug = require('pug');
const fs = require('fs');

// Compile the source code
const compiledFunction = pug.compileFile('template.pug');

// Render a set of data
const compiled = compiledFunction();
const compiledFileName = 'template.html';

fs.writeFile(`./${compiledFileName}`, compiled, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log(`The file '${compiledFileName}' was saved!`);
}); 
