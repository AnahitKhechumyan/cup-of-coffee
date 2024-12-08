
const easternCoffee = document.getElementById("button-eastern");
const americano = document.getElementById("button-americano");
const latte = document.getElementById("button-latte");
const cappuccino = document.getElementById("button-cappuccino");
const cortado = document.getElementById("button-cortado");
const affogato = document.getElementById("button-affogato");

function getCoffeeImage(name) {
    const images = ["./src/images/eastern-coffee.png","./src/images/americano.png",
                     "./src/images/latte.png","./src/images/cappuccino.png",
                     "./src/images/cortado.png","./src/images/affogato.png"
                   ];

    if (name == "EasternCoffee") {
        return images[0];
    } else if (name == "Americano") {
        return images[1];
    } else if (name == "Latte") {
        return images[2];
    } else if (name == "Cappuccino") {
        return images[3];
    } else if (name == "Cortado") {
        return images[4];
    } else if (name == "Affogato") {
        return images[5];
    }
}

function getCoffeeType(name, image) {
    switch (name) {
        case "EasternCoffee":
            return new EasternCoffee(name, image);
        case "Americano":
            return new Americano(name, image);
        case "Latte":
            return new Latte(name, image);
        case "Cappuccino":
            return new Cappuccino(name, image);
        case "Cortado":
            return new Cortado(name, image);
        case "Affogato":
            return new Affogato(name, image);
        default:
            return null;  
    }
}

function createCoffeeCup(coffee) {
    const coffeeCard = document.createElement("div");
    coffeeCard.className = "content";
    try {
        coffeeCard.innerHTML = `
            <div class="content">
                <img class="img" src="${coffee.image}"  style="width:250px;height:250px;"  alt="${coffee.name}">
                <div class="description">${coffee.sayHello()} <br> ${coffee.sayEnjoy()}</div> 
            </div>`;

        return coffeeCard;

    }catch(error){
        alert("Please, choose any type of coffee again!");
    };
}; 

function handleCreateTypeOfCoffee(event){
    event.preventDefault();
    
    const name = event.target.textContent;
   
    const image = getCoffeeImage(name);

    const coffee = getCoffeeType(name, image);
    
    const coffeeCard =  createCoffeeCup(coffee);

    const coffeeContainer = document.querySelector(".card");

    coffeeContainer.appendChild(coffeeCard); 

    document.querySelector(".content").addEventListener('click',()=>{
        coffeeCard.remove();
    })
    
};

easternCoffee.addEventListener('click', handleCreateTypeOfCoffee);
americano.addEventListener('click', handleCreateTypeOfCoffee);
latte.addEventListener('click', handleCreateTypeOfCoffee);
cappuccino.addEventListener('click', handleCreateTypeOfCoffee);
cortado.addEventListener('click', handleCreateTypeOfCoffee);
affogato.addEventListener('click', handleCreateTypeOfCoffee);
 