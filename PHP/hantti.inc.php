<?php
class profile{
        


    public function __construct(){
        
    }
    
       //Tulostaa kaikki profiilit
    public function getProfiles(){
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
        $sql = "SELECT UserID, firstname, lastname FROM USER";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
    // output data of each row
            while($row = $result->fetch_assoc()) {
                echo json_encode(
            array("id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]));
            }
        } else {
           echo json_encode(
            array("0 results"));
        }
        
    }
    
    //Tallentaa kantaan uuden profiilin eli rekisteröityminen
    public function addProfile(){
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
        
        
        //Otetaan vastaan muuttujat rekisteröinnistä
        $first = $_POST['firstname'];
        $last = $_POST['lastname'];
        $email = $_POST['email'];
        $pwd = $_POST['pwd'];
        $aika= $_POST['aika'];
        
        $testsql = "SELECT EXISTS * FROM USER WHERE Email='$email'";
        
        if ($conn->query($testsql) === TRUE){
            echo "the email is taken" ;
        }
        else{
        
        $sql = "INSERT INTO USER (FirstName, LastName, Email, Password)
       VALUES ('$first', '$last', '$email', '$pwd')";
        
        if ($conn->query($sql) === TRUE) {
            echo ("Tilin luominen onnistui. ");
        } else {
            echo json_encode(
            array("Error: " . $sql . "<br>" . $conn->error));
        }
        }
         $conn->close();
    }
    
    //Tulostaa tietyn profiilin
     public function thisProfile(){
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
         $id= $_POST['id'];

        $sql = "SELECT UserID FROM USER WHERE UserID='$id'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $sql = "SELECT USER.FirstName, USER.LastName, USER.Email, USER.Description, USER.UserID, USER.Score, USER.Votes, USER.Rating, NOTE.Location, NOTE.Head, NOTE.Kuvaus , NOTE.Time FROM USER INNER JOIN NOTE ON USER.UserID = NOTE.UserID WHERE USER.UserID = '$id' ORDER BY  `NOTE`.`Time` DESC ";
            $result = $conn->query($sql);
            $response = array();

            while($row = mysqli_fetch_assoc($result)){ 
            
                $response[] = $row;
                $jsonData = json_encode($response);
                
            }echo $jsonData;
        }
        else{
        echo "the profile is missing" ;
        }
        
            
         
         
         
         $conn->close();
     }
    
 
    //Poistaa määritetyn profiilin
    public function delProfile($id){
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
        $sql = "DELETE FROM USER WHERE UserId=$id";

        if ($conn->query($sql) === TRUE) {
            echo "Profile deleted successfully";
        } else {
            echo "Error deleting profile: " . $conn->error;
        }
        $conn->close();
    }
    
    //Päivittää määritetyn profiilin
    public function upProfile($id, $first, $last, $mail){
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
        
        $sql = "UPDATE USER SET FirstName = '$first', LastName = '$last', Email = '$mail' WHERE UserID=$id";

        if ($conn->query($sql) === TRUE) {
            
            echo "Profile updated successfully";
        } else {
            echo "fail";
             $conn->error;
        }
        $conn->close();
    }
    
    // kirjautuminen
public function Login(){
    
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
 
        $email = $_POST['email'];
        $pwd = $_POST['pwd'];
        $sql = ("SELECT * FROM USER WHERE Email='$email' and Password='$pwd'");
        $results = mysqli_query($conn,$sql);
        
         if($row=mysqli_fetch_array($results))
         {
          $_SESSION['email']=$row['email'];
          $a = session_id();
          $ses_id= "UPDATE USER SET session='$a' WHERE Email='$email'";
          if ($conn->query($ses_id) === TRUE){
              
          echo "$a";
          }
          else{
              echo "error";
          }
         }
         else
         {
          echo "fail";
         }
         exit();
        }
        
        

    
public function logout(){
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
        $ses = session_id();
        $ses_null = ("UPDATE USER SET session = NULL WHERE session='$ses' ");
        if($conn->query($ses_null) === TRUE){
        session_destroy();}
        if (session_destroy){
            header("Location: projekt.html"); /* Redirect browser */
            exit();
        }
        else{
            echo ("wrong");
            
        }
        
        $conn->close();

    
}

    public function profiilitiedot(){
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
        $sql = "SELECT * FROM USER WHERE session = '$ses_id'";
        $result = $conn->query($sql);
        $response = array();

            while($row = mysqli_fetch_assoc($result)){ 
            
                $response[] = $row;
                $jsonData = json_encode($response);
                
            }echo $jsonData;
            
    }
    
    
    public function profiiliUp(){
        
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
        
        $email = $_POST['email'];
        $pwd = $_POST['pwd'];
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $desc = $_POST['desc'];
        session_start();
        $ses_id= session_id();
        
        
        $sql = ("UPDATE USER SET FirstName ='$fname', LastName='$lname', Description='$desc', Email= '$email' , Password= '$pwd' WHERE session='$ses_id'");


        $result = $conn->query($sql);
        $response = array();
        while($row = mysqli_fetch_assoc($result)){ 
            
                $response[] = $row;
                $jsonData = json_encode($response);
                
            }echo $jsonData;
            
    }


    
    
       public function checkSession(){
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
        $sql = "SELECT * FROM USER WHERE session = '$ses_id'";
        $result = $conn->query($sql); 
        $response = array();
        while($row = mysqli_fetch_assoc($result)){ 
            
                $response[] = $row;
                $jsonData = json_encode($response);
                
            }
            
            if($jsonData[12] != 0){
            
            echo 1;
            
           } else{
                echo 0;
            }
    }


//Tulostetaan rating-arvot
public function getRatings(){
        
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
        $id = $_POST['id'];
        
        $sql = ("SELECT UserID, Score, Votes FROM USER  WHERE UserID = '$id'");

        $result = $conn->query($sql);
        $response = array();
        while($row = mysqli_fetch_assoc($result)){ 
            
                $response[] = $row;
                $jsonData = json_encode($response);
                
            }echo $jsonData;
            
    }
    
    //Tallennetaan rating-arvot
public function setRatings(){
        
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
        
        $id = $_POST['id'];
        $score = $_POST['newscore'];
        $votes = $_POST['newvotes'];
        $rating = $_POST['newrating'];
        
        $sql = "UPDATE USER SET Rating = '$rating', Score = '$score', Votes='$votes' WHERE UserID = '$id'";

        if ($conn->query($sql) === TRUE) {
            echo "Profile updated successfully";
        } else {
            echo "fail";
            $conn->error;
        }
        $conn->close();
            
    }


}

?>