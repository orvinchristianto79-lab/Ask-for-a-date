const date =
    localStorage.getItem("selectedDate");

const mood =
    localStorage.getItem("selectedMood");

document.getElementById(
    "selectedDate"
).textContent = date;

document.getElementById(
    "selectedMood"
).textContent = mood;