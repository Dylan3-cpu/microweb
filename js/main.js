function crearUsuario(user, email, password) {
  fetch("http://localhost:3000/usuarios", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: user,
      email: email,
      password: password
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("✅ Usuario creado:", data);
  })
  .catch(error => {
    console.error("❌ Error al crear usuario:", error);
  });
}
