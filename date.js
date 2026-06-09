const submitDate = document.getElementById("submitDate");

submitDate.addEventListener("click", () => {


    const date =
    document.getElementById("datePicker").value;

    if(date === ""){
        alert("Please select a date ❤️");
        return;
    }

    localStorage.setItem("selectedDate", date);


    window.location.href = "mood.html";

});