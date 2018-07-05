let idealCar ={
    model: "mustang",
    color: "red",
    pounds: 3600,
    myCar: function(){
        console.log("My ideal car is a " + this.model + 
        " with a color of " + this.color + 
        ", but I don't want it to be over " + 
        this.pounds + " pounds.");
    }
}; 
idealCar.myCar();
