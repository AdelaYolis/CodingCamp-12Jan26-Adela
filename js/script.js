welcomeMessage();

function welcomeMessage() {
  let userResponse = prompt("Hai! What is your name?");
  if (!userResponse) userResponse = "Friend"; // handle cancel / kosong

  document.getElementById("welcome-speech").innerText =
    `Welcome, ${userResponse}! to Adel Website`;

  console.log(userResponse);
}

/* Contact Form Validation + Output */
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

function setError(field, msg) {
  const el = document.querySelector(`[data-error="${field}"]`);
  if (el) el.textContent = msg || "";
}

function getCheckedGender() {
  const checked = document.querySelector('input[name="gender"]:checked');
  return checked ? checked.value : "";
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  // reset error
  ["name", "email", "gender", "message"].forEach(f => setError(f, ""));

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const gender = getCheckedGender();
  const message = document.getElementById("message").value.trim();

  let valid = true;

  if (name.length < 2) { setError("name", "Nama minimal 2 karakter."); valid = false; }
  if (!email.includes("@") || !email.includes(".")) { setError("email", "Email tidak valid."); valid = false; }
  if (!gender) { setError("gender", "Pilih jenis kelamin dulu."); valid = false; }
  if (message.length < 5) { setError("message", "Pesan minimal 5 karakter."); valid = false; }

  if (!valid) {
    statusEl.textContent = "Periksa input kamu ya 🙂";
    return;
  }

  statusEl.textContent =
    `Terkirim! Nama: ${name}, Email: ${email}, Gender: ${gender}, Pesan: "${message}"`;

  // opsi: reset form setelah submit
  form.reset();
});
