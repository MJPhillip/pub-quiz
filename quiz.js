fetch('https://opentdb.com/api.php?amount=10&category=10')
    .then(result => result.json())
  .then((res) => {
    showQuestions(res);
  })
.catch(err => console.log(err))


function showQuestions(result){
    var questionArray = result.results;
    var numberArray = 0;
    var questions = document.getElementById('questions');
    var answers = document.getElementById('answers');
    var answerMessage = document.getElementById('answerMessage');

    next.addEventListener("click", function(){
      numberArray = numberArray + 1;
    	if(numberArray < questionArray.length){
        questions.innerHTML = "";
        answers.innerHTML = "";
        answerMessage.innerHTML = "";
        questions.innerHTML = questionArray[numberArray].question;
        var answerArray = [questionArray[numberArray].correct_answer,questionArray[numberArray].incorrect_answers[0],questionArray[numberArray].incorrect_answers[1],questionArray[numberArray].incorrect_answers[2]]

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
          answers.innerHTML += "<input type='submit' id='answer" + i + "' value='" + answerArray[i] + "'>";
        };

        for(var i=0; i < answerArray.length; i++){
          var iteration = "answer" + i;
          document.getElementById(iteration).addEventListener("click", function(){
            if(this.value === questionArray[numberArray].correct_answer){
              console.log(questionArray[numberArray].correct_answer);
              answerMessage.innerHTML = "<img src='https://media.giphy.com/media/NodvzZJVrWgKs/giphy.gif' />";
            }
            else{
              console.log(questionArray[numberArray].correct_answer);
              answerMessage.innerHTML = "<img src='https://media.giphy.com/media/1014RBn4HVSTK/giphy.gif' />";
            }
          })
        };
      }

      else{
      	console.log("Next round");
      }
    })

};
