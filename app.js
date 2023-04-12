// section two track input
let inputContent = document.querySelector('.input-two')

// seection three track input
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let input3 = document.querySelector('.input3')
let input1N = document.querySelector('.input1N')
let input2N = document.querySelector('.input2N')
let input3N= document.querySelector('.input3N')

const bttnInput = document.querySelector('.doneBtn a button')
const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const c3 = document.querySelector('.c3')

let total = document.querySelector('.bloc1-total p')

let inputR1 = document.querySelector('.input1B p')
let inputR2 = document.querySelector('.input2B p')
let inputR3 = document.querySelector('.input3B p')

let bloc2V1 = document.querySelector('.bloc2-v1 p')
let bloc2V2 = document.querySelector('.bloc2-v2 p')
let bloc2V3 = document.querySelector('.bloc2-v3 p')

bttnInput.addEventListener('click', function() {
    let v1 =(input1.value/1000 *30) * input1N.value 
    let v2 = (input2.value/1000  *30) * input2N.value
    let v3 = (input3.value/1000  *30) * input3N.value
    inputR1.textContent += v1 + "DT"
    inputR2.textContent += v2 + "DT"
    inputR3.textContent += v3 + "DT"
    total.textContent += v1+v2+v3 + "DT"
    bloc2V1.textContent += inputContent.value - (v1+v2+v3) + 'DT'
    bloc2V2.textContent += (inputContent.value - (v1+v2+v3))/4 + 'DT'
    bloc2V3.textContent += (inputContent.value - (v1+v2+v3))/30 + 'DT'
})
c1.addEventListener('click', function() {
    inputR1.textContent = ".rkoub :"
    inputR2.textContent = ".ftour :"
    inputR3.textContent = ".do5an :"
    bloc2V1.textContent = ".fil chhar :"
    bloc2V2.textContent=".fil jom3a :"
    bloc2V3.textContent = ".fil nhar :"
    total.textContent = "total : "
})
c2.addEventListener('click', function() {
    inputR1.textContent = ".rkoub :"
    inputR2.textContent = ".ftour :"
    inputR3.textContent = ".do5an :"
    bloc2V1.textContent = ".fil chhar :"
    bloc2V2.textContent=".fil jom3a :"
    bloc2V3.textContent = ".fil nhar :"
    total.textContent = "total : "
})
c3.addEventListener('click', function() {
    inputR1.textContent = ".rkoub :"
    inputR2.textContent = ".ftour :"
    inputR3.textContent = ".do5an :"
    bloc2V1.textContent = ".fil chhar :"
    bloc2V2.textContent=".fil jom3a :"
    bloc2V3.textContent = ".fil nhar :"
    total.textContent = "total : "
})






// Guide#1
const tips1 = [
'" Houni il masarif il lezma Rkoub, Ftour, Do5an "',
'" il case loula t7ot feha soum il haja heki wil case thenya 9adeh min mara te5oha fil nhar "',
'" exemple: rkoub, 7a9 loage 900 te5oha 2 fil nhar "',
'" ken fama haja tista3mlhech min hethom 7ot sfer fil les cases "'
];

const btnP = document.querySelector('.btnP');
const btnN = document.querySelector('.btnN');
const length = tips1.length;
const tipText = document.querySelector('.corner-p')
console.log(tipText.textContent)

btnP.addEventListener('click', function () {
    let i=0;
    while (i<tips1.length && tipText.textContent != tips1[i]){
        i++;
    }
    if (i>0){
        tipText.textContent = tips1[i-1]
    } else {
        tipText.textContent = tips1[tips1.length-1]
    }
})

btnN.addEventListener('click', function () {
    let i=0;
    while (i<tips1.length && tipText.textContent != tips1[i]){
        i++;
    }
    if (i<tips1.length-1){
        tipText.textContent = tips1[i+1]
    } else {
        tipText.textContent = tips1[0]
    }
})