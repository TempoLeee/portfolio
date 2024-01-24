const scriptURL = 'https://script.google.com/macros/s/AKfycbwk-mtvkf6QR3_5BCcr5U0iySGVVQFAJ4niOjoHGj9aSqO3prYtpvechr3uU1wP1rWfWg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert("Your message has been sent successfully!")
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})