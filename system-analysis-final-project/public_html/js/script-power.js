document.getElementById('buyButton').addEventListener('click', function () {
    // Assuming you have a payment page named "payment.html," redirect the user to that page.
    window.location.href = 'power-payment.html';
});

document.getElementById('alternatives').addEventListener('click', function () {
    // Assuming you have a payment page named "payment.html," redirect the user to that page.
    window.location.href = 'power-alternatives.html';
});

document.getElementById('back').addEventListener('click', function () {
    // Assuming you have a payment page named "payment.html," redirect the user to that page.
    window.location.href = 'index.html';
});

document.getElementById('continue').addEventListener('click', function () {
    alert('Thank you for purchasing "The Hunger Games"!');
    // Here, you can implement the logic for actual purchase actions, like redirecting to a payment page.
});

