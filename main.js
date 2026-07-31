// Courrian TP — scripts communs

// Menu mobile
const burger = document.querySelector(".burger");
const navLiens = document.querySelector(".nav-liens");
if (burger && navLiens) {
  burger.addEventListener("click", () => navLiens.classList.toggle("ouvert"));
}

// Filtres galerie (page réalisations)
const filtres = document.querySelectorAll(".filtres button");
const photos = document.querySelectorAll(".photo");
filtres.forEach((btn) => {
  btn.addEventListener("click", () => {
    filtres.forEach((b) => b.classList.remove("actif"));
    btn.classList.add("actif");
    const cat = btn.dataset.filtre;
    photos.forEach((p) => {
      p.classList.toggle("cache", cat !== "tous" && p.dataset.categorie !== cat);
    });
  });
});

// Formulaire de contact (page contact)
const formulaire = document.querySelector("#form-contact");
if (formulaire) {
  formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    // À brancher sur votre solution d'envoi (Formspree, PHP mail, etc.)
    formulaire.reset();
    document.querySelector(".message-confirmation").classList.add("visible");
    window.scrollTo({ top: formulaire.offsetTop - 120, behavior: "smooth" });
  });
}
