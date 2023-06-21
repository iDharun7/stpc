function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get values from the form
  var name = document.getElementById('name').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var email = document.getElementById('email').value;

  // Redirect to the next page
  window.location.href = 'mainpage.html?';
}
