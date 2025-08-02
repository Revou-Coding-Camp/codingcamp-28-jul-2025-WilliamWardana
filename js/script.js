function handleSubmit(event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pesan = document.getElementById("pesan").value;

  const outputDiv = document.getElementById("output");
  const waktu = new Date().toString();

  outputDiv.innerHTML = `
    <p><strong>Current time :</strong> ${waktu}</p>
    <p><strong>Nama :</strong> ${nama}</p>
    <p><strong>Tanggal Lahir :</strong> ${tanggal}</p>
    <p><strong>Jenis Kelamin :</strong> ${gender}</p>
    <p><strong>Pesan :</strong> ${pesan}</p>
  `;
}
