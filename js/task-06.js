

// function getRandomHexColor() {
//       return `#${Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .padStart(6, '0')}`;
//     }

//     document.addEventListener('DOMContentLoaded', function () {
//       const input = document.querySelector('input');
//       const createButton = document.querySelector('[data-create]');
//       const destroyButton = document.querySelector('[data-destroy]');
//       const boxesContainer = document.getElementById('boxes');

//       createButton.addEventListener('click', function () {
//         const amount = parseInt(input.value);

//         if (amount >= 1 && amount <= 100) {
//           createBoxes(amount);
//           input.value = '';
//         } else {
//           alert('Please enter a number between 1 and 100.');
//         }
//       });

//       destroyButton.addEventListener('click', function () {
//         destroyBoxes();
//       });

//       function createBoxes(amount) {
//         boxesContainer.innerHTML = '';

//         for (let i = 0; i < amount; i++) {
//           const box = document.createElement('div');
//           box.style.backgroundColor = getRandomHexColor();
//           box.style.width = `${30 + i * 10}px`;
//           box.style.height = `${30 + i * 10}px`;
//           boxesContainer.appendChild(box);
//         }
//       }

//       function destroyBoxes() {
//         boxesContainer.innerHTML = '';
//       }
//     });
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


     
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');

  const boxes = Array.from({ length: amount }).reduce((acc, _, i) => {
    const size = 30 + i * 10;

    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    acc.push(box);
    return acc;
  }, []);
    boxes.forEach(box => boxesContainer.appendChild(box));
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