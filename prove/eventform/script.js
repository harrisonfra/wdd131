const form = document.querySelector("#eventForm");
const typeSelect = document.querySelector("#type");
const codeContainer = document.querySelector("#codeContainer");
const codeLabel = document.querySelector("#codeLabel");
const codeInput = document.querySelector("#code");
const output = document.querySelector("#output");

const EVENT_CODE = "EVENT131";

function updateCodeField() {
    const value = typeSelect.value;

    if (value === "student") {
        codeContainer.hidden = false;
        codeLabel.textContent = "Student I#";
        codeInput.placeholder = "9-digit student number";
        codeInput.inputMode = "numeric";
    } else if (value === "guest") {
        codeContainer.hidden = false;
        codeLabel.textContent = "Access Code";
        codeInput.placeholder = "Enter the event access code";
        codeInput.inputMode = "text";
    } else {
        codeContainer.hidden = true;
    }

    codeInput.value = "";
}

typeSelect.addEventListener("change", updateCodeField);
updateCodeField();

function isFutureDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen > today;
}


function showError(message) {
    output.className = "error";
    output.textContent = message;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.className = "";
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.type.value;
    const eventDate = form.eventDate.value;
    const code = form.code.value.trim();


    if (!isFutureDate(eventDate)) {
        showError("Please choose an event date later than today.");
        return;
    }

    if (type === "student" && !/^\d{9}$/.test(code)) {
        showError("Please enter a valid 9-digit Student I#.");
        return;
    }

    if (type === "guest" && code.toUpperCase() !== EVENT_CODE) {
        showError("That access code is incorrect. Please enter the correct event code.");
        return;
    }

    output.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>${type}</p>
        <p>${eventDate}</p>
    `;

    form.reset();
    updateCodeField();
});