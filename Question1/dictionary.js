const fs = require("fs");

function doesFileExist(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) throw "File doesn't exist here";
    else console.log("File exists here");

    var result = data
      .replace(/\n/g, ",")
      .replace(/–/g, ",")
      .split(",");
    var i;
    for (i = 0; i < result.length; i++) {
      console.log(result[i].trim());
    }
  });
}

doesFileExist("input.txt");
