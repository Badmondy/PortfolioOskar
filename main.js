var text = "Hej jag heter Oskar Markbäck Zeilon, bor precis utanför Hässleholm med sambo och hund.";
var text2 = "Här kommer blivande projekt dyka upp:";
var empty  = "";
var help = "Du kan använda dessa kommandon:<br>[project],[about],[clear],[restart],[?help],[wheater]"
var apiKey = "6b6d7c6a50824c9193e02456220609";
function commando() {
   var fetched = document.getElementById("getInput").value;
   var changed = document.getElementById("infowrite");
   var wheatervue = document.getElementById("changeWheater");
   var sun = document.getElementById("sunny");
   var cold = document.getElementById("cold");
    if(fetched == "?help"){
       changed.innerHTML = help;
    }else if(fetched == "about"){
        changed.innerHTML = text; 
        wheatervue.style.display = "none"; 
    }
    else if(fetched == "project"){
        changed.innerHTML = text2 + " <br>Kommandot: karta är nu tillgängligt!";
        wheatervue.style.display = "none";
    }
    else if(fetched == "clear"){
        changed.innerHTML = empty;
        sun.style.display = "none";
        cold.style.display = "none";
        wheatervue.style.display = "none";
    }
    else if(fetched == "restart"){
        history.go(0);
        
    }else if(fetched == "wheater"){
        window.location.href = "chatbot.html";
        
    }else if(fetched == "karta"){
        window.open('https://karta.oskarzz.com/ztech', '_blank');
    }
    else{
        changed.innerHTML = help;
    }
       
    
}




function sendEmail() {
    var link = "mailto:oskarmarkback@gmail.com";

    window.location.href = link;
}

function HideData() {
    var h = document.getElementById("proffs");
    var p = document.getElementById("hideterminal");
    var o = document.getElementById("hej");
    var i = document.getElementById("iframe");
    h.style.display = "none";
    p.style.display = "none";
    o.innerHTML = "BankApp Made in C#";
    i.style.display = "flex";
    
}

function gobackBtn(){
    window.location.href = "index.html";
        
}