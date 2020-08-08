console.log('A B'.match(/\S/));
console.log("A \tB".match(/\S/g));
console.log("\t\tAB".match(/\S\S/));
console.log("\tABCD".match(/\S\S/));
console.log("\tABCD".match(/\S\S/g));