<?php

include("hantti.inc.php");
include("Note.php");

$servername = getenv('IP');
$username = getenv('C9_USER');
$database = "HanttiDB";
$password = "";
$dbport = 3306;

 

        // Create connection
        $conn = new mysqli($servername, $username, $password, $database, $dbport);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $note = new note();
        $note->getAntajaNotes();

// $profiiliKomennot = new profile();
// $profiiliKomennot->Login();

 $conn->close();
 
 
?>