const os = require("os");

// System Platform Informations
console.log("System Informations")
console.log("System Platform", os.platform());
console.log("OS Type", os.type());
console.log("OS Release", os.release());
console.log("OS Version", os.version());
console.log("OS Architecture", os.arch());
console.log("-----");

console.log("System Stroage");
console.log("System Total Memory", (os.totalmem() / 1024 ** 3).toFixed(2));
console.log("Current Available Memory", (os.freemem() / 1024 ** 3).toFixed(2));
console.log("-----");

console.log("System Uptime Information");
console.log("Display time", (os.uptime() / 3600).toFixed(2));
console.log("-----");

console.log("CPU details");
console.log("CPU Info", os.cpus());
console.log("-----");

console.log("Home Directory & Hostname");
console.log("Home Directory", os.homedir());
console.log("Hostname", os.hostname());
console.log("-----");

console.log("Network Information");
console.log("Network interferances", os.networkInterfaces());

