firebaseConfig = {
    apiKey: "AIzaSyCBnCWCj-2oxt0m4PzVe1aVAPH_mEo5RWg",
    authDomain: "project-96-4ce64.firebaseapp.com",
    databaseURL: "https://project-96-4ce64-default-rtdb.firebaseio.com",
    projectId: "project-96-4ce64",
    storageBucket: "project-96-4ce64.appspot.com",
    messagingSenderId: "1009809418058",
    appId: "1:1009809418058:web:ac6f0870ca631dce1103b3"
  };


user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name+"!";

    function add_room() {
      user_name - document.getElementById("room_name").value;
   
      localStorage.setItem("room_name",room_name);
     
      window.location="kwitter_page.html";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
