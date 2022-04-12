const eventModule = require("./event");
const eventTest = new eventModule();
const readline = require('readline');
const fs = require("fs");

// **Task 1: (Event)**
eventTest.on('data', function (data){
    // some code
    console.log("This data has been sent: " + data);
})
eventTest.emit('data', "Test Data\n");

// **Other Tasks**
// Create file sync
fs.writeFileSync("Test.txt", `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Culpa rerum id at est rem aut accusamus, qui ipsa ipsum fugiat voluptate in eos quisquam tenetur atque quaerat dignissimos distinctio nostrum.`);
// Create file async
fs.writeFile("Test-async.txt", "Test data", (err, data) => {});

// Read file by 'readline'
const rl = readline.createInterface({
    input: fs.createReadStream('Test.txt'),
    crlfDelay: Infinity
});

rl.on('line', function(line){
    console.log(`Line from file: ${line}`);
})

// Read file sync
let data = fs.readFileSync("test.txt");
console.log("*********************************");
console.log(data.toString());

// Read file async
fs.readFile("test.txt", (err, data) => {
    console.log("********************************");
    console.log(data.toString());
});

// Creat file 'info.txt' and write inside it
fs.writeFileSync("info.txt", "hello iti");


// Rename file:
/*
fs.rename('Test.txt', 'info.txt', function(){
    console.log("\nFile Renamed!\n");
})
*/

// **Bonus: Create directory
fs.access("./new_dir", (error) => {
    if (error) {
      fs.mkdir("./new_dir", (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("New Directory created successfully !!");
        }
      });
    } else {
      console.log("Given Directory already exists !!");
    }
  });
