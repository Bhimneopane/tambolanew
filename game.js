let pickedNumbers = [];

function startGame() {
    pickNextNumber();
}

function pickNextNumber() {
    setTimeout(() => {
        if (pickedNumbers.length >= 90) {
            document.getElementById('statusMessage').innerText = "Game Over!";
            return;
        }

        let newNumber;
        do {
            newNumber = Math.floor(Math.random() * 90) + 1;
        } while (pickedNumbers.includes(newNumber));

        pickedNumbers.push(newNumber);
        document.getElementById('pickedNumber').innerText = newNumber;

        markTicketNumbers(newNumber);
        pickNextNumber();
    }, 2000);
}

function markTicketNumbers(number) {
    let ticketBoxes = document.querySelectorAll(".number-box");
    ticketBoxes.forEach(box => {
        if (box.innerText == number) {
            box.style.backgroundColor = "green";
        }
    });
}
