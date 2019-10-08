


const game = {
    timer: 30,
    score1: 0,
    score2: 0
}


const myQuestions = [
    {question: 'What is 2 plus 2?', a: ['4', false], b: ['3', true], c: ['2', false], d:['Spaghetti', false]},
    {question: 'What is 3 plus 3?', a: ['4', false], b: ['3', false], c: ['9', true], d:['Chinchilla', false]},
    {question: 'What is green and scary?', a: ['4', false], b: ['3', false], c: ['9', false], d:['Alligators', true]},
    {question: 'What is 9 plus 9?', a: ['18', true], b: ['3', false], c: ['9', false], d:['Chinchilla', false]}
  
   
]



let shuffledArray = [];
  
while(myQuestions.length !== 0) {
    let randomIndex = Math.floor(Math.random() * myQuestions.length);
    shuffledArray.push(deck[randomIndex]);
    deck.splice(randomIndex, 1);
    }



console.log(myQuestions[0].question);
console.log(myQuestions[0].a[0]);
console.log(myQuestions[0].a[1]);
console.log(myQuestions[0].b[1]);



// const startTimer = () => {


// }



const loadQuestions = () => {
    $('.question').text(myQuestions[0].question);
    $('.answer1').text(myQuestions[0].a[0]).attr('data-value', myQuestions[0].a[1])
    $('.answer2').text(myQuestions[0].b[0]).attr('data-value', myQuestions[0].b[1])
    $('.answer3').text(myQuestions[0].c[0]).attr('data-value', myQuestions[0].c[1])
    $('.answer4').text(myQuestions[0].d[0]).attr('data-value', myQuestions[0].d[1])

}

loadQuestions();

const showResults = ($results, $correct) => {
   
     if ($correct == 'true') {   
        $('.question').text(`${$results} is correct!`);
     } else {
        $('.question').text(`${$results} is incorrect. Next Player's Turn.`)
     }


}

$('.answer1').on('click', (e) => {
    if ($(e.target).attr('data-value') == 'true') {
        $(e.target).css('background-color', 'green');
    } else {
        $(e.target).css('background-color', 'red')
    }

    let $results = $(e.target).html();
    let $correct = $(e.target).attr('data-value')
    showResults($results, $correct);
    

})

$('.answer2').on('click', (e) => {
    if ($(e.target).attr('data-value') == 'true') {
        $(e.target).css('background-color', 'green');
    } else {
        $(e.target).css('background-color', 'red')
    }

    let $results = $(e.target).html();
    let $correct = $(e.target).attr('data-value')
    showResults($results, $correct);
    
})

$('.answer3').on('click', (e) => {
    if ($(e.target).attr('data-value') == 'true') {
        $(e.target).css('background-color', 'green');
    } else {
        $(e.target).css('background-color', 'red')
    }

    let $results = $(e.target).html();
    let $correct = $(e.target).attr('data-value')
    showResults($results, $correct);

})

$('.answer4').on('click', (e) => {
    if ($(e.target).attr('data-value') == 'true') {
        $(e.target).css('background-color', 'green');
    } else {
        $(e.target).css('background-color', 'red')
    }

    let $results = $(e.target).html();
    let $correct = $(e.target).attr('data-value')
    showResults($results, $correct);
})



$('.question').on('click', (){
      loadQuestions();
}); 