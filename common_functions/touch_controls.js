let PhoneKeysId = null;

function startPress(keyCode) {
    // Immediate call
    simulateKeyPress(keyCode);
    // Then call after all 100 ms
    PhoneKeysId = setInterval(() => simulateKeyPress(keyCode), 100);
}

function stopPress() {
    clearInterval(PhoneKeysId);
    PhoneKeysId = null;
}

function simulateKeyPress(keyCode) {
    const fakeEvent = { keyCode: keyCode };
    checkKey(fakeEvent);
}

// Button + manage keep press
document.getElementById('btn-up').addEventListener('touchstart', () => startPress(90));    // Z
document.getElementById('btn-left').addEventListener('touchstart', () => startPress(81));  // Q
document.getElementById('btn-down').addEventListener('touchstart', () => startPress(83));  // S
document.getElementById('btn-right').addEventListener('touchstart', () => startPress(68)); // D

document.getElementById('btn-up').addEventListener('touchend', stopPress);
document.getElementById('btn-left').addEventListener('touchend', stopPress);
document.getElementById('btn-down').addEventListener('touchend', stopPress);
document.getElementById('btn-right').addEventListener('touchend', stopPress);

// Bonus : Stops also if the finder goes out of the button
document.getElementById('btn-up').addEventListener('touchcancel', stopPress);
document.getElementById('btn-left').addEventListener('touchcancel', stopPress);
document.getElementById('btn-down').addEventListener('touchcancel', stopPress);
document.getElementById('btn-right').addEventListener('touchcancel', stopPress);
