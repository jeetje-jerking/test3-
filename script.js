document.getElementById('email-form').addEventListener('submit', function (e) {
  e.preventDefault(); 


  document.getElementById('email-form').classList.add('hidden');

document.getElementById('thank-you-message').classList.remove('hidden');


  fetch(this.action, {
    method: this.method,
    body: new FormData(this),
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        console.log('Formulier succesvol verzonden!');
      } else {
        console.error('Er is iets misgegaan.');
      }
    })
    .catch(error => {
      console.error('Er is iets misgegaan:', error);
    });
});
