const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.email');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);


function onFormInput(evt) {
      evt.preventDefault();
 
  const formData = {
    email: evt.target.value,
    message: evt.target.value,
  };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   
};

function onFormSubmit(evt) {
  evt.preventDefault();

  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}

function populateData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    
  if (savedData) {
   const formData = JSON.parse(savedData);
    email.value = formData.email;
    textarea.value = formData.message;
  }
}
