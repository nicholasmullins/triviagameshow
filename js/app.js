
// $('.button').hide();
// $('.results').show();

$('.button').hide();
$('#start').show();



const player = {
    timer: 30,
    scoreOne: 0,
    scoreTwo: 0
}



const myQuestions = [
    {question: 'What is 2 plus 2?', a: ['4', true], b: ['3', false], c: ['2', false], d:['Spaghetti', false]},
    {question: 'What is 3 plus 3?', a: ['4', false], b: ['3', false], c: ['9', true], d:['Chinchilla', false]},
    {question: 'What is green and scary?', a: ['4', false], b: ['3', false], c: ['9', false], d:['Alligators', true]},
    {question: 'What is 9 plus 9?', a: ['18', true], b: ['3', false], c: ['9', false], d:['Chinchilla', false]}
  
]


let randomPlayer = Math.floor(Math.random() * 2) + 1;
$('.score').attr('data-value', randomPlayer);

let playerSwitch;

let shuffledArray = [];
  
while(myQuestions.length !== 0) {
    let randomIndex = Math.floor(Math.random() * myQuestions.length);
    shuffledArray.push(myQuestions[randomIndex]);
    myQuestions.splice(randomIndex, 1);
 }

let myTimer;
let secondTimer;

 function startTimer() {
     player.timer -= 1;
     $('#countdown').html(player.timer);
     if (player.timer == 0){
         clearInterval(myTimer);
         $('.button').hide();
         $('.results').show();
         $('.results').html(`Player ${randomPlayer} is out of time. Click to start Next Player's Turn`)   
         if (randomPlayer == 1) {
            $(`.player${randomPlayer}`).css('background-color', '');
            randomPlayer = 2;
           $(`.player${randomPlayer}`).css('background-color', 'red');
        } else if (randomPlayer == 2) {
            $(`.player${randomPlayer}`).css('background-color', '');
            randomPlayer = 1;
            $(`.player${randomPlayer}`).css('background-color', 'red');
        }
        playerSwitch = true;

     } 
 }

 function resetTimer() {
    myTimer = setInterval(startTimer, 1000);

 }

 function clearTimer() {
     clearInterval(myTimer);
     player.timer = 31;
     myTimer = setInterval(startTimer, 1000);
 }
 

 

const loadQuestions = () => {
    const randomQuestion = shuffledArray.pop();
    $('.question').text(randomQuestion.question);
    $('.button').show();
    $('.answer1').text(randomQuestion.a[0]).attr('data-value', randomQuestion.a[1])
    $('.answer2').text(randomQuestion.b[0]).attr('data-value', randomQuestion.b[1])
    $('.answer3').text(randomQuestion.c[0]).attr('data-value', randomQuestion.c[1])
    $('.answer4').text(randomQuestion.d[0]).attr('data-value', randomQuestion.d[1])

}


const showResults = ($results, $correct) => {
     $('.button').hide();
     $('.results').show();
     if ($correct == 'true') {
        $('.results').css('background-color', 'green');
        $('.results').html(`${$results} is correct!. Click for the Next Question!`);
        playerSwitch = false;
        console.log(playerSwitch);
        if(randomPlayer == 1) {
          player.scoreOne += 1;
          $('#score1').html(player.scoreOne);
        } else {
          player.scoreTwo += 1;
          $('#score2').html(player.scoreTwo);
        };

     } else {
        if (randomPlayer == 1) {
            $(`.player${randomPlayer}`).css('background-color', '');
            randomPlayer = 2;
           $(`.player${randomPlayer}`).css('background-color', 'red');
        } else if (randomPlayer == 2) {
            $(`.player${randomPlayer}`).css('background-color', '');
            randomPlayer = 1;
            $(`.player${randomPlayer}`).css('background-color', 'red');
        }
        $('.results').html(`${$results} is incorrect. It is now Player ${randomPlayer}'s Turn.`)
        playerSwitch = true;
        console.log(playerSwitch);
     }

}


$('.answer1').on('click', (e) => {
  
    let $results = $(e.target).html();
    let $correct = $(e.target).attr('data-value')
    showResults($results, $correct);
    

})

$('.answer2').on('click', (e) => {
   
    let $results = $(e.target).html();
    let $correct = $(e.target).attr('data-value')
    showResults($results, $correct);
    
})

$('.answer3').on('click', (e) => {
   
    let $results = $(e.target).html();
    let $correct = $(e.target).attr('data-value')
    showResults($results, $correct);

})

$('.answer4').on('click', (e) => {
    
    let $results = $(e.target).html();
    let $correct = $(e.target).attr('data-value')
    showResults($results, $correct);
})

$('.results').on('click', () => {
    $('.button').css('background-color', '');
    $('.results').hide()
    loadQuestions();
    if (playerSwitch == true) {
          clearTimer();
    }
})



$('.question').on('click', () => {
    $('#start').hide();
    $('#question').show(); 
    $('.button').show();
    $(`.player${randomPlayer}`).css('background-color', 'red');
    resetTimer();
    loadQuestions();
}); 