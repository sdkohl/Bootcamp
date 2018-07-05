age = 15;

function allowedIntoMovie(){
   if (age<10){
        alert("Not admitted.");
        console.log("Not admitted.");
    }

    else if (age<15) {
        alert ("Permitted with parent.");
        console.log("Permitted with parent.");
    } 
    
    else if (age<18){
       alert  ("Permitted if accompanied by over 18.");
       console.log("Permitted if accompanied by over 18.");
    } 
    
    else if (age>=18){alert ("Permitted alone.");}
    console.log("Permitted alone.");
}

console.log(allowedIntoMovie(age));
