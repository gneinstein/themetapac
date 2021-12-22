// JavaScript Document

document.getElementById("submitted").hidden=true;

console.log("hello world");

const scriptURL = 'https://script.google.com/macros/s/AKfycbzGmgRv3o8j6YXYH5YwVJf5vU0z9zaU1KFHK0D-9D7Hemcpc1osLAWinWJIeR_rlM9Brg/exec'
const form = document.forms['submit']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));
	document.getElementById("submitted").hidden=false;
	document.getElementById("unfilledform").hidden=true;
  })
