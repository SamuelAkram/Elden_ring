let question1 = {
    title: 'what class is the easiest to play for new players?',
    alternatives:['wrench', 'warrior', 'thief', 'samurai'],
    correctAnswer: 3
}

function showQuestion1(q) {
    let titleDiv = document.getElementById('title');

    titleDiv.textContent = q.title;

    let alts = document.querySelectorAll('.alternative');
    
    alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];

            element.addEventListener('click', function(){
               if(q.correctAnswer == index) {
                document.getElementById('title').innerHTML = "right answer!";
                document.getElementById('title').style.backgroundColor = "green";
               }
               else {
                document.getElementById('title').innerHTML = "wrong answer!";
                document.getElementById('title').style.backgroundColor = "red";
               }
            });
    });
}




showQuestion1(question1);

let question2 = {
    title2: 'how to get arrows?',
    alternatives2:['fishing', 'crafting en buying en drops', 'crafting', 'drops'],
    correctAnswer: 1
}

function showQuestion2(q2) {
    let titleDiv = document.getElementById('title2');

    titleDiv.textContent = q2.title2;

    let alts = document.querySelectorAll('.alternative2');
    
    alts.forEach(function(element, index){
        element.textContent = q2.alternatives2[index];

            element.addEventListener('click', function(){
               if(q2.correctAnswer == index) {
                document.getElementById('title2').innerHTML = "right answer!";
                document.getElementById('title2').style.backgroundColor = "green";
               }
               else {
                document.getElementById('title2').innerHTML = "wrong answer!";
                document.getElementById('title2').style.backgroundColor = "red";
               }
            });
    });
}

showQuestion2(question2);

let question3 = {
    title3: 'how many stages does the final boss fight?',
    alternatives3:['1 stage', '3 stages', '4 stages', '2 stages'],
    correctAnswer: 3
}

function showQuestion3(q3) {
    let titleDiv = document.getElementById('title3');

    titleDiv.textContent = q3.title3;

    let alts = document.querySelectorAll('.alternative3');
    
    alts.forEach(function(element, index){
        element.textContent = q3.alternatives3[index];

            element.addEventListener('click', function(){
               if(q3.correctAnswer == index) {
                document.getElementById('title3').innerHTML = "right answer!";
                document.getElementById('title3').style.backgroundColor = "green";
               }
               else {
                document.getElementById('title3').innerHTML = "wrong answer!";
                document.getElementById('title3').style.backgroundColor = "red";
               }
            });
    });
}

showQuestion3(question3);

let question4 = {
    title4: 'with what weapons does the wrench class start?',
    alternatives4:['A club', 'A dagger', 'A axe', 'A sword'],
    correctAnswer: 0
}

function showQuestion4(q4) {
    let titleDiv = document.getElementById('title4');

    titleDiv.textContent = q4.title4;

    let alts = document.querySelectorAll('.alternative4');
    
    alts.forEach(function(element, index){
        element.textContent = q4.alternatives4[index];

            element.addEventListener('click', function(){
               if(q4.correctAnswer == index) {
                document.getElementById('title4').innerHTML = "right answer!";
                document.getElementById('title4').style.backgroundColor = "green";
               }
               else {
                document.getElementById('title4').innerHTML = "wrong answer!";
                document.getElementById('title4').style.backgroundColor = "red";
               }
            });
    });
}

showQuestion4(question4);

let question5 = {
    title5: 'what is the drop chance for godrick soldier greaves?',
    alternatives5:['10%', '3%', '8%', '1%'],
    correctAnswer: 1
}

function showQuestion5(q5) {
    let titleDiv = document.getElementById('title5');

    titleDiv.textContent = q5.title5;

    let alts = document.querySelectorAll('.alternative5');
    
    alts.forEach(function(element, index){
        element.textContent = q5.alternatives5[index];

            element.addEventListener('click', function(){
               if(q5.correctAnswer == index) {
                document.getElementById('title5').innerHTML = "right answer!";
                document.getElementById('title5').style.backgroundColor = "green";
               }
               else {
                document.getElementById('title5').innerHTML = "wrong answer!"
                document.getElementById('title5').style.backgroundColor = "red";
               }
            });
    });
}

showQuestion5(question5);

let question6 = {
    title6: 'where do you find the whetstone blade?',
    alternatives6:['under the first ruins', 'from a boss', 'crafting', 'from a boss'],
    correctAnswer: 0
}

