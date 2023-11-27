
  function handleSubmit(event) {
    event.preventDefault(); // Зупиняє стандартну відправку форми

    // Отримання значень полів форми
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Валідація на пусті поля
    if (emailValue === '' || passwordValue === '') {
      alert('All form fields must be filled in');
      return;
    }

    // Створення об'єкта із введеними даними
    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    // Виведення об'єкта в консоль
    console.log(formData);

    // Очищення значень полів форми
    event.target.reset();
  }