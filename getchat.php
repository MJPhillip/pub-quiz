<?php
  $openfile = fopen("content.txt", "r") or die("Unable to open file!");
  // Output one line until end-of-file
  while(!feof($openfile)) {
   echo fgets($openfile) . "<br>";
  }
  fclose($openfile);
?>
