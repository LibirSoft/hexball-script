function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//CHANGE EMOJI RIGHT THERE
upEmoji = "🖕", downEmoji = "👇", leftEmoji = "👈", rightEmoji = "👉", shootEmoji = "😈", sevincEmoji = "😎", loseEmoji = "🥺";

//OTHER VARIABLES
direction = 0;

var TheTextBox = document.querySelector('[data-hook="input"]')
var btn = document.querySelector('[data-hook="send"]')

function ChangeAvatar(value) {
    TheTextBox.value = "/avatar " + value;
}

function yukarı() {
    ChangeAvatar(upEmoji);
    btn.click();
}
function sut() {
    ChangeAvatar(shootEmoji);
    btn.click();
}
function assa() {
    ChangeAvatar(downEmoji);
    btn.click();
}

function sag() {
    ChangeAvatar(rightEmoji);
    btn.click();
}

function sol() {
    ChangeAvatar(leftEmoji);
    btn.click();
}

function sevinc() {
    ChangeAvatar(sevincEmoji);
    btn.click();
}

function lose() {
    ChangeAvatar(loseEmoji);
    btn.click();
}
document.addEventListener("keydown", keyPush)

function keyPush(evt) {
    switch (evt.keyCode) {
        case 65:
        case 37:
            if (direction != 65) {
                sol();
                direction = 65;
            }
            break;
        case 87:
        case 38:
            if (direction != 38) {
                yukarı();
                direction = 38;
            }
            break;
        case 68:
        case 39:
            if (direction != 39) {
                sag();
                direction = 39;
            }
            break;
        case 83:
        case 40:
            if (direction != 40) {
                assa();
                direction = 40;
            }
            break;
        case 32:
            sut();
            break;
        case 71:
            sevinc();
            break;

        case 76:
            lose();
            break;
    }
}
