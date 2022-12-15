var = SpeechRecognition = window.webkitSpeechRecognition;


var recognition = new SpeechRecognition();


var Textbox = document.getElementById("textbox"); 

function start()
{
    
    Textbox.innerHTML = ""; 
    
    recognition.start();
} 

recognition.oneresult = function(event) {
//Exiba esse evento no console
console.log(event)

var Content = event.results[0][0].transcript;


    Textbox.innerHTML = Content;
    console.log(Content);

     if(Content = "tire minha selfie"){
        console.log("tirando selfie ---");
speak();
     }
}


