fetch('https://opentdb.com/api.php?amount=10&category=10')
    .then(result => result.json())
  .then((res) => {
    showQuestions(res);
  })
.catch(err => console.log(err))


function showQuestions(result){
    var questionArray = result.results;
    document.getElementById('questions').innerHTML += questionArray[0].question;

    document.getElementById('answers').innerHTML += questionArray[0].correct_answer + questionArray[0].incorrect_answers[0] + questionArray[0].incorrect_answers[1] + questionArray[0].incorrect_answers[2];
}
