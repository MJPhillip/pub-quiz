//If new chat has been sent, add it to the page
function reloadData(){
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange  = function() {
      document.getElementById("chat").innerHTML = this.responseText;
    };
  xmlhttp.open("GET", "getchat.php", true);
  xmlhttp.send();
}

//Keep checking if the text file has changed
var previous = "";
setInterval(function() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.responseText != previous) {
                reloadData();
                previous = ajax.responseText;
            }
        }
    };
    ajax.open("POST", "content.txt", true); //Use POST to avoid caching
    ajax.send();
}, 1000);

//Add the chat in initially
var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange  = function() {
    document.getElementById("chat").innerHTML = this.responseText;
  };
xmlhttp.open("GET", "getchat.php", true);
xmlhttp.send();
