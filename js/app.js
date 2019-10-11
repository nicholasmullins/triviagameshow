
// $('.button').hide();
// $('.results').show();

$('.button').hide();
$('#start').show();
$('.instructions').show();



const player = {
    timer: 30,
    scoreOne: 0,
    scoreTwo: 0
}



const myQuestions = [
    {question: `Of all of his films, which was the first to have fewer than 100 instances of the work 'f--k?'`, a: ['Pulp Fiction', false], b: ['Django Unchained', false], c: ['Inglorious Basterds', false], d:['Kill Bill', true]},
    {question: 'Who played Vincent Vega?', a: ['Michael Madsen', false], b: ['Samuel L. Jackson', false], c: ['John Travolta', true], d:['Ving Rhames', false]},
    {question: 'Double V Vega was a planned prequel to which movie?', a: ['Pulp Fiction', true], b: ['Kill Bill', false], c: ['Once Upon at Time in Hollywood', false], d:['Reservoir Dogs', false]},
    {question: `Tarantino wrote the screenplay for what Oliver Stone film?`, a: ['Platoon', false], b: ['Natural Born Killers', true], c: ['The Doors', false], d:['World Trade Center', false]},
    {question: `Before he was famous, he worked at a: `, a: ['Video Rental Store', true], b: ['Movie Theater', false], c: ['Community Playhouse', false], d:['Publishing Company', false]},
    {question: `Django and his wife are descendants of what famous fictional African-American figure?`, a: ['Dolemite', false], b: ['Shaft', true], c: ['Apollo Creed', false], d:['Jackie Brown', false]},
    {question: `Which actor had to stop filming at one point he was struggling to use so many racial slurs?`, a: ['Leonardo DiCaprio', true], b: ['Christoph Waltz', false], c: ['Jamie Foxx', false], d:['John Travolta', false]},
    {question: `Which character has a wallet with "Bad MotherF--ka" on it?`, a: ['Vincent Vega', false], b: ['Jules Winnfield', true], c: ['Marsellus Wallace', false], d:['Butch Coolidge', false]},
    {question: `Which actor plays The Bear Jew?`, a: [`B.J. Novak`, false], b: ['Eli Roth', true], c: ['Daniel Bruhl', false], d:['Adrien Brody', false]},
    {question: `Which actor turned down the part of Django?`, a: ['Denzel Washington', false], b: ['Will Smith', true], c: ['Eddie Murphy', false], d:['Dave Chappelle', false]},
    {question: `Which actor has been in almost every Tarantino Film?`, a: ['Kurt Russell', false], b: ['Uma Thurman', false], c: ['Samuel L. Jackson', true], d:['Michael Madsen', false]},
    {question: `Who plays Sharon Tate in "Once Upon a Time in Hollywood?"`, a: ['Sienna Miller', false], b: ['Uma Thurman', false], c: ['Margot Robbie', true], d:['Scarlett Johansson', false]},
    {question: `What artist sings "You Never Can Tell", the song that Travolta and Thurman dance to in "Pulp Fiction"?`, a: ['Chuck Berry', true], b: ['Dick Dale', false], c: ['Buddy Holly', false], d:['Little Richard', false]},
    {question: `Which actor was Tarantino's first pick to play The Bear Jew?`, a: ['Adrien Brody', false], b: ['Adam Sandler', true], c: ['Seth Rogen', false], d:['Jake Gyllenhaal', false]},
    {question: `In Reservoir Dogs, Tarantino gives a long monologues explaining the hidden meaning of a song by this artist?`, a: ['Cyndi Lauper', false], b: ['Whitney Houston', false], c: ['Madonna', true], d:['Barbra Streisand', false]},
    {question: `In "Django Unchained", which actor cut his hand on broken glass after banging it on a table?`, a: ['Jamie Foxx', false], b: ['Christoph Waltz', false], c: ['Walton Goggins', false], d:['Leonardo DiCaprio', true]},
    {question: `Jonah Hill has a small part in this Tarantino film?`, a: ['Django Unchained', true], b: ['Once Upon a Time in Hollywood', false], c: ['Hateful Eight', false], d:['Kill Bill - Vol. 2', false]},
    {question: `Who plays The Bride in Kill Bill??`, a: ['Darryl Hannah', false], b: ['Uma Thurman', true], c: ['Vivica Fox', false], d:['Lucy Liu', false]},
    {question: `As a struggling actor, Tarantino played an Elvis impersonator on which sitcom?`, a: ['Family Matters', false], b: ['Full House', false], c: ['Golden Girls', true], d:['Empty Nest', false]},
    {question: `What is the name of Brad Pitt's character in "Once Upon a Time in Hollywood"`, a: ['Jack Dalton', false], b: ['Jay Sebring', false], c: ['Cliff Booth', true], d:['Steve McQueen', false]},
    {question: `Tarantino has imaginary brand names for different products in his films. Which of these is not a Tarantino brand?`, a: [`Fruit Brute Cereal`, true], b: ['Red Apple Cigarettes', false], c: ['Big Kahuna Burger', false], d:['Wolfs Tooth Dog Food', false]},
    {question: `Fellow director and friend, Robert Rodriguez, co-directed which movie with Quentin?`, a: [`Death Proof`, false], b: ['From Dusk Til Dawn', true], c: ['Reservoir Dogs', false], d:['Desperado', false]},
    {question: `Who scored the soundtrack for Kill Bill for $1?`, a: [`Hans Zimmer`, false], b: ['Danny Elfman', false], c: ['Robert Rodriguez', true], d:['John Travolta', false]},
    {question: `Tarantino has flirted with directing installments of famous movie franchises. Which movie franchise is Tarantino NOT interested in directing?`, a: [`Star Trek`, false], b: ['The Avengers', true], c: ['James Bond', false], d:['Men in Black', false]},
    {question: `Once Upon a Time in Hollywood focuses on Hollywood in 1969. It is loosely based around what historical event?`, a: [`Altamont`, false], b: ['Woodstock', false], c: ['The RFK Assassination', false], d:['The Manson Murders', true]},
    {question: `What actor was the first choice for Bill in "Kill Bill"?`, a: [`Peter Fonda`, false], b: ['Warren Beatty', true], c: ['Dennis Hopper', false], d:['Jack Nicholson', false]},
    {question: `Which Christian Slater movie did Tarantino write?`, a: [`Pump Up The Volume`, false], b: ['True Romance', true], c: ['Heathers', false], d:['Gleaming the Cube', false]},
    {question: `"Jackie Brown is the only movie that Quentin didn't write, who wrote it?`, a: [`Kurt Vonnegut`, false], b: ['James Patterson', false], c: ['Elmore Leonard', true], d:['Chuck Palahniuk', false]},
    {question: `Which actor was originally supposed to play Vincent Vega in "Pulp Fiction"?`, a: [`Harvey Keitel`, false], b: ['Michael Madsen', true], c: ['Tim Roth', false], d:['Steve Buscemi', false]},
    {question: `What SNL alum has a bit part as a British intelligence officer in "Inglourious Basterds?"`, a: [`Mike Myers`, true], b: ['Dennis Miller', false], c: ['Will Ferrell', false], d:['Kristin Wiig', false]},
    {question: `Which Steve McQueen film did Leonardo DiCaprio's character lose to Steve McQueen in "Once Upon a Time in Hollywood?"`, a: [`Papillon`, false], b: ['The Great Escape', true], c: ['Le Mans', false], d:['Bullitt', false]},
    {question: `Which real-life person did Cliff Booth fight in "Once Upon a Time in Hollywood?"`, a: [`Muhammad Ali`, false], b: ['David Carradine', false], c: ['Bruce Lee', true], d:['Steve McQueen', false]},
    {question: `Which famous director was Sharon Tate's husband?`, a: [`Peter Bogdanovich`, false], b: ['Stanley Kubrick', false], c: ['Richard Donner', false], d:['Roman Polanski', true]},
    {question: `What is Tarantino's highest grossing film?`, a: [`Once Upon a Time in Hollywood`, true], b: ['Inglourious Basterds', false], c: ['Django Unchained', false], d:['Pulp Fiction', false]},
    {question: `How many languages are spoken in "Inglorious Basterds"?`, a: [`Three`, false], b: ['Four', true], c: ['Five', false], d:['Six', false]},
    {question: `What beverage does Hans Landa drink in the opening scene of "Inglorious Basteds"?`, a: [`Coffee`, false], b: ['Juice', false], c: ['Milk', true], d:['Beer', false]},
    {question: `What body part is featured prominently in all of Tarantino's films?`, a: [`Hands`, false], b: ['Feet', true], c: ['Eyes', false], d:['Elbows', false]},
    {question: `What priceless musical instrument was destroyed in the making of "The Hateful Eight?`, a: [`Guitar`, true], b: ['Mandolin', false], c: ['Piano', false], d:['Violin', false]},
    {question: `Which famous composer scored "The Hateful Eight"?`, a: [`John Williams`, false], b: ['Ennio Morricone', true], c: ['Hans Zimmer', false], d:['Danny Elfman', false]},
    {question: `Tarantino had a cameo in "Django Unchained". Which part did he play?:`, a: [`Plantation Owner`, false], b: ['Member of the KKK', false], c: ['Australian Slaver', true], d:['Saloon Owner', false]},
    {question: `Which film was the only one shot in 70mm?`, a: [`Django Unchained`, false], b: ['The Hateful Eight', true], c: ['Inglourious Basterds', false], d:['Once Upon a Time in Hollywood', false]},
    {question: `What Tarantino film was a part of Grindhouse, a double feature with Robert Rodriguez?`, a: [`Death Proof`, true], b: ['Planet Terror', false], c: ['From Dusk til Dawn', false], d:['The Man from Hollywood', false]},
    {question: `Tarantino directed one of the four different sequences in this collection of director shorts as a film`, a: [`The Twilight Zone`, false], b: ['Four Rooms', true], c: ['Four for Four', false], d:['Cuatro Historias', false]},
    {question: `The main characters in "Reservoir Dogs are all named after what?`, a: [`Days of the Week`, false], b: ['Months of the Year', false], c: ['Different Spices', true], d:['Different Colors', false]},
    {question: `What body part is famously cut off in "Reservoir Dogs?`, a: [`Foot`, false], b: ['Ear', true], c: ['Hand', false], d:['Nose', true]},
    {question: `Which restaurant do Mia and Vincent eat and dance at in "Pulp Fiction"?`, a: [`Jack Rabbit Slim's`, true], b: ['Runaround Sue', false], c: ['The Red Apple', false], d:['The Crocodile Rock', false]},
    {question: `Steve Buscemi cameos in "Pulp Fiction" as a celebrity impersonator. What celebrity is he impersonating?`, a: [`Elvis`, false], b: ['Buddy Holly', true], c: ['John Lennon', false], d:['James Dean', false]},
    {question: `What famous African-American actress plays Jackie in "Jackie Brown"?`, a: [`Eartha Kitt`, false], b: ['Grace Jones', false], c: ['Pam Grier', true], d:['Viola Davis', false]},
    {question: `Which actor played Mr. Pink (who doesn't tip) in "Reservoir Dogs"?`, a: [`Harvey Keitel`, false], b: ['Chris Penn', false], c: ['Tim Roth', false], d:['Steve Buscemi', true]},
    {question: `What does Uma Thurman's character use to Kill Bill in "Kill Bill"?`, a: [`her hands`, true], b: ['a sword', false], c: ['a gun', false], d:['a rope', false]},
    {question: `What language does Django's wife speak?`, a: [`French`, false], b: ['German', true], c: ['Italian', false], d:['Yiddish', false]},
    {question: `Which hand gesture outs Michael Fassbender's character in "Inglorious Basterds" as a British spy?`, a: [`Thumbs Up`, false], b: ['The Peace Sign', false], c: ['None of the Above', true], d:['Ok Sign', false]},
    {question: `What Miami Vice actor plays a plantation owner in "Django Unchained"?`, a: [`Joe Pantaliano`, false], b: ['Don Johnson', true], c: ['David Hasselhoff', false], d:['Tom Selleck',false]},

    

  
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
            didSomeoneWin();
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
            $('.results').css('background-color', 'red');
            $('.results').html(`${$results} is incorrect. It is now PLAYER ${randomPlayer}'s TURN. Please CLICK to Continue!`)
            clearInterval(myTimer);
            playerSwitch = true;
            console.log(playerSwitch);

    }
          
  }



function didSomeoneWin () {
    if (player.scoreOne == 10 || player.scoreTwo == 10) {
        $('.results').html(`YOU WON! PLAYER ${randomPlayer}!!!`)
        $('.button').hide();
        $('#start').show();
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
    } else {

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



$('.start').one('click', () => {
    $('#start').hide();
    $('.instructions').hide();
    $('#question').show(); 
    $('.button').show();
    $(`.player${randomPlayer}`).css('background-color', 'red');
    resetTimer();
    loadQuestions();
}); 

// $('.start').on('hover', () => {
 
// //     ('.start').css('background-color', '#F58220');
    
// // })