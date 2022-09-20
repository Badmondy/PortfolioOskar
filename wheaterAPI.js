var apiKey = "6b6d7c6a50824c9193e02456220609";


let url = "https://api.weatherapi.com/v1/current.json?key=6b6d7c6a50824c9193e02456220609&q=Stockholm&aqi=no";




function GetWheater(){
    var city = document.getElementById("city").value;
    var sun = document.getElementById("sunny");
    var cold = document.getElementById("cold");
    fetch("https://api.weatherapi.com/v1/current.json?key=6b6d7c6a50824c9193e02456220609&q="+city+"&aqi=no", {
        method: 'get'
    })
    .then(res => {
        return res.json()
      })
      .then((response) => {
       
       
       
        var temp = document.getElementById("wheatertext")

        
       if(response.error.code == 2008){
        temp.style.fontSize = "150%";
        temp.innerHTML = "Tvärr är mitt gratis prov av API:n slut";
       } 
        
        if(response.current.temp_c > 18){
            temp.innerHTML = ("Det är varmt i "+response.location.name+ " temp: " + response.current.temp_c + " celius.");
            sun.style.display = "flex";
            cold.style.display = "none";
        }
       /*  else if(response.current.temp_c < 17 ){
            temp.innerHTML = ("Det är helt okej i "+response.location.name+ " temp: " + response.current.temp_c + " celius.");
            sun.style.display = "none";
            cold.style.display = "flex";
        } */
        else if(response.current.temp_c < 18){
            temp.innerHTML = ("Det är kallt i " + response.location.name + " temp: " + response.current.temp_c + " celius.");
            sun.style.display = "none";
            cold.style.display = "flex";
        }
        else{
            var notfound = "Den staden gick inte att hitta";
            temp.innerHTML = notfound;
            sun.style.display = "none";
            cold.style.display = "none";
        }
     /*   
        if(response.current.temp == " "){
            temp.innerHTML = "Error" +city+ "dosen't exist!";
        }
        else if(response.current.temp_c == 50){
            temp.innerHTML = ( "För varmt i:" +response.location.name+"Släng dig i sjön!" + response.current.temp_c);
            sun.style.display = "flex";
            cold.style.display = "none";
        }
        else if(response.current.temp_c < 8){
            temp.innerHTML = ("Det är kallt i " + response.location.name + " temp: " + response.current.temp_c + " celius.");
            sun.style.display = "none";
            cold.style.display = "flex";
           
        }else if(response.current.temp_c > 8) {
            temp.innerHTML = ("Det är varmt i "+response.location.name+ " temp: " + response.current.temp_c + " celius.");
            sun.style.display = "flex";
            cold.style.display = "none";
        }else{
            var notfound = "Den staden gick inte att hitta";
            temp.innerHTML = notfound;
            sun.style.display = "none";
            cold.style.display = "none";
        } */
        

       
        
    })
}
