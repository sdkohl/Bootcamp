let newRequest = new XMLHttpRequest();
 newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     let Einstein = JSON.parse(this.responseText);
    document.getElementById("name").innerHTML = Einstein.name;
    document.getElementById("birthdate").innerHTML = Einstein.birthdate;
   }
 };
 newRequest.open("GET", "einstein.json", true);
 newRequest.send();
 

 function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("bio").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "bio.txt", true);
  xhttp.send();
}

//I can't figure out how to post a picture. Ran out of time.

