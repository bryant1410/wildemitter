// Creates the wildemitter.js source from the provided API
// specification.

/*global __dirname*/
var fs = require('fs'),
    fileName = 'wildemitter.js',
    template = fs.readFileSync(__dirname + "/src/template.js").toString(),
    context = {
        emitter: fs.readFileSync(__dirname + "/src/core.js").toString(),
        intro: fs.readFileSync(__dirname + "/src/intro.js").toString()
    },
    outputPath = __dirname + '/' + fileName;

var mustache = require('mustache'),
    yetify = require('yetify'),
    colors = require('colors');

var code = mustache.render(template, context);

console.log('\n' + yetify.logo());

fs.writeFileSync(outputPath, code, 'utf-8');
console.log(fileName.bold + ' file built.'.grey);

process.exit(0);
