const fs = require("fs");

// Step1 - Create and Write a text file
fs.writeFile('report.txt', 'Today Live Session attendance marked below', 
    (err) => {
    if(err){
        console.log("File Writing Error", err);
        return;
    }
    console.log("File Created and Content added");
});

// Step2 - Read the same file
fs.readFile('report.txt', 'utf8',
    (err, data) => {
        if(err){
            console.log("File Cannot be Read", err)
        }
        console.log(data);
    }
)