console.log("Ha Ho He");

// =================================================================
// _________________ lvl_2_js-if+else ______________________________

const slider = document.getElementById('slider');
const index = document.getElementById('index');

const output1 = document.querySelector('#output1');
const output2 = document.querySelector('#output2');

function checkAirQuality() {
    if (slider.value <= 50) {
        output1.innerHTML = "Level of health concern: Good";
        output2.innerHTML = "Level of health effect: Little or no risk";
        document.body.style.backgroundColor = "green";
        index.innerHTML = slider.value;
    } else if (slider.value <=100) {
        output1.innerHTML = "Level of health concern: Moderate";
        output2.innerHTML = "Level of health effect: Acceptable quality";
        document.body.style.backgroundColor = "yellow";
        index.innerHTML = slider.value;
    } else if (slider.value <=140) {
        output1.innerHTML = "Level of health concern: Unhealthy for sensitive groups";
        output2.innerHTML = "Level of health effect: Generable publics not likely affected";
        document.body.style.backgroundColor = "orange";
        index.innerHTML = slider.value;
    } else if (slider.value = 150) {
        output1.innerHTML = "Level of health concern: Unhealthy for sensitive groups";
        output2.innerHTML = "Level of health effect: Generable publics not likely affected";
        document.body.style.backgroundColor = "red";
        index.innerHTML = slider.value;
    }
}



