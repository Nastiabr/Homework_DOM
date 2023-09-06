const submitButton = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const fio = document.getElementsByName("fio")[0].value;
  const phone = document.querySelector('[data-form="Номер телефону"]').value;
  const birthday = document.querySelector(
    '[data-form="Дата народження"]'
  ).value;
  const email = document.querySelector('[data-form="Електронна пошта"]').value;

  const outputText = `ПІБ: ${fio}<br>Номер телефону: ${phone}<br>Дата народження: ${birthday}<br>Електронна пошта: ${email}`;
  outBlock.innerHTML = outputText;
});