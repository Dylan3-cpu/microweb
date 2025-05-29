//para el boton de registrarse
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
/////////////////////////////////////////////////////////////////////////
//para el boton de ingresar
document.getElementById("send").addEventListener("click", IngresarUsuario);

function IngresarUsuario() {
  const user2 = document.getElementById("1").value.trim();
  const email2 = document.getElementById("3").value.trim();
  const password2 = document.getElementById("2").value.trim();

  if (!user2 || !email2 || !password2) {
    alert("Por favor completa todos los campos.");
    return;
  }

  VerificarUsuario(user2, email2, password2);
}

////////////////////////////////////////////////////////////////////77777
//crea el usuario directamente en el json


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
    console.log("✅ usuario creado:", data);
    alert("usuario creado correctamente.");
    // Limpiar inputs si quieres
    document.getElementById("user").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("password").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("fechNacim").value = "";
    document.getElementById("").value = "";

  })
  .catch(error => {
    console.error("❌ Error al crear usuario:", error);
    alert("Hubo un error al crear el usuario.");
  });
}
////////////////////////////////////////////////////////////////////////////////
async function VerificarUsuario(user2,email2,password2){
  const response = await fetch('http://localhost:3000/usuarios');
  const usuarios = await response.json();
  const usercatch = usuarios.find(u =>
    u.user === user2 &&
    u.password === password2&&
    u.email === email2 
  );

if (usercatch) {
  alert("login exitoso para " + usercatch.user);
  window.location.href = "/html/home.html";
} else {
  alert("datos incorrectos");
}
}

//hecho por Darwin Arenas