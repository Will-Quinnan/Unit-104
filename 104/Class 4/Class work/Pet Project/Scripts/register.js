
let petSalon={
    name:"The Fashion Pet",
    address:{
        street:"1st",
        zip: "#####",
        number: 2
    },
    hours:{
        open:"9:00AM",
        close:"5:00PM"
    },
    pets:[]
}
//constuctor
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownername = owner;
    this.contactPhone = phone;

}



function displaySalonInfo(){
    let tmp=`
    <p>Welcome to the ${salon.name} location in ${salon.address}</p>
    <p></p>`;
    document.getElementById(info)
        
    
}

let inputName = document.getElementById("textName");
let inputAge = document.getElementById("textAge");
let inputGender = document.getElementById("textGender");
let inputBreed = document.getElementById("textBreed")
let inputService = document.getElementById("textService");
let inputOwner = document.getElementById("textOwner");
let inputPhone = document.getElementById("textPhone");

function register(){
    //get values from the html
        // console.log(inputName.value,inputAge.value);
    //create a new object
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    console.log(newPet);
    //push it to the array
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
    clearForm();
}
function clearForm(){
inputName.value = "";
inputAge.value = "";
inputGender.value = "";
inputBreed.value = "";
inputService.value = "";
inputOwner.value = "";
inputPhone.value = "";
}

// main function
function init(){
    let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","555-555-5555"); //creating the object

    let scrappy = new Pet("Scrappy",40,"Male","Mixed","Nail Trim","Shaggy","555-555-5555")
    
    let diablo = new Pet("Diablo",3,"male","Chiuwawa","Grooming","Mrs. Beverly","666-666-6666");
    
    petSalon.pets.push(scooby,scrappy,diablo);//adding the pet to the array
    
    
};
window.onload = init;
//Pets
