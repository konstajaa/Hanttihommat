<?php
class note{
    
    public function __construct(){
        
    }
    public function getTietynNotes(){
        $servername = getenv('IP');
        $username = getenv('C9_USER');
        $database = "HanttiDB";
        $password = "";
        $dbport = 3306;
       
        $conn = new mysqli($servername, $username, $password, $database, $dbport);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
         $conn->query('SET CHARACTER SET utf8');
        session_start();
        $ses_id= session_id();
        
        $sql = "SELECT USER.UserID, USER.Score, USER.Votes, USER.Rating, NOTE.NoteID, NOTE.Head, NOTE.Location, NOTE.Kuvaus, NOTE.Time FROM USER INNER JOIN NOTE ON USER.UserID = NOTE.UserID WHERE session = '$ses_id'";
        
       
        $result = $conn->query($sql);
        $response = array();

            while($row = mysqli_fetch_assoc($result)){ 
            
                $response[] = $row;
                $jsonData = json_encode($response);
                
            }
            
            echo $jsonData;
            
        
        
    }
        public function getDesc(){
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
        $ses_id = session_id();
        
        $sql = "SELECT * FROM NOTE INNER JOIN USER ON NOTE.UserID = USER.UserID WHERE USER.session = '$ses_id' AND Head='$q'";
        $result = $conn->query($sql);
        $response = array();

            while($row = mysqli_fetch_assoc($result)){ 
            
                $response[] = $row;
                $jsonData = json_encode($response);
                
            }echo $jsonData;
            
         $conn->close();
    }
    
    
    //Lisää noten 
    public function addNote(){
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
        $loc = $_POST['loc'];
        $note = $_POST['note'];
        $radio = $_POST['radio'];
        $head = $_POST['head'];
        $aika = $_POST['date'];
        
        session_start();
        $ses_id = session_id();
        
        $sql = "SELECT UserID FROM USER WHERE session = '$ses_id'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $userid = $row[UserID];
        
    }
        }
        if($radio == 1){
        $sql = "INSERT INTO NOTE (Head, Time, Location, UserID, Kuvaus, Antaja) VALUES ('$head', '$aika', '$loc', '$userid', '$note' , '1' )";
        }
        
        if($radio == 0){
            $sql = "INSERT INTO NOTE (Head, Time ,Location, UserID, Kuvaus, Tekija) VALUES ('$head', '$aika', '$loc', '$userid', '$note' , '1' )";
            
        }
        
        if ($conn->query($sql) === TRUE) {
            echo ($radio);
        } else {
            echo ("fail");
        }
        
         $conn->close();
    }
    
   
    
    //Päivittää määritetyn noten
    public function upNote(){
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
        $loc = $_POST['loc'];
        $note = $_POST['note'];
        $head = $_POST['head'];
        $noteid = $_POST['noteid'];
        session_start();
        $ses_id = session_id();
        
        $sql = "UPDATE NOTE SET Head = '$head', Kuvaus = '$note' , Location ='$loc' WHERE NoteID = '$noteid'";

        if ($conn->query($sql) === TRUE) {
            echo "Profile updated successfully";
        } else {
            echo "fail";
            $conn->error;
        }
        $conn->close();
    }
    
    //Poistaa määritetyn noten
    public function delNote(){
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
        $NoteID = $_POST['noteid'];
        
        $conn->query('SET CHARACTER SET utf8');
        
        $sql = "DELETE FROM HanttiDB.NOTE WHERE NOTE.NoteID = $NoteID";
        if ($conn->query($sql) === TRUE) {
            echo "Note deleted successfully";
        } else {
            echo "Error deleting note: " . $conn->error;
        }
        $conn->close();
    }
    
    //Tulostaa kaikki työntekijöiden ilmoitukset
    public function getTekijaNotes(){
        $servername = getenv('IP');
        $username = getenv('C9_USER');
        $database = "HanttiDB";
        $password = "";
        $dbport = 3306;
       
        $conn = new mysqli($servername, $username, $password, $database, $dbport);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $conn->query('SET CHARACTER SET utf8');
        $sql = "SELECT USER.FirstName, USER.LastName, USER.Score, USER.Votes, USER.Rating, USER.UserID, NOTE.Location, NOTE.Head, NOTE.Kuvaus, NOTE.Time FROM USER INNER JOIN NOTE ON USER.UserID = NOTE.UserID WHERE NOTE.Tekija = 1 ORDER BY  `NOTE`.`Time` DESC ";
        $result = $conn->query($sql);
        $response = array();

            while($row = mysqli_fetch_assoc($result)){ 
            
                $response[] = $row;
                $jsonData = json_encode($response);
                
            }echo $jsonData;
         $conn->close();
        
    }
    
    //Tulostaa kaikki työnantajien ilmoitukset
    public function getAntajaNotes(){
        $servername = getenv('IP');
        $username = getenv('C9_USER');
        $database = "HanttiDB";
        $password = "";
        $dbport = 3306;
       
        $conn = new mysqli($servername, $username, $password, $database, $dbport);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $q = $_REQUEST["q"];
        $conn->query('SET CHARACTER SET utf8');
        session_start();
        $ses_id= session_id();
        $sql = "SELECT USER.FirstName, USER.LastName, USER.Score, USER.Votes, USER.Rating, USER.UserID, NOTE.Location, NOTE.Head, NOTE.Kuvaus , NOTE.Time FROM USER INNER JOIN NOTE ON USER.UserID = NOTE.UserID WHERE NOTE.Antaja = 1 ORDER BY  `NOTE`.`Time` DESC ";
        $result = $conn->query($sql);
        $response = array();

            while($row = mysqli_fetch_assoc($result)){ 
            
                $response[] = $row;
                $jsonData = json_encode($response);
                
            }echo $jsonData;
        
    }
    
    //Tulostaa tietyn Noten
     public function thisNote($NoteID){
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
         $sql = "SELECT Head, Description FROM NOTE WHERE NoteID=$NoteID LIMIT 1";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo json_encode(
            array(" - Head: " . $row["Head"]. "<br>" . $row["Description"]. "<br>"));
            }
        } else {
           echo json_encode(
            array("0 results"));
        }
         $conn->close();
     }
     
    public function searchNotes() {
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
        session_start();
        $ses_id= session_id();
        $sql = "SELECT USER.FirstName, USER.LastName, USER.Rating, USER.UserID, NOTE.Location, NOTE.Head, NOTE.Kuvaus , NOTE.Time FROM USER INNER JOIN NOTE ON USER.UserID = NOTE.UserID ORDER BY  `NOTE`.`Time` DESC ";
        $result = $conn->query($sql);
        $response = array();
        while($row = mysqli_fetch_assoc($result)){
            
            $response[] = $row;
            
                
        }
        // get the q parameter from URL
        $q = $_REQUEST["q"];
        
        $hint = "";
        
        // lookup all hints from array if $q is different from "" 
        if ($q !== "") {
            $q = strtolower($q);
            $len=strlen($q);
            foreach($response as $Head) {
                if (stristr($q, substr($Head, 0, $len))) {
                    if ($hint === "") {
                        $hint = $Head;
                    } else {
                        $hint= " $Head";
                    }
                }
            }
        }
        
        // Output "no suggestion" if no hint was found or output correct values 
        echo json_encode($hint === "" ? "no suggestion" : $hint);

        
    }
}
?>