class Coffee{
    constructor(name, image){
        this.name = name;
        this.image = image;
    }
    sayEnjoy(){
        return `Enjoy your ${this.name}. <br> Composition: `;
    };
    sayHello(){
        return `Hello, take  Your Coffee.`;
    }
};
 
class  EasternCoffee extends Coffee{
    sayEnjoy(){
        return `Enjoy your ${this.name}.<br>Composition:<br>
                just coffee`;
    };
};

class Americano extends Coffee{
    sayEnjoy(){
        return `Enjoy your ${this.name}.<br>Composition:<br>
                Espresso, Hot water`;
    };
};

class Latte extends Coffee{
    sayEnjoy(){
        return `Enjoy your ${this.name}.<br>Composition:<br>
                Espresso, Steamed milk `;
    };
};

class Cappuccino extends Coffee{
    sayEnjoy(){
        return `Enjoy your ${this.name}.<br>Composition:,<br>
                Espresso, Steamed milk, Foam`;
    };
};

class Cortado extends Coffee{
    sayEnjoy(){
        return `Enjoy your ${this.name}.<br>Composition:<br>
                1oz Espresso, 1oz Steamed milk`;
    };
};

class Affogato extends Coffee{
    sayEnjoy(){
        return `Enjoy your ${this.name}.<br>Composition:<br>
                Espresso, Vanilla ice cream`;
    };
};