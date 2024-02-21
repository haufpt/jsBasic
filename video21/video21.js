//filter tra ve array
//find tra ve 1 element
let arr=[
    {name: "hau", age: 20},
    {name: "dep", age: 33},
    {name: "trai", age: 23},
    {name: "duc", age: 20},
]

// let newArr=arr.filter((item)=>{
//     return item && item.age===20;
// })

let newArr2=arr.find((item)=>{
    return item && item.age===20;
})

console.log(newArr2);