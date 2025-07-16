const form = document.getElementById('booking-form');
const msg = document.getElementById('form-msg');

form.addEventListener('submit', function (e) {
  msg.textContent = "Submitting...";
});

