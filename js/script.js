function checkStringLength() {
    var inputString = document.getElementById("inputString").value;
    var resultElement = document.getElementById("result");
    var audio = new Audio();

    if (inputString.length === 7 ) {
        resultElement.innerHTML = `${inputString} is Thala For a Reason!!!`;
        audio.src = './music/Thala.mp3'; // Set the audio source
        audio.currentTime = 0; 
        audio.play();

        audio.addEventListener('ended', function () {
            audio.currentTime = 0;
            audio.removeEventListener('ended', arguments.callee);
        });
    }else {
        resultElement.innerHTML = "E Sala Cup Namde"; 
    }
}
