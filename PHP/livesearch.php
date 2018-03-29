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
                $conn->query('SET CHARACTER SET utf8');
                
                 
       $q = $_REQUEST["q"];
        session_start();
        $ses_id= session_id();
        $sql = "SELECT USER.FirstName, USER.LastName, USER.Rating, USER.UserID, NOTE.Location, NOTE.Head, NOTE.Kuvaus , NOTE.Time FROM USER INNER JOIN NOTE ON USER.UserID = NOTE.UserID WHERE( NOTE.Head LIKE '%$q%' ) AND Antaja = 1 ORDER BY  `NOTE`.`Head` DESC ";
        $result = $conn->query($sql);
        $response = array();
        while($row = mysqli_fetch_assoc($result)){
            
            $response[] = $row;
             
        }
       
         // get the q parameter from URL
        
        
        // lookup all hints from array if $q is different from ""
        // Output "no suggestion" if no hint was found or output correct values 
        echo json_encode($response);

        
    


 $conn->close();

?>