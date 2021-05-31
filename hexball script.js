
document.addEventListener("keydown", keyPush)

 function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            sol()
            break;
        case 38:
           yukarı()
            break;
        case 39:
            sag()
            break;
        case 40:
            assa()
            break;
        case 32:
            sut();
            break;    
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function yukarı() {
    var TheTextBox = document.querySelector('[data-hook="input"]')
    TheTextBox.value = "/avatar 🖕 ";
    var btn = document.querySelector('[data-hook="send"]')
    btn.click();
}
function sut() {
    var TheTextBox = document.querySelector('[data-hook="input"]')
    TheTextBox.value = "/avatar 😈 ";
    var btn = document.querySelector('[data-hook="send"]')
    btn.click();
}
function assa() {
    var TheTextBox = document.querySelector('[data-hook="input"]')
    TheTextBox.value = "/avatar 👇";
    var btn = document.querySelector('[data-hook="send"]')
    btn.click();
}

function sag() {
    var TheTextBox = document.querySelector('[data-hook="input"]')
    TheTextBox.value = "/avatar 👉";
    var btn = document.querySelector('[data-hook="send"]')
    btn.click();
}

function sol() {
    var TheTextBox = document.querySelector('[data-hook="input"]')
    TheTextBox.value = "/avatar 👈";
    var btn = document.querySelector('[data-hook="send"]')
    btn.click();
}

async function gobrr() {

   
}
gobrr();
