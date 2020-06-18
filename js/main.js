// Typing effect

const words = ["Hello.", "Namaste.", "Bonjour.", "Hola.", "Guten Tag."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            document.getElementById('word').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 300);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 150);
    };
    loopDeleting();
};

// Cursor

var cursor = true;
var speed = 250;

function startCursor() {
    setInterval(() => {
        if (cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
        } else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
        }
    }, speed);
}

typingEffect();
