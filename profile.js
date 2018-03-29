window.onload = getDB(), profileads();
var NoteID;

function getDB() {

 var xmlhttp = new XMLHttpRequest();


 xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { //ready
   console.log(JSON.parse(xmlhttp.responseText));
   var arr = JSON.parse(xmlhttp.responseText);
   console.log(arr);
   var out = "";
   var out2 = "";
   var i;
   for (i = 0; i < arr.length; i++) {
    out2 += arr[i].FirstName;

   }

   out = "";
   for (i = 0; i < arr.length; i++) {
    out += arr[i].Votes;

   }
   document.getElementById('votes').innerHTML = (" (Ääniä: " + out + ")");
   out = "";
   for (i = 0; i < arr.length; i++) {
    out += arr[i].LastName;

   }
   document.getElementById('lname').innerHTML = (out2 + " " + " " + out);
   out = "";
   for (i = 0; i < arr.length; i++) {
    out += arr[i].Description;
   }
   document.getElementById('Description').innerHTML = out;
   out = "";
   for (i = 0; i < arr.length; i++) {
    out += arr[i].FirstName;
   }
   document.getElementById('editfname').value = out;
   out = "";
   for (i = 0; i < arr.length; i++) {
    out += arr[i].LastName;
   }
   document.getElementById('editlname').value = out;
   out = "";
   for (i = 0; i < arr.length; i++) {
    out += arr[i].Email;
   }
   var outcome="mailto:"+out;
   document.getElementById("email").value = outcome;
   document.getElementById("email").innerHTML = out;
   document.getElementById('editemail').value = out;
   out = "";
   for (i = 0; i < arr.length; i++) {
    out += arr[i].Description;
   }
   document.getElementById('editdesc').value = out;
   out = "";
   for (i = 0; i < arr.length; i++) {
    out += arr[i].Password;
   }
   document.getElementById('editpwd').value = out;


   var rate = "";
   var i;

   for (i = 0; i < arr.length; i++) {
    rate += arr[i].Rating;
   }
   if (rate >= 1) {
    document.getElementById('star1').className = "fa fa-star checked";
   }
   else {
    document.getElementById('star1').className = "fa fa-star";
   }
   if (rate >= 1.5) {
    document.getElementById('star2').className = "fa fa-star checked";
   }
   else {
    document.getElementById('star2').className = "fa fa-star";
   }
   if (rate >= 2.5) {
    document.getElementById('star3').className = "fa fa-star checked";
   }
   else {
    document.getElementById('star3').className = "fa fa-star";
   }
   if (rate >= 3.5) {
    document.getElementById('star4').className = "fa fa-star checked";
   }
   else {
    document.getElementById('star4').className = "fa fa-star";
   }
   if (rate >= 4.5) {
    document.getElementById('star5').className = "fa fa-star checked";
   }
   else {
    document.getElementById('star5').className = "fa fa-star";
   }



  }

 }

 xmlhttp.open('get', "PHP/profiili.php", true);
 xmlhttp.send();
}




function EditProfile() {

 var email = $("#editemail").val();
 var pwd = $("#editpwd").val();
 var lname = $("#editlname").val();
 var fname = $("#editfname").val();
 var desc = $("#editdesc").val();


 if (email != "" && pwd != "" && lname != "" && fname != "" && desc != "") {

  $.ajax({
   type: 'post',
   url: 'PHP/profileup.php',
   data: {
    email: email,
    pwd: pwd,
    lname: lname,
    fname: fname,
    desc: desc
   },
   success: function (response) {
    if (response != "fail") {

     window.location.href = "profile.html";
     alert("profiilin muokkaus onnistui");
     console.log(response);


    }
    else {
     alert("hups!");
     window.location.href = "profile.html";
    }
   }
  });


 }
 else {
  alert("Please Fill All The Details");
 }

 return false;
}


document.getElementById("notebtn").onclick = function addnote() {


 var radio = $(":radio[name=asema]:checked").val();
 var loc = $("#addloc").val();
 var note = $("#addnote").val();
 var head = $("#addhead").val();

 var date;
 date = new Date();
 date = date.getUTCFullYear() + '-' +
  ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
  ('00' + date.getUTCDate()).slice(-2) + ' ' +
  ('00' + date.getUTCHours()).slice(-2) + ':' +
  ('00' + date.getUTCMinutes()).slice(-2) + ':' +
  ('00' + date.getUTCSeconds()).slice(-2);

 alert(date);

 if (loc != "" && note != "") {

  $.ajax({
   type: 'post',
   url: 'PHP/addnote.php',
   data: {
    radio: radio,
    note: note,
    loc: loc,
    head: head,
    date: date

   },
   success: function (response) {
    if (response != "fail") {

     window.location.href = "profile.html";
     alert("ilmoitus lisätty");
     console.log(response);


    }
    else {
     alert("hups!");
     window.location.href = "profile.html";
    }
   }
  });


 }
 else {
  alert("täytä kaikki kohdat");
 }

 return false;
}



