// Отримуємо посилання на елементи, які нам потрібні
const gradients = document.querySelectorAll('.gradient');
const colors = document.querySelectorAll('.color');
const priceElement = document.getElementById('outprice');

// Встановлюємо початкову ціну
let currentPrice = 189.99;

// Функція для зміни ціни на основі вибраного кольору
function changePrice(price) {
  priceElement.textContent = price.toFixed(2); // Оновлюємо текст ціни
}

// Додаємо обробник кліку на кожен варіант кольору
colors.forEach((color) => {
  color.addEventListener('click', () => {
    // Отримуємо ціну з атрибута data-price вибраного кольору
    const newPrice = parseFloat(color.getAttribute('data-price'));
    
    // Змінюємо поточну ціну на нову ціну
    currentPrice = newPrice;

    // Видаляємо клас "active" з усіх варіантів кольору
    colors.forEach((c) => {
      c.classList.remove('active');
    });

    // Додаємо клас "active" до вибраного кольору
    color.classList.add('active');

    // Змінюємо ціну на сторінці
    changePrice(currentPrice);
  });
});

// Викликаємо функцію для встановлення початкової ціни
changePrice(currentPrice);