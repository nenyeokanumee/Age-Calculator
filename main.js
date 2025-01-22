let userSelect = document.getElementById("user-select");
userSelect.max = new Date().toISOString().split("T")[0]; // Disable future dates

userSelect.addEventListener("change", () => {
    let selectedDate = userSelect.value;

    if (!selectedDate) {
        document.getElementById("age-result").textContent = "Please select a date.";
        return;
    }

    let birthDate = new Date(selectedDate);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the current month/day is before the birth month/day
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    
    if (age<2) message = "You are 1 year old";
    if (age<1) message = `You are ${Math.abs(monthDifference)} months old`;
    else message = `You are ${age} years old`;

    document.getElementById("age-result").textContent = message;
});