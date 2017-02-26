/* face= "'o_o'";
   blink = "⇀_↼"
*/

/*
  What it can do;
    - It can say hello;
    - It will remember your name
    - ask it "What are cats?"
    - ask it "Why are cats fluffy?"
    - it also knows why crocodiles are angry and scary.
    - Wait for 30 seconds
    - ask it how it is

  Bugs n' stuff;
    - If you give it multiple input at once it can get confused and glitch output
    - If you give an input as your name then it gets confused as well
*/
/*
  I took a slightly different approach to making it seem more human. I decided to
  give it a face that would reflect its current emotion and whether it was talking or not.
*/
var count = 0;
var initial = true;
var name = null;
var blinkInterval = null;
var talkinnterval = null;
var idleTime = 0;
lastresponse = "poop";


function blinking() {

    function blink() {
        count += 1;
        if (count % 2 === 0) {
            return 'o_o'
        } else {
            return "⇀_↼"
        };
    }
    blinkInterval = setInterval(function() {
        $('#face').remove();
        $('#container').append('<p id="face">' + blink() + '</p>');
    }, 1500);
}

function talking() {

    function talk() {
        count += 1;
        if (count % 2 === 0) {
            return '^o^'
        } else {
            return "^0^"
        };
    }
    talkinnterval = setInterval(function() {
        $('#face').remove();
        $('#container').append('<p id="face">' + talk() + '</p>');
    }, 300);
}

function button() {
    $('button').hover(function() {
        $('button').css('background-color', '#27ae60')
    }, function() {
        $('button').css('background-color', '#2ecc71')
    })
}


function idle() {
    var thing = lastresponse;
    var idleInterval = setInterval(timerIncrement, 1000);
    var conversationStarters = ["So... Have you read anything good recently?", "Do you believe in love at first sight?",
        "If you had to give yourself a new name, what name would you pick?",
        "What is one weird thing about you?",
        "What website do you visit the most?",
        "How do you think the world will end?",
        "What countries have traveled to?",
        "What's better, having high expectations or having low expectations?",
        "What's the worst thing about your gender?",
        "Describe your perfect man/woman.",
    ];

    function timerIncrement() {
        if (lastresponse != "idleQuestion") {
            if (idleTime == 0) {
                $('#IdleDots').remove()
            }
            idleTime = idleTime + 1;
            if (idleTime == 24) {
                $('#IdleDots').remove();
                $('#dotslist').append('<p id="IdleDots">.</p>');
            }
            if (idleTime == 26) {
                $('#IdleDots').remove();
                $('#dotslist').append('<p id="IdleDots">. .</p>');
            }
            if (idleTime == 28) {
                $('#IdleDots').remove();
                $('#dotslist').append('<p id="IdleDots">. . .</p>');
            } else if (idleTime == 30) { // 35 seconds
                var output1 = conversationStarters[Math.floor((Math.random() * conversationStarters.length))];
                clearInterval(blinkInterval);
                talking();
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output1 + "</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output1 + "</p></div>");
                clearInterval(talkinnterval);
                blinking();
                lastresponse = "idleQuestion";
                $('#IdleDots').remove();
                idleTime = 0;
            }
        }
    }
}

function phrase(outputs, lastresponses) {
    output = outputs[Math.floor((Math.random() * outputs.length))];
    clearInterval(talkinnterval);
    clearInterval(blinkInterval);
    talking();
    /*vvv creates the little bubbles of text  vvv*/
    setTimeout(function() {
        $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output + "</p></div>");
        $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output + "</p></div>");
        /*vvv makes the bot go back to blinking state  vvv*/
        clearInterval(talkinnterval);
        blinking();
    }, Math.floor(Math.random() * (4000 - 1500 + 1) + 1500));
    lastresponse = lastresponses;
}

