// メタ文字を検索
console.log('?!?!?!'.match(/\?/g));

// 1つ記述
console.log('ABC'.match(/./));
console.log('ABC'.match(/./g));

// 連続して記述
console.log('ABC'.match(/../));
console.log('ABC'.match(/../g));
console.log('ABCD'.match(/../));
console.log('ABCD'.match(/../g));

// 組み合わせて記述
console.log('ABCD'.match(/A./));
console.log('ABCD'.match(/.D/));

// 何も該当しない場合
console.log('ABC'.match(/..../));

// 全角文字や記号も対象となる
console.log('あ1!?*/-'.match(/./g));

