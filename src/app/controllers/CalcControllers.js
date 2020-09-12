const { json } = require('express');
const fs = require('fs');

class CalcControllers {
    "use strict";
    // [GET] /comments
    index(req, res) {
        "use strict";
        var str = "";

        for(var k in req.query) {
            if(req.query[k] === ' ') {
                str += "+" + " ";
                continue;
            }
            if(req.query[k] === 'and') {
                str += "&" + " ";
                continue;
            }
            str += req.query[k] + " ";
        }
        str = str.substr(0, str.length - 1);

        // write
        fs.writeFileSync('input.txt', str);

        // execute exe file
        var exec = require('child_process').exec;

        var result = '';

        var child = exec('Project1.exe input.txt src/public/output.txt');

        child.stdout.on('data', function(data) {
            result += data;
        });

        child.on('close', function() {
            var result = "";
            console.log('done');
            result = fs.readFileSync('src/public/output.txt', 'utf8')
            res.send(result);
        });
    }
}

module.exports = new CalcControllers;