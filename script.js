const form = document.getElementById("contactForm");

const msg = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  msg.style.display = "block";

  form.reset();

  setTimeout(() => {

    msg.style.display = "none";

  }, 3000);

});