/**
 * Created by Patchy on 29/01/2017.
 */
function bot(){

    $("#input").keyup(function(event){
        if(event.keyCode == 13){
            $("#button").click();
        }
    });

    clearInterval(blinkInterval);
    talking();
    setTimeout(function(){
        $('#textLogLeft').prepend("<div class='bubble'><p id='left'>Hello I am Patricks magnificent chat bot. what is your name?</p></div>");
        $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>Hello I am Patricks magnificent chat bot. what is your name? </p></div>")
    },3000);
    setTimeout(function () {
        clearInterval(talkinnterval);
        blinking()
    },3500);

    $('#button').click(function(){

        idleTime = 0;
        var INPUT = null;
        var INPUT = $('#input').val();
        var input = INPUT.toLowerCase();
        $('#textLogRight').prepend("<div class='bubble'><p id='right'>"+INPUT+"</p></div>");
        $('#textLogLeft').prepend("<div class='invisbubble'><p id='left'>"+INPUT+"</p></div>");
        document.getElementById("input").value = "";
        /* ^^ appends what you type to the log ^^ */

        /* vv Decides what bot should say */
        if (input == 'hello' || input =='greetings' || input=='hey' || input=='wazzup'){
            var outputs = ['Hello','ayyyyy','wattup'];
            var output = outputs[Math.floor((Math.random() * 3))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function(){
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>"+output+"</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>"+output+" </p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
            },Math.floor(Math.random()*(4000-1500+1)+1500))}

        else if (input == "how are you?" || input =="how's things?" || input=="How's it rockin?"){
            var outputs = ["it's going well, how about you","I am good, how about you","pretty great, how about you"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function(){
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>"+output+"</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>"+output+"</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
            },Math.floor(Math.random()*(4000-1500+1)+1500));}

        else if (input == "wattup" || input == "what's up" || input == "whats up" || input == "watcha doing" || input == "what are you doing"){
            var outputs = ["nothing much, how about you?", "not much, how about you", "just chillin and being an incredible chat bot"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function(){
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>"+output+"</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>"+output+"</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
            },Math.floor(Math.random()*(4000-1500+1)+1500))}

        else if (input=="what is the weather like?" || input=="how's the weather?" || input=="what is the weather?" || input=="whats the weather?" || input=="what's the weather?" || input=="how is the weather?" || input == "what's the weather like"){
            var outputs = ["Sunny", "Windy", "I dunno, what does it look like to you?"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function(){
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>"+output+"</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>"+output+"</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
            },Math.floor(Math.random()*(4000-1500+1)+1500))}


        else{
            clearInterval(talkinnterval);
            clearInterval(blinkInterval);
            blinking();
        }
        if (initial){
            name = INPUT;
            clearInterval(blinkInterval);
            talking();
            setTimeout( function () {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>Hello "+name+" </p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>Hello "+name+" </p></div>");
            },1500);
            setTimeout(function () {
                clearInterval(talkinnterval);
                blinking()
            },1750);
            initial = false;
        }


    })
}