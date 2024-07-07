// Arrays can be destructured by position
const list = [1, 6, 3];
const [a, b] = list;
a + b;
// 7

// Objects can be desctructured by name
const dict = { c: "hi", d: "what", e: "hello" };
const { c, e } = dict;
c + e;
// 'hihello'
