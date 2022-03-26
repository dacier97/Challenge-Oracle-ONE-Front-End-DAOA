/*function validar(){

  let confirm = validarDatos();
  console.log(confirm);

  if (confirm == true){
    alert("se envio msn");
  }
}*/

function validarDatos(){

    window.event.preventDefault();

    if(document.form.nombre.value == "") {

      alert("campo nombre obligatorio");
      document.form.nombre.focus();
      console.log("valor nombre");
      

    } else if(document.form.email.value == ""){
      alert("campo email obligatorio");
      document.form.email.focus();
      console.log("valor email");
      

    }else if(document.form.email.value.indexOf("@")==-1 || document.form.email.value.indexOf(".")==-1) {

      alert("email es invalido");
      document.form.email.focus();
      console.log("incorrecto email");
    

    } else if(document.form.asunto.value == ""){
      alert("campo asunto obligatorio");
      document.form.asunto.focus();
      console.log("valor asunto");
    

    }else if(document.form.mensaje.value.length<=20){


      alert("mensaje campo obligatorio y tener minimo 20 caracteres");
      document.form.mensaje.focus();
      console.log("valor mensaje");
      
    }else{

      alert("Mensaje Enviado");
      document.querySelector(".form").reset();
    }


}

document.querySelector("form").addEventListener("submit",validarDatos);
