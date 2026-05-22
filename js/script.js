document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        return;
      }

      event.preventDefault();

      const messageBox = form.querySelector(".form-message");
      if (messageBox) {
        messageBox.textContent = "Thank you. Your form has been submitted successfully.";
        messageBox.classList.remove("d-none");
      }

      form.reset();
    });
  });
});