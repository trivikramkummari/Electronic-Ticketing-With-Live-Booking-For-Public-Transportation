// Ticket Confirmation with alert message
function confirmTicket() {
    var source = document.getElementById("source").value;
    var destination = document.getElementById("destination").value;
    var date = document.getElementById("date").value;

    if (source && destination && date) {
        var confirmationMessage = "Ticket details:\nSource: " + source + "\nDestination: " + destination + "\nDate: " + date;
        if (confirm(confirmationMessage)) {
            alert("Ticket booked successfully! On " +date+ " Valid till 24 hours. Happy Journey!");
        }
    } else {
        alert("Please fill in all the fields.");
    }
}