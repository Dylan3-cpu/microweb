document.getElementById("SEND").addEventListener("click", registrarUsuario);

function registrarUsuario() {
  const user = document.getElementById("user").value.trim();
  const email = document.getElementById("mail").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!user || !email || !password) {
    alert("Por favor completa todos los campos.");
    return;
  }

  crearUsuario(user, email, password);
}

function crearUsuario(user, email, password) {
  fetch("http://localhost:3000/usuarios", {   // <-- URL relativa aquí
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user, email, password })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    console.log("✅ Usuario creado:", data);
    alert("Usuario creado correctamente.");
    // Limpiar inputs si quieres
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
  })
  .catch(error => {
    console.error("❌ Error al crear usuario:", error);
    alert("Hubo un error al crear el usuario.");
  });
}
