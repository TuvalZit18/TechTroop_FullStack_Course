const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const checkReservation = () => {
  console.log("dsadjakshdlaksdjas");
  const input = document.getElementById("nameInput");
  const message = document.getElementById("message");
  const name = input.value;
  if (reservations[name]) {
    if (reservations[name].claimed)
      message.textContent = `Hmm, someone already claimed this reservation`;
    else message.textContent = `Welcome, ${name}`;
  } else {
    message.textContent = `You have no reservation`;
  }
  input.value = "";
};
