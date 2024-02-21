//sort

const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b)=>{
    //a-b la tang dan
    //b-a la giam dan
    return b-a;
});
console.log(array1);