// 通常の検索
console.log('ABC_ABC_ABC'.match(/ABC/));

// gオプションを使用した検索
console.log('ABC_ABC_ABC'.match(/ABC/g));

// iオプション
console.log('ABC'.match(/abc/));
console.log('ABC'.match(/abc/i));

// mオプション
console.log("ABC\nDEF".match(/^D/));
console.log("ABC\nDEF".match(/^D/m));

// yオプション
var exp = /ABC/y;
console.log(exp.lastIndex);
console.log(exp.test('ABC'));

exp.lastIndex = 1;
console.log(exp.test('ABC'));
console.log('ABC'.match(exp));

// gオプションとiオプションの組み合わせ
console.log('ABC_abc_ABC'.match(/ABC/gi));