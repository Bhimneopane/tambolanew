function fetchTicket() {
    let code = document.getElementById('playerCode').value;
    let tickets = JSON.parse(localStorage.getItem("ticketCodes"));

    if (!tickets[code]) {
        alert("❌ Invalid code. Please enter the correct code.");
        return;
    }

    document.getElementById('playerTicket').innerHTML = displayTicketGrid(tickets[code]);
}
