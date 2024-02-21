//ham duoc truyen nhu tham so goi la call back, xu ly bdb
//settimeout: delay
//setinterval: delay vo han

let sum=(a, b, callback)=>{
    let tong=a+b;
    //  setTimeout(()=>{
    //     callback(tong);
    // }, 7000);
    let i=0;
    let timer= setInterval(()=>{
        callback(tong);
        i++;
        if(i===5){
            clearInterval(timer);
        }
    }, 1000);

}

//call back function
let inSum=(message)=>{
    console.log("sum =", message);
}

sum(5, 5, inSum);