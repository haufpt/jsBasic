//map thay the cho for, for lam thay doi mang ban dau, map thi ko

let numberArr=[1, 2, 3, 4, 5, 6, 7, 8, 9];

//dung for
// for(let i=0;i<numberArr.length;i++){
//     numberArr[i]= numberArr[i] * numberArr[i];
// }
// console.log(numberArr);

//dung map
let mapArr=numberArr.map((item)=>{
    item=item*item;
    return item;
})
console.log(numberArr);
console.log(mapArr);