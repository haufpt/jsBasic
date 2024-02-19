//if, else, break, continute

let arrTop4 = ["live", "mu", "chealse", "mancity"];

for(let i =0;i<arrTop4.length;i++){
    //tim 1 doi vo dich dung break de toi uu 
    if(arrTop4[i] === "mu"){
        console.log("found it: ", arrTop4[i])
        //tim thay se break ko lap nua, i chay den i = 1 thoi
        break;
    }
    console.log("check i: ", i);
}

for(let j =0;j<arrTop4.length;j++){
    //ko in top 1 la mu
    if(arrTop4[j] === "mu"){
        continue;
    }
    console.log("in all tru top 1", arrTop4[j]);
}
