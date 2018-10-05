fetch('https://opentdb.com/api.php?amount=10&category=10')
    .then(result => result.json())
  .then((res) => {
    showQuestions(res);
  })
.catch(err => console.log(err))


function showQuestions(result){
    var questionArray = result.results;
    document.getElementById('questions').innerHTML += questionArray[0].question;

    var answerArray = [questionArray[0].correct_answer,questionArray[0].incorrect_answers[0],questionArray[0].incorrect_answers[1],questionArray[0].incorrect_answers[2]]

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    shuffle(answerArray);

    for(var i=0; i < answerArray.length; i++){
      document.getElementById('answers').innerHTML += "<input type='submit' onclick='checkAnswer()' value='" + answerArray[i] + "'>";
    };

    function checkAnswer(){
      console.log("Hi")
    }

};