function showQuestion6(q6) {
    let titleDiv = document.getElementById('title6');

    titleDiv.textContent = q6.title6;

    let alts = document.querySelectorAll('.alternative6');
    
    alts.forEach(function(element, index){
        element.textContent = q6.alternatives6[index];

            element.addEventListener('click', function(){
               if(q6.correctAnswer == index) {
                document.getElementById('title6').innerHTML = "right answer!";
                document.getElementById('title6').style.backgroundColor = "green";
               }
               else {
                document.getElementById('title6').innerHTML = "wrong answer!";
                document.getElementById('title6').style.backgroundColor = "red";
               }
            });
    });
}

showQuestion6(question6);

let question7 = {
    title7: 'what is the first shard-bearer boss fight?',
    alternatives7:['margit', 'rennala', 'godrick', 'star scourge radahn'],
    correctAnswer: 2
}

function showQuestion7(q7) {
    let titleDiv = document.getElementById('title7');

    titleDiv.textContent = q7.title7;

    let alts = document.querySelectorAll('.alternative7');
    
    alts.forEach(function(element, index){
        element.textContent = q7.alternatives7[index];

            element.addEventListener('click', function(){
               if(q7.correctAnswer == index) {
                document.getElementById('title7').innerHTML = "right answer!";
                document.getElementById('title7').style.backgroundColor = "green";
               }
               else {
                document.getElementById('title7').innerHTML = "wrong answer!";
                document.getElementById('title7').style.backgroundColor = "red";
               }
            });
    });
}

showQuestion7(question7);

let question8 = {
    title8: 'which bleed weapon procs the most bleed per light attack?',
    alternatives8:['Rivers of Blood', 'dagger', 'moonveil katana', 'Eleonora Poleblade'],
    correctAnswer: 0
}

function showQuestion8(q8) {
    let titleDiv = document.getElementById('title8');

    titleDiv.textContent = q8.title8;

    let alts = document.querySelectorAll('.alternative8');
    
    alts.forEach(function(element, index){
        element.textContent = q8.alternatives8[index];

            element.addEventListener('click', function(){
               if(q8.correctAnswer == index) {
                document.getElementById('title8').innerHTML = "right answer!";
                document.getElementById('title8').style.backgroundColor = "green";
               }
               else {
                document.getElementById('title8').innerHTML = "wrong answer!"
                document.getElementById('title8').style.backgroundColor = "red";
               }
            });
    });
}

showQuestion8(question8);

let question9 = {
    title9: 'which fate weapon has the highest fate scaling?',
    alternatives9:['erdtree Bow', 'Marika Hammer', 'Blade of Calling', 'sword of night and flame'],
    correctAnswer: 3
}

function showQuestion9(q9) {
    let titleDiv = document.getElementById('title9');

    titleDiv.textContent = q9.title9;

    let alts = document.querySelectorAll('.alternative9');
    
    alts.forEach(function(element, index){
        element.textContent = q9.alternatives9[index];

            element.addEventListener('click', function(){
               if(q9.correctAnswer == index) {
                document.getElementById('title9').innerHTML = "right answer!";
                document.getElementById('title9').style.backgroundColor = "green";
               }
               else {
                document.getElementById('title9').innerHTML = "wrong answer!";
                document.getElementById('title9').style.backgroundColor = "red";
               }
            });
    });
}

showQuestion9(question9);

let question10 = {
    title10: 'which one of these weapons has the highest magic scaling.',
    alternatives10:['Dark Moon Greatsword', 'Moonveil', 'Wing of Astel', 'Glintstone Kris'],
    correctAnswer: 1
}

function showQuestion10(q10) {
    let titleDiv = document.getElementById('title10');

    titleDiv.textContent = q10.title10;

    let alts = document.querySelectorAll('.alternative10');
    
    alts.forEach(function(element, index){
        element.textContent = q10.alternatives10[index];

            element.addEventListener('click', function(){
               if(q10.correctAnswer == index) {
                document.getElementById('title10').innerHTML = "right answer!";
                document.getElementById('title10').style.backgroundColor = "green";
               }
               else {
                document.getElementById('title10').innerHTML = "wrong answer!";
                document.getElementById('title10').style.backgroundColor = "red";
               }
            });
    });
}

showQuestion10(question10);







