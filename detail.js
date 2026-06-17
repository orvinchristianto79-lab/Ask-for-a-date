const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const date = localStorage.getItem("selectedDate");

  const mood = localStorage.getItem("selectedMood");

  const message = `Date Confirmation 

  Date: ${date}
  Mood: ${mood}

  Places to go: Bakmiku Kwanji and Neko Ice Cream Cafe
  Pickup Time: 18:00

  Can't wait to see you `;

  console.log(message);

  setTimeout(() => {
    window.open(
      `https://wa.me/62895393465017?text=${encodeURIComponent(message)}`,
    );

    setTimeout(() => {
      window.location.href = "thankyou.html";
    }, 1000);
  }, 3000);
});
