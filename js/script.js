// File: js/script.js

document.getElementById('messageForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById('messageText').value;
  const output = document.getElementById('output');

  if (!gender) {
    alert("Silakan pilih jenis kelamin.");
    return;
  }

  const genderValue = gender.value;
  const currentTime = new Date().toString();

  output.innerHTML = `
    <p><strong>Current time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
    <p><strong>Jenis Kelamin:</strong> ${genderValue}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  // Optional: Reset form after submit
  // this.reset();
});
