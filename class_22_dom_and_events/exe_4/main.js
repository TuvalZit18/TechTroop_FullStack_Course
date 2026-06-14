const button = document.getElementById("btnSubmit");
button.addEventListener("click", () => {
  validate();
});

const validate = () => {
  const name = document.getElementById("name").value;
  const salary = parseInt(document.getElementById("salary").value);
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value;

  const formFooter = document.querySelector(".form-footer");
  const existing = formFooter.querySelector(".error-message");
  if (existing) existing.remove();

  const showError = (msg) => {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = msg;
    formFooter.appendChild(errorMessage);
  };

  if (name.length === 0) return showError("Name is missing");
  if (name.length < 2)
    return showError("Name must be longer than 2 characters");

  if (!salary) return showError("Salary is missing");
  if (salary <= 10000 || salary >= 16000)
    return showError("Salary must be greater than 10,000 but less than 16,000");

  if (birthday.length === 0) return showError("Birthday may not be empty");

  if (phone.length === 0) return showError("Phone is missing");
  if (phone.length !== 10) return showError("Phone must be 10 digits long");

  const formCard = document.querySelector(".form-card");
  formCard.style.display = "none";

  const welcome = document.createElement("h2");
  welcome.textContent = `Welcome, ${name}!`;
  document.body.appendChild(welcome);
};
