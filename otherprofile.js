window.onload = getDB(), checksession();

function login() {
	var date;
	var email = $("#email").val();
	var pwd = $("#pwd").val();

	if (email != "" && pwd != "") {
		$.ajax({
			type: 'post',
			url: 'PHP/login.php',
			data: {
				login: "Login",
				email: email,
				pwd: pwd
			},
			success: function (response) {
				if (response != "fail") {
					window.location.href = "profile.html";
					alert(response);
				}
				else {
					alert("Wrong Details");
				}
			}
		});
	}
	else {
		alert("Please Fill All The Details");
	}
	return false;
}

function checksession() {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { //ready
			console.log(xmlhttp.responseText);
			if (xmlhttp.responseText != 0) {
				document.getElementById("login").style.display = 'none';
				document.getElementById("register").style.display = 'none';
				document.getElementById("logout").style.display = 'inline-block';
			}
		}
	}
	xmlhttp.open('get', "PHP/checkprofiili.php", true);
	xmlhttp.send();
}

function getDB() {


	var arr = JSON.parse(localStorage['https://tutorial-konstaj.c9users.io']);
	console.log(arr);
	var out = "";
	var out2 = "";


	out2 += arr[0].FirstName;

	out += arr[0].LastName;
	document.getElementById('lname').innerHTML = out2 +" "+out;
	out = "";

	out += arr[0].Description;
	document.getElementById('Description').innerHTML = out;
	out = "";
	
	out += arr[0].Email;
	console.log(arr[0].Email);
	var outcome="mailto:"+out;
	document.getElementById("email").value = outcome;
	document.getElementById('email').innerHTML = out;
	
	out = "";
	out+= arr[0].Votes;
	document.getElementById("votes").innerHTML=  (" (Ääniä: " + out + ")");



	var rate = arr[0].Rating;
	console.log(rate)


	if (rate >= 1) {
		document.getElementById('star1').className = "fa fa-star checked";
	}
	else {
		document.getElementById('star1').className = "fa fa-star";
	}
	if (rate >= 2) {
		document.getElementById('star2').className = "fa fa-star checked";
	}
	else {
		document.getElementById('star2').className = "fa fa-star";
	}
	if (rate >= 3) {
		document.getElementById('star3').className = "fa fa-star checked";
	}
	else {
		document.getElementById('star3').className = "fa fa-star";
	}
	if (rate >= 4) {
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



	var out = "";
	var i;

	var toAdd = document.getElementById('ad');
	for (i = 0; i < arr.length; i++) {
		if (arr[i].Kuvaus != "") {



			var note = document.createElement('div');
			note.id = "notep" + i;
			var p1 = document.createElement('p');
			var p2 = document.createElement('p');
			var p3 = document.createElement('p');
			var p = document.createElement('p');
			p.innerHTML = arr[i].Head;
			p1.innerHTML = arr[i].Location;
			p2.innerHTML = arr[i].Kuvaus;
			p3.innerHTML = arr[i].Time;
			note.className = "transbox2";
			toAdd.className = "row text-center";


			note.appendChild(p);
			note.appendChild(p1);
			note.appendChild(p2);
			note.appendChild(p3);
			toAdd.appendChild(note);
		}
	}

}

//TÄHTIEN REKISTERÖINTI



function mouseOver1() {
	document.getElementById('star1').className = "fa fa-star checked";
	document.getElementById('star2').className = "fa fa-star";
	document.getElementById('star3').className = "fa fa-star";
	document.getElementById('star4').className = "fa fa-star";
	document.getElementById('star5').className = "fa fa-star";
}

function mouseOver2() {
	document.getElementById('star1').className = "fa fa-star checked";
	document.getElementById('star2').className = "fa fa-star checked";
	document.getElementById('star3').className = "fa fa-star";
	document.getElementById('star4').className = "fa fa-star";
	document.getElementById('star5').className = "fa fa-star";
}

function mouseOver3() {
	document.getElementById('star1').className = "fa fa-star checked";
	document.getElementById('star2').className = "fa fa-star checked";
	document.getElementById('star3').className = "fa fa-star checked";
	document.getElementById('star4').className = "fa fa-star";
	document.getElementById('star5').className = "fa fa-star";
}

function mouseOver4() {
	document.getElementById('star1').className = "fa fa-star checked";
	document.getElementById('star2').className = "fa fa-star checked";
	document.getElementById('star3').className = "fa fa-star checked";
	document.getElementById('star4').className = "fa fa-star checked";
	document.getElementById('star5').className = "fa fa-star";
}

function mouseOver5() {
	document.getElementById('star1').className = "fa fa-star checked";
	document.getElementById('star2').className = "fa fa-star checked";
	document.getElementById('star3').className = "fa fa-star checked";
	document.getElementById('star4').className = "fa fa-star checked";
	document.getElementById('star5').className = "fa fa-star checked";
}

document.getElementById("star1").addEventListener("mouseover", mouseOver1);
document.getElementById("star2").addEventListener("mouseover", mouseOver2);
document.getElementById("star3").addEventListener("mouseover", mouseOver3);
document.getElementById("star4").addEventListener("mouseover", mouseOver4);
document.getElementById("star5").addEventListener("mouseover", mouseOver5);
// document.getElementById("star1").addEventListener("mouseout", getDB);
// document.getElementById("star2").addEventListener("mouseout", getDB);
// document.getElementById("star3").addEventListener("mouseout", getDB);
// document.getElementById("star4").addEventListener("mouseout", getDB);
// document.getElementById("star5").addEventListener("mouseout", getDB);
document.getElementById("star1").addEventListener("click", function () { rate(1) }, false);
document.getElementById("star2").addEventListener("click", function () { rate(2) }, false);
document.getElementById("star3").addEventListener("click", function () { rate(3) }, false);
document.getElementById("star4").addEventListener("click", function () { rate(4) }, false);
document.getElementById("star5").addEventListener("click", function () { rate(5) }, false);

function rate(num) {
	var arr = JSON.parse(localStorage['https://tutorial-konstaj.c9users.io']);
	
	var oldScore = arr[0].Score;
	var oldVotes = arr[0].Votes;
	var id = arr[0].UserID;
	var newscore = parseInt(oldScore, 10) + parseInt(num, 10);
	var newvotes = parseInt(oldVotes, 10) + 1;
	var newrating = parseInt(newscore, 10) / parseInt(newvotes, 10);

	if (newscore != "" && newvotes != "" && newrating != "" && id != "") {
		$.ajax({
			type: 'post',
			url: 'PHP/setRating.php',
			data: {
				newscore: newscore,
				newvotes: newvotes,
				newrating: newrating,
				id: id
			},
			success: function (response) {
				if (response != "fail") {

					alert("Tähdet rekisteröity");
					console.log(response);
					

				}
				else {
					alert("hups! ratingia ei päivitetty");
					console.log(response);
				}
			}
		});
	}

}
