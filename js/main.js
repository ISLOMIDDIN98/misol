// const darkmode = document.querySelector('.dark-mode-wrapper')

// darkmode.addEventListener('click', function() {
// document.body.classList.toggle('dark-mode');
// });

const elSelect = document.querySelector('.select');
const elInput = document.querySelector('.input');

elSelect.addEventListener('change', function (){

  if(elSelect.value === 'boshqa'){

    elInput.disabled = false;

  }else{

    elInput.value = '';

    elInput.disabled === true;
  }
});