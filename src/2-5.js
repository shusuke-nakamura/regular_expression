// 1つ記述
console.log('A1B'.match(/\D/));
console.log('A1B'.match(/\D/g));

// 連続して記述
console.log('AB1'.match(/\D\D/));
console.log('ABCD1'.match(/\D\D/));
console.log('ABCD1'.match(/\D\D/g));

