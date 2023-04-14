// Section two track input
const inputContent = document.querySelector('.input-two')

// Section three track input
const inputFields = {
  input1: document.querySelector('.input1'),
  input2: document.querySelector('.input2'),
  input3: document.querySelector('.input3'),
  input1N: document.querySelector('.input1N'),
  input2N: document.querySelector('.input2N'),
  input3N: document.querySelector('.input3N'),
}

const doneBtn = document.querySelector('.doneBtn a button')
const cBoxes = {
  c1: document.querySelector('.c1'),
  c2: document.querySelector('.c2'),
  c3: document.querySelector('.c3'),
}

const bloc1Total = document.querySelector('.bloc1-total p')

const inputResults = {
  inputR1: document.querySelector('.input1B p'),
  inputR2: document.querySelector('.input2B p'),
  inputR3: document.querySelector('.input3B p'),
}

const bloc2Values = {
  bloc2V1: document.querySelector('.bloc2-v1 p'),
  bloc2V2: document.querySelector('.bloc2-v2 p'),
  bloc2V3: document.querySelector('.bloc2-v3 p'),
}
 
// adding new info

 const secondRow = document.querySelector(".secondRow");
 let count=0;
 let formData = []
  
  function addForm() {
    // Remove the "hidden" class and the "plus" div
    count++;
    const hiddenDiv = document.querySelector(".hidden");
    document.querySelector(".hidden").classList.remove("hidden");
    document.querySelector('.plus').remove();
    const formDiv = document.createElement("div");
    formDiv.innerHTML = `
      <button class="hide">x</button>
      <input class="input-name input${count}T" type="text" id="name" placeholder="iktib" name="name">
      <input class="inputText-corner input${count}A" type="text" id="" name="">
      <input class="inputNumber-corner input${count}AN" type="number" value="0" name="" id="">
    `;
    const nextDiv = document.createElement("div");
    nextDiv.innerHTML = `
      <div class="plus">+</div>
    `;
  
    // Add event listener to the new "plus" div
    nextDiv.addEventListener("click", addForm);
    
    // Append the new elements
    hiddenDiv.appendChild(formDiv).setAttribute("class", "corner-text1");
    secondRow.appendChild(nextDiv).setAttribute("class", "corner-container1 hidden");

    // Add event listeners to each input element to store its value into the formData object
  let obj = {
    inputTitle : document.querySelector(`.input${count}T`),
    inputAdded : document.querySelector(`.input${count}A`),
    inputANumber : document.querySelector(`.input${count}AN`),
  }

  formData.push(obj)
    if (count >= 3) {
      nextDiv.removeEventListener("click", addForm);
      document.querySelector('.plus').remove();
      document.querySelector(".hidden").remove();
    }
  }
  
  // Add initial event listener to the "plus" div
  document.querySelector(".plus").addEventListener("click", addForm);

  // Calculation
    
doneBtn.addEventListener('click', function() {
  const v1 = (inputFields.input1.value / 1000 * 30) * inputFields.input1N.value 
  const v2 = (inputFields.input2.value / 1000 * 30) * inputFields.input2N.value
  const v3 = (inputFields.input3.value / 1000 * 30) * inputFields.input3N.value
  let v = []
  for (let i=0;i<formData.length-1;i++){
    vN =(formData[i].inputAdded.value / 1000 * 30)* formData[i].inputANumber.value
    v.push(vN)
  }
  console.log(v)
  inputResults.inputR1.textContent += `${v1}DT`
  inputResults.inputR2.textContent += `${v2}DT`
  inputResults.inputR3.textContent += `${v3}DT`
  
  const total = v1 + v2 + v3
  bloc1Total.textContent += `${total}DT`
  bloc2Values.bloc2V1.textContent += `${inputContent.value - total}DT`
  bloc2Values.bloc2V2.textContent += `${(inputContent.value - total) / 4}DT`
  bloc2Values.bloc2V3.textContent += `${(inputContent.value - total) / 30}DT`
})

function resetInputs() {
  inputResults.inputR1.textContent = '.rkoub :'
  inputResults.inputR2.textContent = '.ftour :'
  inputResults.inputR3.textContent = '.do5an :'
  bloc2Values.bloc2V1.textContent = '.fil chhar :'
  bloc2Values.bloc2V2.textContent = '.fil jom3a :'
  bloc2Values.bloc2V3.textContent = '.fil nhar :'
  bloc1Total.textContent = 'total : '
}

for (const cBox of Object.values(cBoxes)) {
  cBox.addEventListener('click', resetInputs)
}




// Guide#1
const tips = [
    '" Houni il masarif il lezma Rkoub, Ftour, Do5an "',
    '" il case loula t7ot feha soum il haja heki wil case thenya 9adeh min mara te5oha fil nhar "',
    '" exemple: rkoub, 7a9 loage 900 te5oha 2 fil nhar "',
    '" ken fama haja tista3mlhech min hethom 7ot sfer fil les cases "'
  ];
  
  const btnP = document.querySelector('.btnP');
  const btnN = document.querySelector('.btnN');
  const tipText = document.querySelector('.corner-p');
  let currentTipIndex = 0;
  
  function showTip() {
    tipText.textContent = tips[currentTipIndex];
  }
  
  btnP.addEventListener('click', function () {
    currentTipIndex = (currentTipIndex - 1 + tips.length) % tips.length;
    showTip();
  });
  
  btnN.addEventListener('click', function () {
    currentTipIndex = (currentTipIndex + 1) % tips.length;

    showTip();
  });
  
  showTip();
  

 
  

  
  