function profileads() {

 var xmlhttp = new XMLHttpRequest();


 xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { //ready
   var arr = JSON.parse(xmlhttp.responseText);

   console.log(arr);

   var out = "";
   var i;

   var toAdd = document.getElementById('ad');
   for (i = 0; i < arr.length; i++) {


    if (arr[i].Kuvaus != "") {
     var note = document.createElement('div');
     note.id = "notep" + i;
     var h = document.createElement('h2');
     var p1 = document.createElement('p');
     var p2 = document.createElement('p');
     var p3 = document.createElement('p');

     h.innerHTML = arr[i].Head;
     p1.innerHTML = arr[i].Location;
     p2.innerHTML = arr[i].Kuvaus;
     p3.innerHTML = arr[i].Time;
     note.className = "transbox2";
     toAdd.className = "row text-center";


     note.appendChild(h);
     note.appendChild(p1);
     note.appendChild(p2);
     note.appendChild(p3);
     toAdd.appendChild(note);
    }
   }

  }



 }

 xmlhttp.open('get', "/PROJEKTI/PHP/profilenote.php", true);
 xmlhttp.send();
}




document.getElementById('editbtn').onclick = function getJobs() {
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { //ready
   console.log(xmlhttp.responseText);
   console.log(JSON.parse(xmlhttp.responseText));
   var arr = JSON.parse(xmlhttp.responseText);
   document.getElementById('id2').style.display = 'block';

   Tclear();
   var eka = document.getElementById("edithead");
   var i;
   for (i = 0; i < arr.length; i++) {
    var job = document.createElement("option");
    var text = document.getElementById("note");

    eka.appendChild(job);
    job.value = arr[i].Head;
    console.log(arr[i].Head);

    job.innerHTML = arr[i].Head;

   }


  }

 }



 xmlhttp.open('get', "PHP/profilenote.php", true);
 xmlhttp.send();

}

function Tclear() {
 var element = document.getElementById("edithead");
 element.innerHTML = "";

}

function showJob(str) {
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { //ready
   console.log(JSON.parse(xmlhttp.responseText));
   var arr = JSON.parse(xmlhttp.responseText);
   NoteID = arr[0].NoteID;
   var res = arr[0].Kuvaus;
   var del = arr[0].UserID;
   document.getElementById("note").innerHTML = res;

  }
 }
 xmlhttp.open('get', "PHP/changetext.php?q=" + str, true);
 xmlhttp.send();



}

document.getElementById("muokkaus").onclick = function postEdit() {

 var noteid = NoteID;
 var loc = $("#editloc").val();
 var note = $("#note").val();
 var head = $("#edithead").val();

 var date;
 date = new Date();
 date = date.getUTCFullYear() + '-' +
  ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
  ('00' + date.getUTCDate()).slice(-2) + ' ' +
  ('00' + date.getUTCHours()).slice(-2) + ':' +
  ('00' + date.getUTCMinutes()).slice(-2) + ':' +
  ('00' + date.getUTCSeconds()).slice(-2);

 alert(date);

 if (loc != "" && note != "") {

  $.ajax({
   type: 'post',
   url: 'PHP/editnote.php',
   data: {
    noteid: noteid,
    note: note,
    loc: loc,
    head: head,
    date: date

   },
   success: function (response) {
    if (response != "fail") {

     window.location.href = "profile.html";
     alert("ilmoitus päivitetty");
     console.log(response);


    }
    else {
     alert("hups!");
     window.location.href = "profile.html";
    }
   }
  });


 }
 else {
  alert("täytä kaikki kohdat");
 }

 return false;
}

document.getElementById('delbtn').onclick = function delNote() {
 var noteid = NoteID;
 $.ajax({
  type: 'post',
  url: 'PHP/editnote.php',
  data: {
   noteid: noteid,
  },
  success: function (response) {
   if (response != "fail") {

    window.location.href = "profile.html";
    alert("ilmoitus poistettu.");
    document.getElementById()


   }
   else {
    alert("hups!");
    window.location.href = "profile.html";

   }
  }
 });





 return false;
}
