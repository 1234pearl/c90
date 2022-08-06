var SpeechRecognation = window.webkitSpeechRecognation;
var recognation = new SpeechRecognation();

function start()
{
 document.getElementById("textbox").innerhtml = "";
 recognation.start();
}

recognation.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerhtml = content;
    console.log(Content);
    speak();
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").Value;
    var utterThis = new speechSynthesisutterThisrance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");