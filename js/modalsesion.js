const abrir = document.getElementById("111")//este abre el modal de iniciar sesion
const modalin =document.getElementById("IN")//esto lo que permite es buscar el id con esto y mostrar el modal
const closed = document.getElementById("cerrar")//esta es el id para cerrar el modal
const abrir2 = document.getElementById("222")//y este el de registrarse
const modalreg = document.getElementById("REG")//este va a llamar el id para el modal de registro
const cerrar = document.getElementById("close")//para cerrar el segundo modal

abrir.addEventListener("click",()=>{
    modalin.style.display= "block";  //lo que permite que al darle click al boton muestre el modal 
});
cerrar.addEventListener("click", ()=>{
    modalin.style.display= "none"; //y con esto lo cerramos oka oka?
});
abrir2.addEventListener("click", ()=>{
    modalreg.style.display= "block";
});
closed.addEventListener("click",()=>{
    modalreg.style.display= "none";
});