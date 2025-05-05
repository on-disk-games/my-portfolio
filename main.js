document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const submitBtn = document.getElementById("submitBtn");
  const game = document.getElementById("game");
  const fact = document.getElementById("fact");
  const toggleMoreBtn = document.getElementById("toggleMoreBtn");
  const revealFactBtn = document.getElementById("revealFactBtn");

  // Fun facts array
  const funFacts = [
    "Did you know? The first website ever created is still online!",
    "Did you know? JavaScript was created in just 10 days.",
    "Fun fact: The name 'Google' was a spelling mistake of 'googol'.",
    "The first computer bug was a real moth stuck in a relay!",
    "CSS stands for Cascading Style Sheets — not Creative Style Syntax 😉",
    "GitHub was launched in 2008 — the same year Iron Man released!"
  ];

  // Handle submit button click
  submitBtn?.addEventListener("click", () => {
    alert("Thank you for your message!");
  });

  // Toggle fun fact section visibility
  toggleMoreBtn.addEventListener("click", function () {
  if (game) {
    game.classList.toggle("open");
  }
});


  // Reveal a random fun fact
  revealFactBtn?.addEventListener("click", () => {
    if (fact) {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      fact.style.display = "block";
      fact.textContent = funFacts[randomIndex];
    }
  });
});
