function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
//   }

  function changeBackgroundColor() {
    const body = document.body;
    const colorSpan = document.querySelector('.color');

    // Генеруємо випадковий колір
    const randomColor = getRandomHexColor();

    // Змінюємо фон <body>
    body.style.backgroundColor = randomColor;

    // Встановлюємо текстовий вміст для span.color
    colorSpan.textContent = randomColor;

    // Опціонально: можна також додати анімацію зміни кольору
  }