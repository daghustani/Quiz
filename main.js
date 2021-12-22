
  function submitQuiz() {

    function answerScore (qName) {
      var radiosNo = document.getElementsByName(qName);

      for (var i = 0, length = radiosNo.length; i < length; i++) {
          if (radiosNo[i].checked) {
          var answerValue = Number(radiosNo[i].value);
        }
      }
      if (isNaN(answerValue)) {
        answerValue = 0;
      }
      return answerValue;
    }

    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
    console.log("CalcScore: " + calcScore); 

    function correctAnswer (correctStringNo, qNumber) {
      return ("The correct answer for" + qNumber + ": &nbsp;<strong>" +
        (document.getElementById(correctStringNo).innerHTML) + "</strong>");
      }

    if (answerScore('q1') === 0) {
      document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
      document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
      document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
      document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }

    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
      questionCounter++;
    }

    var showScore = "Your Score: " + calcScore +"/" + questionCounter;

    if (calcScore === questionCounter) {
      showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
  }

 

  //collection
 var answersRef = firebase.database();


 //Listen for form submit
 document.getElementById('quizForm').addEventListener('submit', submitForm);
 
 // submit form 
 function submitForm(e){
 e.preventDefault();
 console.log(123);
 
 //Get Value
 var q1 = getInputVal("q1");
 var q2 = getInputVal("q2");
 var q3 = getInputVal("q3");
 var q4 = getInputVal("q4");
 var userScore = getInputVal("userScore");

 
 //save massage
 saveAnswers(q1, q2, q3, q4, userScore);
 
 
  //clear from
   document.getElementById('quizForm').reset();
 }
 
 // function to get form value 
 function getInputVal(id){
   return document.getElementById(id).value;
 }
 
 // save massage to firebase
 function saveAnswers(q1, q2, q3, q4, userScore){
   var newAnswerRef = answersRef.push();
   newAnswerRef.set({
     q1 : q1,
     q2 : q2,
     q3 : q3,
     q4 : q4,
     userScore : userScore
   });
 
 }
 