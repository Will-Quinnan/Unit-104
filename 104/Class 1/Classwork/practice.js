let student ={
    //attributes
    name:"___",
    age: "___",
    isActive: true,
    nationality:"many",
    //methods
    sayHi: function(){
        return console.log("Hello!")
    },
    hobbies:["videogames","cooking","D&D"],
    address:{
        street:"1st",
        zip:"#####",
        city:"LJFHN;",

    }
};
console.log(student);

let products = [];
let product1 = {
    name:"laptop",
    description:"Gaming laptop",
    price:1800
}
let product2 = {
    name:"laptop",
    description:"student laptop",
    price:250
}
let product3 = {
    name:"laptop",
    description:"Good laptop",
    price:450
}

// *Static*
products = [product1,product2,product3]

//*Dynamic* 
//products.push(product1,product2)

console.log(products[2].price);

// abstraction
// polyforfism
// encapsulation
// inherance
    //father
        //child