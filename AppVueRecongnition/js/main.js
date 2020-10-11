let rec;
let speechRecognitionList;
let template = '';
let nameAction = '';
const actions = ['función', 'constante', 'variable'];
if(!("webkitSpeechRecognition" in window)) {
    alert('No podes usar la API');
}else{
    rec = new webkitSpeechRecognition();
    rec.leng = "es-AR, en-EU";
    rec.continuous = true;
    rec.interimResults = true;
    recognition.maxAlternatives = 1;
    rec.addEventListener("result", recognition);
}
function recognition (event) {
    for(let i = event.resultIndex; i < event.results.length; i++){
        document.getElementById('appRecognition').innerHTML = template;
        template = `${event.results[i][0].transcript}`;
        nameAction = template;

    }
    if(nameAction.split(' ')[0] === actions[0]){
        resultRecongnitionFunction();
    }
    if (nameAction.split(' ')[0] === actions[1]){
    resultRecongnitionConstant();
    }
    if (nameAction.split(' ')[0] === actions[2]){
        resultRecongnitionVariable();
    }
}

function resultRecongnitionFunction(){
    if(template.split.length === 2 && nameAction.split(' ')[1] != undefined){
        console.log(`function ${nameAction.split(' ')[1]} {

        }`);   
    }
}

function resultRecongnitionConstant(){
    if(template.split.length === 2 && nameAction.split(' ')[2] != undefined){
        console.log(`const ${nameAction.split(' ')[1]} = ${nameAction.split(' ')[2]}`);
        
    }
}

function resultRecongnitionVariable(){
    if(template.split.length === 2 && nameAction.split(' ')[2] != undefined){

        console.log(`let ${nameAction.split(' ')[1]} = ${nameAction.split(' ')[2]}`);
       
    }
}




rec.start();
    

