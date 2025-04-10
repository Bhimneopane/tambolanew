let ticketCodes = {};

function setGameTime() {
    let selectedTime = document.getElementById('gameTime').value;
    let today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    if (localStorage.getItem("gameSetDate") === today) {
        alert("❌ You cannot change the game time again today.");
        return;
    }

    localStorage.setItem("gameStartTime", selectedTime);
    localStorage.setItem("gameSetDate", today);
    document.getElementById('startTimeDisplay').innerText = selectedTime;
    alert(`✅ Game time set for today at ${selectedTime}`);
}

function generateTickets() {
    let count = document.getElementById('ticketCount').value;
    let container = document.getElementById('ticketsContainer');
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let uniqueCode = Math.floor(1000 + Math.random() * 9000);
        ticketCodes[uniqueCode] = generateNumbers();

        let ticket = `<h3>Ticket No: ${i + 1} | Code: ${uniqueCode}</h3>${displayTicketGrid(ticketCodes[uniqueCode])}`;
        container.innerHTML += ticket;
    }

    localStorage.setItem("ticketCodes", JSON.stringify(ticketCodes));
}
