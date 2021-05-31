
document.addEventListener("keydown", keyPush)

 function keyPush(evt) {
    switch (evt.keyCode) {
        case 65:
        case 37:
	        if(direction != 65){
            sol();
	        direction = 65;
            }
            break;
        case 87:
        case 38:
            if(direction != 38){
                yukarı();
                direction = 38;
            }

            break;
        case 68:
        case 39:
            if(direction != 39){
                sag();
                direction = 39;
            }
 
            break;
        case 83:
        case 40:
            if(direction != 40){
                assa();
                direction = 40;
            }
            
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
direction = 0;

gobrr();
