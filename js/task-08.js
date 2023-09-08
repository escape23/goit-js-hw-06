const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля");
  }
  const message = { email: email.value, Password: password.value };

  console.log(message);
  event.currentTarget.reset();
}
