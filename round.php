<html>
<?php
if (isset($_POST['content']) && isset($_POST['name'])){
    $username = stripslashes($_POST['name']);
    $content = stripslashes($_POST['content'] . "\n");
    $file_data = $username . " : " . $content;
    $file_data .= file_get_contents('content.txt');
    file_put_contents('content.txt', $file_data);
}
?>
<p id="questions"></p>
<p id="answers"></p>
<p id="answerMessage"></p>
<button id="next">Next</button>

<script src="quiz.js"></script>
<form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="post">
  <span id="usernameInput">Username: <input type="text" name="name" <?php if (isset($username)){echo "value='" . $username . "'"; }?> required></span>
  Message: <input type="text" name="content" required>
  <input type="submit" id="sendMessage" value="Submit">
</form>
<div id="chat"></div>
<script src="addchat.js"></script>

</html>
