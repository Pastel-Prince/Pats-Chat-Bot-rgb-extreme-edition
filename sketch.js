var symbolSize = 24;
var streams = [];


function setup() {
    var cnv = createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    cnv.parent('bg');

    textSize(symbolSize);
    colorMode(HSL);

    var x = 0;
    for (var i = 0; i <= width / symbolSize; i++) {
        var stream = new Stream();
        stream.generateSymbols(x, random(0, -1000));
        streams.push(stream);
        x += symbolSize;
    }
}

function draw() {
    background(0, 140);
    streams.forEach(function(stream) {
        stream.render();
    });
}

function Symbol(x, y, speed, first) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.first = first;

    this.setToRandomSymbol = function() {
        if (frameCount % this.switchInterval == 0) {
            this.value = String.fromCharCode(
                0x30A0 + round(random(0, 96))
            );
        }
    }

    this.switchInterval = round(random(2, 25));

    this.rain = function() {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }
}


function Stream() {
    this.symbols = [];
    this.totalSymbols = round(random(5, 30));
    this.speed = random(5, 20);

    this.generateSymbols = function(x, y) {
        var first = round(random(0,4)) == 1;
        for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(x, y, this.speed, first);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize
            first = false;
        }
    }

    var light = random(0,360);

    this.render = function() {
        $('button').css("background-color", "hsl("+light+",100%,50%)");
        $('#face').css("color", "hsl("+light+",100%,30%)");
        $('.bubble #left').css("background-color", "hsl("+light+",100%,75%)");
        $('.bubble #right').css("background-color", "hsl("+(360-light)+",100%,75%)");
        $('#IdleDots').css("color", "hsl("+light+",100%,80%)");
        light += 1;
        if (light >= 360){
          light = 0;
        }
        this.symbols.forEach(function(Symbol) {
            if (Symbol.first) {
                fill(light, 100, 90)
            } else {
                fill(light,100,50);

            }
            text(Symbol.value, Symbol.x, Symbol.y);
            Symbol.rain();
            Symbol.setToRandomSymbol();
        });
    }
}









//
