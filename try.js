// Your web app's Firebase configuration
  var Config = {
    apiKey: "AIzaSyCWgNUg6MGWrnQ0cpDe1oEC-jiIcuHsXiI",
    authDomain: "job-distribution-system-1be63.firebaseapp.com",
    databaseURL: "https://job-distribution-system-1be63.firebaseio.com",
    projectId: "job-distribution-system-1be63",
    storageBucket: "job-distribution-system-1be63.appspot.com",
    messagingSenderId: "650324397430",
    appId: "1:650324397430:web:2293c79dedb39021a6fe57",
    measurementId: "G-PXCD86M6Q4"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  // พักก่อนfirebase.analytics();



  const auth = firebase.auth();
  
  function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	 function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	}); 
