<!-- I created a database called login with a table called logintable for this project.
The table has three columns, username, passwrd and theme. The others are VARCHAR while 
theme is integer with values 1 or 0. If theme is 0, preferred theme is light mode. Else, dark mode 
-->

<?php
include 'db_connection.php';
$conn = OpenCon();

$sql = "SELECT theme FROM logintable where username='ken' and passwrd = '1234'";
$theme = $conn->query($sql);
$newTheme = mysqli_fetch_array($theme);//Convert object to array

CloseCon($conn);
?>

<html>

<head>
    <title>Web Theme Changer</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="css/webTheme.css">
</head>
<div id="dom-target" style="display: none;">
    <?php 
        echo htmlspecialchars($newTheme["theme"]);
    ?>
</div>
<body>
    <button class="toggle-theme" id="toggle-theme" onclick="toggleTheme()">
        Toggle Theme
    </button>
    <p id="placeholder-text">
        I am light theme.
    </p>
    <script src="js/webTheme.js"></script>
</body>

</html>


