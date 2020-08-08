console.log('A B'.match(/\s/));
console.log("A \tB".match(/\s/g));
console.log("A\t\tB".match(/\s\s/));
console.log("\t  \tA".match(/\s\s/));
console.log("\t  \tA".match(/\s\s/g));