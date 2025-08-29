// Functie care cere mesajele traduse de la backend si le pune in HTML
function loadMessages(lang) {
  fetch('/messages?lang=' + lang)
    .then(res => res.json())
    .then(data => {
      document.getElementById("title").textContent = data.welcome;
      document.getElementById("desc").textContent = data.description;
    });
}

// Ascultăm schimbarea selectului de limbă
document.addEventListener("DOMContentLoaded", () => {
  const langSelector = document.getElementById("langSelect");
  langSelector.addEventListener("change", (e) => {
    loadMessages(e.target.value);
  });

  // Limba implicită
  loadMessages(langSelector.value);
});
