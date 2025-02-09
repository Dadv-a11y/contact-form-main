let inputs = document.getElementsByTagName('input');
let fieldset =document.getElementsByTagName('fieldset')[0];
let textarea = document.getElementsByTagName('textarea')[0];
let button = document.getElementsByTagName('button')[0];

console.log(fieldset);
function verifyinput(input){
    console.log(input);
    if(input.value === '' ) {
      input.classList.add('empty');
      input.nextElementSibling.style.display = 'block';
    }
    else if(input.value != '' && input.type != 'radio' && input.type!='checkbox') {
        input.classList.remove('empty');
        input.nextElementSibling.style.display = 'none';
    }  
    else if(input.type =='checkbox' && !input.checked){
        input.parentNode.nextElementSibling.style.display = 'block';
    }
    else if(input.type =='checkbox' && input.checked){
        input.parentNode.nextElementSibling.style.display= 'none';
    }
}

for (const input of inputs) {
if( input.type != 'radio' ){
    input.addEventListener('focus', function(){
        verifyinput(input);       
    })
    input.addEventListener('input', function(){
        verifyinput(input);       
    })
}
}

let options = fieldset.querySelectorAll('input'); 

function verifyRadio() {
    let NumberOptionNotCheck = 0; 

    for (const option of options) {
          if (!option.checked) {
            NumberOptionNotCheck++;
        } else {
            option.parentNode.classList.add('fill');
            option.parentNode.classList.remove('option')
            console.log(option)
        }
    }

    for (const option of options) {
        if (!option.checked) {
            option.parentNode.classList.remove('fill');
            option.parentNode.classList.add('option')
        }
    }
    if (NumberOptionNotCheck === options.length) {
        fieldset.nextElementSibling.style.display = 'block'; 
    } else {
        fieldset.nextElementSibling.style.display = 'none'; 
    }
}


for (const option of options) {
   option.addEventListener('click',function(){
    verifyRadio();
   })
   option.addEventListener('focus',function(){
    verifyRadio();
   })
}

function verifytextarea(){ 
    if(textarea.value == '' ) {
       textarea.classList.add('empty');
        textarea.nextElementSibling.style.display = 'block';
      }
      else {
          textarea.classList.remove('empty');
          textarea.nextElementSibling.style.display = 'none';
      }  
}
textarea.addEventListener('input', function(){
    verifytextarea();   
})
textarea.addEventListener('focus', function(){
    verifytextarea();   
})

button.addEventListener('click', function(e){
    e.preventDefault();
    verifyRadio();
    verifyRadio();
    verifytextarea();
   let success = document.querySelector('.success');
 success.style.display ='block'
})