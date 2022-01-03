// const darkmode = document.querySelector('.dark-mode-wrapper')

// darkmode.addEventListener('click', function() {
// document.body.classList.toggle('dark-mode');
// });


// toyhat bn ishlash

// const elSelect = document.querySelector('.select');
// const elInput = document.querySelector('.input');

// elSelect.addEventListener('change', function (){

//   if(elSelect.value === 'boshqa'){

//     elInput.disabled = false;

//   }else{

//     elInput.value = '';

//     elInput.disabled = true;
//   }

// });

const elbutt = document.querySelector('.butt');


elbutt.addEventListener('click', function(){
  document.querySelectorAll('.inspan').forEach(function(insp){

    insp.classList.toggle('span-red');

  });



});




const elTriger = document.querySelector('.trigger');


elTriger.addEventListener('click', function(){
document.querySelectorAll('.demo').forEach(function(demo){
demo.classList.toggle('demo-green');
});
});
