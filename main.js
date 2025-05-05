document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const submitBtn = document.getElementById("submitBtn");
  const nameInput = document.querySelector(".contact-form input[type='text']");
  const emailInput = document.querySelector(".contact-form input[type='email']");
  const messageInput = document.querySelector(".contact-form textarea");
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

 submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // prevents page reload

  const name = nameInput?.value.trim();
  const email = emailInput?.value.trim();
  const message = messageInput?.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all the fields before submitting.");
    return;
  }

  alert("Thank you for your message!");

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleMoreBtn = document.getElementById("toggleMoreBtn");
  const game = document.getElementById("game");

  if (toggleMoreBtn && game) {
    toggleMoreBtn.addEventListener("click", () => {
      game.classList.toggle("open");
    });
  }
});

  // Toggle fun fact section visibility
  if (toggleMoreBtn && game) {
    toggleMoreBtn.addEventListener("click", () => {
      game.classList.toggle("open");
    });
  }

  // Reveal a random fun fact
  if (revealFactBtn && fact) {
    revealFactBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      fact.style.display = "block";
      fact.textContent = funFacts[randomIndex];
    });
  }
});