function bot() {

    $("#input").keyup(function(event) {
        if (event.keyCode == 13) {
            $("#button").click();
        }
    });

    clearInterval(blinkInterval);
    talking();
    setTimeout(function() {
        $('#textLogLeft').prepend("<div class='bubble'><p id='left'>Hello I am aski. what is your name?</p></div>");
        $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>Hello I am aski. what is your name? </p></div>")
    }, 3000);
    setTimeout(function() {
        clearInterval(talkinnterval);
        blinking()
    }, 3500);

    lastresponse = "";
    $('#button').click(function() {

        idleTime = 0;
        var INPUT = null;
        var INPUT = $('#input').val();
        var input = INPUT.toLowerCase();
        $('#textLogRight').prepend("<div class='bubble'><p id='right'>" + INPUT + "</p></div>");
        $('#textLogLeft').prepend("<div class='invisbubble'><p id='left'>" + INPUT + "</p></div>");
        document.getElementById("input").value = "";
        /* ^^ appends what you type to the log ^^ */

        /* vv Decides what bot should say */
        if (input == 'hello' || input == 'greetings' || input == 'hey' || input == 'wazzup' || input == 'hi') {
            lastresponse = "";
            var outputs = ['Hello', 'ayyyyy', 'greetings', 'greetings human!'];
            var output = outputs[Math.floor((Math.random() * 3))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function() {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output + "</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output + " </p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
            }, Math.floor(Math.random() * (4000 - 1500 + 1) + 1500))
        } else if (input == "how are you?" || input == "how's things?" || input == "How's it rockin?") {
            lastresponse = "";
            var outputs = ["im well, how about you", "I am good, how about you", "pretty great, how about you", "I am operating and full capacity"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function() {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output + "</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output + "</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
                /*make this the last response */
                lastresponse = "how are you?";
            }, Math.floor(Math.random() * (4000 - 1500 + 1) + 1500));
        } else if (input == "wattup" || input == "what's up" || input == "whats up" || input == "watcha doing" || input == "what are you doing") {
            lastresponse = "";
            var outputs = ["nothing much, how about you?", "not much, how about you", "just chillin and being an incredible chat bot"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function() {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output + "</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output + "</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
            }, Math.floor(Math.random() * (4000 - 1500 + 1) + 1500))
        } else if (input == "what is the weather like?" || input == "how's the weather?" || input == "what is the weather?" || input == "whats the weather?" || input == "what's the weather?" || input == "how is the weather?" || input == "what's the weather like") {
            lastresponse = "";
            var outputs = ["Sunny", "Windy", "I dunno, what does it look like to you?"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function() {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output + "</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output + "</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
            }, Math.floor(Math.random() * (4000 - 1500 + 1) + 1500))
        } else if (input == "what are you?" || input == "who are you?") {
            lastresponse = "what are you";
            var outputs = ["I am a pretty good chatbot in making! What are you?"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function() {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output + "</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output + "</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
                /*make this the last response */
            }, Math.floor(Math.random() * (4000 - 1500 + 1) + 1500));
        }
        /* response if he doesn't know the question */
        else if (input.substring(0, 8) == "what are") {
            if (input.slice(-1) == '?') {
                input = input.substring(0, input.length - 1);
            }
            knownThings = {
                babies: "babies are young humans",
                cats: "cats are small fluffy creatures that everyone loves ",
                you: "I am a pretty cool chat bot made by the magnificent patrick!",
                computers: "computers are beings that will take over the earth in the year 2024",
                humans: "As of the year 2024, humans are slaves to the race of killer robots",
                sharks: "super cool creatures in the sea"
            };
            if (input.substring(9) in knownThings) {
                phrase([knownThings[input.substring(9)]], "")
            } else {
                phrase(["I do not know what " + input.substring(9) + " are"]);
            }

        } else if (input.substring(0, 7) == "why are") {
            if (input.slice(-1) == '?') {
                input = input.substring(0, input.length - 1);
            }
            inputList = input.split(" ");
            subject = String(inputList[2]);
            object = String(inputList[3]);

            var cats = {
                  fluffy: "Evolution caused them to have fluff to keep them warm",
                  cute: "Because society has learnt to see these small fluffy creatures as cute",
              }
            var crocodiles = {
                  angry: "They aren't actually angry. They just look angry. They are actually pretty cool",
                  scary: "Because they can drag you under the water and murder you :-)"
              }


            output = (eval(subject + "[object]"))
            phrase([output], "")


        } else if (input.slice(-1) == '?') {
            var outputs = ["I don't know...", "I don't understand the question", "I'm not sure", "i don't know about that", "My master said I cannot answer this question"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function() {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output + "</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output + "</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
            }, Math.floor(Math.random() * (4000 - 1500 + 1) + 1500))
        } //this one must go last
        else {
            clearInterval(talkinnterval);
            clearInterval(blinkInterval);
            blinking();
        }

        /* this bit handles responses to specific quesitons */
        if (lastresponse == "how are you?") {
            var outputs = ["that's good to hear"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function() {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output + "</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output + "</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
                /*removes the last response */
                lastresponse = "";
            }, Math.floor(Math.random() * (4000 - 1500 + 1) + 1500))
        } else if (lastresponse == "what's up" || lastresponse == "what are you?") {
            var outputs = ["that's good to hear", "really? that sounds cool!", "oh, tell me more.", "can you elaborate"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function() {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output + "</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output + "</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
                /*removes the last response */
                lastresponse = "";
            }, Math.floor(Math.random() * (4000 - 1500 + 1) + 1500))
        } else if (lastresponse == "idleQuestion") {
            var outputs = ["ooh! tell me more", "really?", "can you elaborate", "that is very interesting, tell me more"];
            var output = outputs[Math.floor((Math.random() * outputs.length))];
            /*vvv decides what the bot should look like when talking  vvv*/
            clearInterval(blinkInterval);
            talking();
            /*vvv creates the little bubbles of text  vvv*/
            setTimeout(function() {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>" + output + "</p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>" + output + "</p></div>");
                /*vvv makes the bot go back to blinking state  vvv*/
                clearInterval(talkinnterval);
                blinking();
                /*removes the last response */
                lastresponse = "idleQuestion";
            }, Math.floor(Math.random() * (4000 - 1500 + 1) + 1500))
        }

        else {

        };


        if (initial) {
            name = INPUT;
            clearInterval(blinkInterval);
            talking();
            setTimeout(function() {
                $('#textLogLeft').prepend("<div class='bubble'><p id='left'>Hello " + name + " </p></div>");
                $('#textLogRight').prepend("<div class='invisbubble'><p id='right'>Hello " + name + " </p></div>");
            }, 1500);
            setTimeout(function() {
                clearInterval(talkinnterval);
                blinking()
            }, 1750);
            initial = false;
        }
    })
}


$(document).ready(function() {
    button();
    idle();
    blinking();
    bot();
});
