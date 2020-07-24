// 1つ記述
console.log('A!_?'.match(/\W/));
console.log('A!_?'.match(/\W/g));

// 連続して記述
console.log('A!?*'.match(/\W\W/));
console.log('A!?*/'.match(/\W\W/));
console.log('A!?*/'.match(/\W\W/g));

// 組み合わせて記述
console.log('A!?*/'.match(/\w\W/));
console.log('A!?*/'.match(/\W\?/));

// 全角文字やアンダースコア以外の記号が対象となる
console.log('あ1!?*/-_'.match(/\W/g));