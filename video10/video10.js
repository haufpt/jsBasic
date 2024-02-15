// == vs ===
//su dung === la chu yeu
//== so sanh value thoi
//=== so sanh ca type nua
//vi du
let a=4;
let b='4';
let c=4;

//ket qua la true vi no so sanh value
console.log(`compare a = ${a} and b = ${b} la: ${a==b}`)

//ket qua la false vi no so sanh ca type nua
console.log(`compare a = ${a} and b = ${b} la: ${a===b}`)





//null, empty and undefine;

//null - su dung de khoi tao gia tri vao ko luu j ben trong
let d= null;
console.log('type of d: ', typeof d);

//empty khoi tao gia tri rong
let e=[];
let f={};
console.log(e, f);

//undefine la bien ma chua co gia tri

let k;
console.log('type of k:', k);