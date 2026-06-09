const moods = document.querySelectorAll(".mood-option");

moods.forEach(mood => {

    mood.addEventListener("click", () => {

        const moodName =
            mood.querySelector("span").textContent;

        localStorage.setItem(
            "selectedMood",
            moodName
        );

        window.location.href = "detail.html";

    });

});