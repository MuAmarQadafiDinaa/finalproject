const txtElement = ['About me...'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function typing(){

    if (count == txtElement.length){
        count = 0;
    }
    currentTxt = txtElement[count];
    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.typing').textContent = words;
    if (words.length == currentTxt.length){
        txtIndex = 0;
    }
    setTimeout(typing, 250);
})();

function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};