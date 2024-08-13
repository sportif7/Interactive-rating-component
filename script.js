const rating_card = document.querySelector('.rating-card');
const thank_card = document.querySelector('.thank-card');
const ratings = document.querySelectorAll('.rating');
const rate = document.getElementById('rate');
const submit_button = document.querySelector('.submit-button');

let rate_selected = null;

ratings.forEach((rating)=> {
    rating.addEventListener('click', (e)=>{
//removing selected rate back to "default" one after repeated click. 
       if(rating.classList.contains('rate-clicked')){
          rating.classList.remove('rate-clicked');
          rate_selected = null;
        }
//selecting rate when clicked on.     
       else{
          ratings.forEach((rating)=>{
            if(rating.classList.contains('rate-clicked')){
               rating.classList.remove('rate-clicked');
            }
          })
          rating.classList.add('rate-clicked');
          rate_selected = e.target.innerText;
       }
  });
});
  

submit_button.addEventListener('click', ()=>{
    if(rate_selected){
       rate.innerText = rate_selected;
       rating_card.classList.add('hidden');
       thank_card.classList.remove('hidden');
    }
})