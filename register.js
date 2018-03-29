function register() {

 var firstname = $("#firstname").val();
 var lastname = $("#lastname").val();
 var email = $("#regEmail").val();
 var pwd = $("#regPwd").val();
 if (firstname != "" && lastname != "" && email != "" && pwd != "") {
  $.ajax({
   type: 'post',
   url: 'PHP/testphp.php',
   data: {
    Register: "Register",
    firstname: firstname,
    lastname: lastname,
    email: email,
    pwd: pwd
   },
   success: function (response) {
    if (response != "fail") {

     window.location.href = "projekt.html";
     alert(response + "\n" + "muista kirjautua sisään!");
    }
    else {
     alert("Käyttäjä varattu");
    }
   }
  });
 }

 else {
  alert("Täytä kaikki kentät.");
 }

 return false;
}
