// Отримуємо всі елементи з класом "circle"
const circleElements = document.querySelectorAll('.circle');

// Перебираємо всі отримані елементи
circleElements.forEach((circleElement) => {
  // Отримуємо значення атрибута "data-anim"
  const dataAnimValue = circleElement.getAttribute('data-anim');
  
  // Додаємо значення атрибута "data-anim" як клас до елемента
  circleElement.classList.add(dataAnimValue);
  
  // Перевіряємо, чи застосувалася анімація, додавши клас
  circleElement.addEventListener('animationend', () => {
    console.log(`Анімація "${dataAnimValue}" завершилася.`);
  });
});
