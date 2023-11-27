function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  function createBoxes() {
    const input = document.querySelector('input');
    const amount = parseInt(input.value, 10);

    // Перевірка на валідність значення введеного користувачем
    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert('Please enter a valid number between 1 and 100.');
      return;
    }

    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; // Очищення вмісту перед новим рендером

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxesContainer.appendChild(box);

      size += 10;
    }

    // Очищення значення в інпуті
    input.value = '';
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }