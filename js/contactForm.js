const firstName = document.querySelector('.contact__input--firstname');
const lastName = document.querySelector('.contact__input--lastname');
const email = document.querySelector('.contact__input--email');
const subject = document.querySelector('.contact__input--subject');
const text = document.querySelector('.contact__input--text');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.contact__input--submit');

function validateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

const sendData = (url, data, callback) => {
  var request = new XMLHttpRequest();
  request.open('POST', `${url}`, true);
  request.setRequestHeader(
    'Content-Type',
    'application/x-www-form-urlencoded; charset=UTF-8'
  );
  request.send(data);
  callback();
};

const sent = () => {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  subject.value = '';
  text.value = '';

  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = '#ffffb3';
  submitBtn.style.color = '#999999';
  submitBtn.value = 'Message Sent!';
};

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (firstName.value === '') return console.log('Please type in firstname');
  if (lastName.value === '') return console.log('Please type in lastname');
  if (email.value === '') return console.log('Please type in email');
  if (subject.value === '') return console.log('Please type in a subject');
  if (text.value === '') return console.log('Please type in a message');

  if (!validateEmail(email))
    return console.log('You have entered an invalid email address!!!');

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    subject: subject.value,
    text: text.value
  };

  sendData('/email', data, () => {
    console.log('Data Sent!');
    sent();
  });
});
