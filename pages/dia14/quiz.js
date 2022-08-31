var myQuestions = [
	{
		question: 'Qual foi o desafio do dia 2?',
		answers: {
			a: 'toggle',
			b: 'loading',
			c: 'Hello world'
		},
        correctAnswer: 'c'
	},
	{
        question: 'Qual foi o desafio do dia 13?',
        answers: {
          a: 'Menu responsivo',
          b: 'Criar o repositorio',
          c: 'Galeria de imagens'
        },
        correctAnswer: 'a'
    },

    {
        question: 'Qual dia foi o desafio de utilizar a biblioteca particle.js?',
        answers: {
          a: '07/21',
          b: '10/21',
          c: '11/21'
        },
        correctAnswer: 'b'
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
		var output = [];
		var answers; 

		
		for(var i=0; i<questions.length; i++){
			
			
			answers = [];

			
			for(letter in questions[i].answers){

				
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + '<p>'+ questions[i].answers[letter]   +'</p>'
						
					+ '</label>'
				);
			}

			
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
