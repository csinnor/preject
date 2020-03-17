// Initialize Firebase(2)
var config = {
    apiKey: "AIzaSyCWgNUg6MGWrnQ0cpDe1oEC-jiIcuHsXiI",
    authDomain: "job-distribution-system-1be63.firebaseapp.com",
    databaseURL: "https://job-distribution-system-1be63.firebaseio.com",
    projectId: "job-distribution-system-1be63",
    storageBucket: "job-distribution-system-1be63.appspot.com",
    messagingSenderId: "650324397430",
    appId: "1:650324397430:web:2293c79dedb39021a6fe57",
    measurementId: "G-PXCD86M6Q4"
  };
  firebase.initializeApp(config);
  
  //Reference for form collection(3)
  let formMessage = firebase.database().ref('Customer');
  
  //listen for submit event//(1)
  document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let contact = document.querySelector('#contact').value;
    let address = document.querySelector('#address').value;
//    let job = document.querySelector('#job').value;
    let interest = document.querySelector('#gender').value;
  
    //send message values
    sendMessage(name, email, password, contact, address, gender);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, email, password, contact, address, gender) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      password: password,
      contact:contact,
      address: address,
//      job: job,
      Gender: gender
    });
  }