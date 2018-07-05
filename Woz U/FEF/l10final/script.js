  function myPhone() {
      alert("Phone number:661-992-3581");
  }

  function myEmail() {
    alert("Email: kohlshirley@gmail.com");
}

//   Make icons grow and change color with hover.



var scale=1;
$(document).ready(function(){
    $(".icon").hover(function(){
       scale=scale==1?2:1
       $(this).css("transform","scale("+scale+")");
        callback();
    });
});

function test(){
    console.log("click works");
}

$(document).ready(function(){
    $(".icon").hover(function(){
          $(this).css("background-color","red");
        }, function(){
         $(this).css("background-color","lightgray");
    });
    $("#gitHub-icon").click( function(){
        console.log("TEST CLICK");
       // Connect gitHub icon to API 
        let gitHubRequest =new XMLHttpRequest();
        gitHubRequest.onreadystatechange=function(){
            if(this.readyState == 4 && this.status == 200){
                let gitObject=JSON.parse(this.responseText);
                document.getElementById("gitBio").innerHTML=gitObject.bio;
            }
        };
        gitHubRequest.open("GET","https://api.github.com/users/sdkohl", true);
        gitHubRequest.send();
    }
    );


 });

// I don't know why this gitHubRequest doesn't work. I can't link to LinkedIn either.
//Also, Chrome doesn't act the same as other browsers with this code. Overflow auto fails.