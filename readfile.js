var fs = require("fs");
fs.readFile('firstName.txt',function(err, text1){
    fs.readFile('lastName.txt',function(err, text2){
        let text = text1+text2;
        fs.writeFile('fullName.txt', text, function(err, result) {
            if(err) console.log('error', err)
        });
    });
});
