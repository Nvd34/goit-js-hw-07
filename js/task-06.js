
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


     


  function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');

    const boxesHTML = Array.from({ length: amount }).reduce((html, _, i) => {
      const size = 30 + i * 10;
      const color = getRandomHexColor();

    
      html += `<div style="width:${size}px; height:${size}px; background-color:${color};"></div>`;
      return html;
    }, '');

 
    boxesContainer.insertAdjacentHTML('beforeend', boxesHTML);
  }


  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }

  document.querySelector('[data-create]').addEventListener('click', function() {
    const input = document.querySelector('input');
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

     document.querySelector('[data-destroy]').addEventListener('click', function () {
       destroyBoxes();
     });