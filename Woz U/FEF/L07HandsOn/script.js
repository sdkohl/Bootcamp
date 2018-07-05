
function fullName (){
    let lastName=document.getElementById("last").value;
    let firstName=document.getElementById("first").value;
  
    let nameRegex=('^[A-Z{2,}]');

  if (firstName.match(nameRegex) && lastName.match(nameRegex)) {

    let fullName=firstName+"  "+lastName;

    document.getElementById("output").innerHTML=fullName;
    
    alert ("Thank you."); 
        
    } else {
    
      alert ("Please capitalize the first letter of your first name." +  
    "Names must be longer than one character." + "No numbers allowed.");
    }
}
