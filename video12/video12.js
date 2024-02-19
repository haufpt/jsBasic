//dung while khi chua biet chinh xac can lap bao nhieu lan

let flag=false;
let i = 0;
//!flag la luon dung
while(!flag){
    console.log(i);
    i++;
    if(i===10){
        flag=true;
    }
}
console.log("check i=", i);


//do while su dung khi can it nhat 1 lan chay du dieu kien co sai
let j=2;
do{
    //van in ra 2 du dieu kien while j<0 da sai
    console.log(j);
}while(j<0)