console.log('Eureka');

// ====================================================
// ______________ lvl_1-1_js-if+else __________________

const age = document.getElementById('age');
const result = document.querySelector('h3');

function adult (){
    if (age.value >= 18) { 
        result.innerHTML = ("Volljährig! Viel Spaß!");
    } else {
        result.innerHTML = ("Minderjährig, geh nah Hause!");
    }
}

// _________ lvl_1-2_conditional-statements ___________

const weatherQuali = document.querySelector('form:nth-of-type(2) input[type="text"]');
const output = document.querySelector('h4');

function weather() {
    if (weatherQuali.value > 8 && weatherQuali.value <=10) {
        output.innerHTML = "Das Wetter ist super! Ab nach draußen!";
    } else if (weatherQuali.value > 6 && weatherQuali.value < 8 ) {
        output.innerHTML = "Das Wetter ist gut. Überlegs Dir.";
    } else if (weatherQuali.value > 3 && weatherQuali.value < 5 ) {
        output.innerHTML = "Das Wetter ist okay." 
    } else if (weatherQuali.value < 3); {
        output.innerHTML = "Das Wetter ist schlecht. Schatz, wirf Netflix an! ;)"
    }
}