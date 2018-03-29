function login()

{
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
					alert("Tervetuloa!");
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

window.onload = getAds(), getAdsJob(), checksession();
//ladataan etusivulle työntekijöiden ilmoitukset


function checksession() {
	var xmlhttp = new XMLHttpRequest();


	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { //ready
			console.log(xmlhttp.responseText);
			if (xmlhttp.responseText != 0) {
				document.getElementById("login").style.display = 'none';
				document.getElementById("register").style.display = 'none';
				document.getElementById("logout").style.display = 'inline-block';
				document.getElementById("profiili").style.display = 'inline-block';
			}


		}
	}

	xmlhttp.open('get', "PHP/checkprofiili.php", true);
	xmlhttp.send();
}

function getAds() {

	var xmlhttp = new XMLHttpRequest();


	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {;
			console.log(JSON.parse(xmlhttp.responseText));
			var arr = JSON.parse(xmlhttp.responseText);

			console.log(arr[0]);




			var i;
			var toAdd = document.getElementById('ad');
			for (i = 0; i < 4; i++) {
				if (arr[i].Location != "") {
					var note = document.createElement('div');

					var h = document.createElement('h2');
					var p1 = document.createElement('p');
					var p2 = document.createElement('p');
					var p3 = document.createElement('p');
					var p4 = document.createElement('p');
					var s1 = document.createElement('span');
					s1.id = 'star1';
					var s2 = document.createElement('span');
					s2.id = 'star2';
					var s3 = document.createElement('span');
					s3.id = 'star3';
					var s4 = document.createElement('span');
					s4.id = 'star4';
					var s5 = document.createElement('span');
					s5.id = 'star5';

					h.setAttribute("name", arr[i].UserID);
					h.setAttribute("id", arr[i].UserID);
					h.innerHTML = arr[i].FirstName + " " + arr[i].LastName;
					p1.innerHTML = arr[i].Head;
					p2.innerHTML = arr[i].Location;
					p4.innerHTML = arr[i].Time.substring(0, 11);
					var rate = arr[i].Rating;

					if (rate >= 1) {
						s1.className = "fa fa-star checked";
					}
					else {
						s1.className = "fa fa-star";
					}
					if (rate >= 1.5) {
						s2.className = "fa fa-star checked";
					}
					else {
						s2.className = "fa fa-star";
					}
					if (rate >= 2.5) {
						s3.className = "fa fa-star checked";
					}
					else {
						s3.className = "fa fa-star";
					}
					if (rate >= 3.5) {
						s4.className = "fa fa-star checked";
					}
					else {
						s4.className = "fa fa-star";
					}
					if (rate >= 4.5) {
						s5.className = "fa fa-star checked";
					}
					else {
						s5.className = "fa fa-star";
					}
					note.className = "transbox";
					toAdd.className = "row text-center";



					note.appendChild(h);
					note.appendChild(p1);
					note.appendChild(p2);
					note.appendChild(p3);
					note.appendChild(p4);
					p3.appendChild(s1);
					p3.appendChild(s2);
					p3.appendChild(s3);
					p3.appendChild(s4);
					p3.appendChild(s5);
					toAdd.appendChild(note);

					h.addEventListener('click', function (e) {
						var x = e.target.id || e.srcElement;
						console.log(e.target.id);

						if (x != "") {
							$.ajax({
								type: 'post',
								url: 'PHP/thisProfile.php',
								data: {
									id: x
								},
								success: function (response) {
									if (response != "fail") {
										localStorage.setItem("https://tutorial-konstaj.c9users.io", response);
										console.log(response);
										window.location.href = "profiles.html";

									}
									else {
										alert("Käyttäjää ei löydy");
									}
								}
							});
						}

						else {
							alert("Käyttäjää ei löydy");
						}

						return false;
					});

				}

			}

		}
	}
	xmlhttp.open('get', "PHP/hantti.php", true);
	xmlhttp.send();
}


//ladataan työnantajien ilmoitukset


function getAdsJob() {

	var xmlhttp = new XMLHttpRequest();


	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { //ready
			console.log(JSON.parse(xmlhttp.responseText));
			var arr = JSON.parse(xmlhttp.responseText);
			console.log(arr);



			var i;

			var toAdd = document.getElementById('adWork');
			for (i = 0; i < 3; i++) {
				if (arr[i].Head == "") { return }

				var note = document.createElement('div');

				note.setAttribute('id', 'note');
				var h = document.createElement('h2');
				var p1 = document.createElement('p');
				var p2 = document.createElement('p');
				var p3 = document.createElement('p');
				h.setAttribute("name", arr[i].UserID);
				h.setAttribute("id", arr[i].UserID);
				h.innerHTML = arr[i].FirstName + " " + arr[i].LastName;
				p1.innerHTML = arr[i].Head;
				p2.innerHTML = arr[i].Location;
				p3.innerHTML = arr[i].Time.substring(0, 11);
				note.className = "transbox";
				toAdd.className = "row text-center";
				note.appendChild(h);
				note.appendChild(p1);
				note.appendChild(p2);
				note.appendChild(p3);

				toAdd.appendChild(note);

				h.addEventListener('click', function (e) {
					var x = e.target.id || e.srcElement;
					console.log(e.target.id);

					if (x != "") {
						$.ajax({
							type: 'post',
							url: 'PHP/thisProfile.php',
							data: {
								id: x
							},
							success: function (response) {
								if (response != "fail") {
									localStorage.setItem("https://tutorial-konstaj.c9users.io", response);
									console.log(response);
									window.location.href = "profiles.html";

								}
								else {
									alert("Käyttäjää ei löydy");
								}
							}
						});
					}

					else {
						alert("Käyttäjää ei löydy");
					}

					return false;
				});

			}
		}
	}

	xmlhttp.open('get', "PHP/noteWork.php", true);
	xmlhttp.send();
}
