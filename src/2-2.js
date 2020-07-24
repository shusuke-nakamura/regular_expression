// 1つ記述
console.log('Aa1'.match(/\w/));
console.log('Aa1'.match(/\w/g));

// 連続して記述
console.log('Aa1'.match(/\w\w/));
console.log('Aa1'.match(/\w\w/g));
console.log('Aa1_'.match(/\w\w/));
console.log('Aa1_'.match(/\w\w/g));

// 組み合わせて記述
console.log('Aa1_'.match(/\w\w_/));
console.log('Aa1_'.match(/a\w\w/));

//全角文字やアンダースコア以外の記号は対象とならない
console.log('あ1!?*/-_'.match(/\w/g));
