//
let person={
    firstName: "hau",
    lastName: "nguyen",
    fullName: function(){
       return `${this.firstName} ${this.lastName}`
    }
}

//cach truy cap 1
console.log(person["firstName"]);
//cap truy cap propeti 2
console.log(person.lastName);
//cach truy cap vao method
console.log(person.fullName())