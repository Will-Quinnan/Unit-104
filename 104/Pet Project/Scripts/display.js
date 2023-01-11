function displayPetCards(){
    let petSection = document.getElementById("pets");
    let card = "";  
    for(let i=0; i < petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card += `
        <div>
            <h4>${pet.name}</h3>
            <p> ${pet.age}</p>
            <p> ${pet.gender}</p>
            <p> ${pet.breed}</p>
            <p> ${pet.service}</p>
            <p> ${pet.ownerName}</p>
            <p> ${pet.contactPhone}</p>
        </div>
        `;
        console.log(card);
    }

    petSection.innerHTML=card;
}
function displayInfo(){
    document.getElementById("info").innerHTML="You have " + petSalon.pets.length + " pets in the salon.";
}