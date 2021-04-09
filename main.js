// Our web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3eFp3aF5ZKB6tHHPJ3MGPq8FbDvlP1eo",
    authDomain: "contact-info-7f7c9.firebaseapp.com",
    databaseURL:"https://contact-info-7f7c9-default-rtdb.firebaseio.com/",
    projectId: "contact-info-7f7c9",
    storageBucket: "contact-info-7f7c9.appspot.com",
    messagingSenderId: "145210801933",
    appId: "1:145210801933:web:32e2696f985a58d41fba44"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    // Reference messages collection
    var messagesRef = firebase.database().ref('contactformmessages');
    
    $('#contactForm').submit(function(e) {
    e.preventDefault();
    
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name: $('.fullname').val(),
    email: $('.email').val(),
    subject: $('.subject').val(),
    message: $('.message').val()
    });
    
    $('.success-message').show();
    
    $('#contactForm')[0].reset();
    
    console.error(error);
    });