  username = localStorage.getItem("user_name");
  
document.getElementById("aob").innerHTML = "Welcome ," + username;
  function addRoom(){
   room_name = document.getElementById("room_name_input").value;
   localStorage.setItem("name_of_room" , room_name);
   window.location = "lets_chat.html";
  };

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
room_name_display = "<div id='room_name_display_div'><h4 id='room_name_display_h4'</h4></div><br>";

//End code
});});};
function redirectToRoomName(){
  localStorage.setItem("name_of_room" , room_name);
   window.location("lets_chat.html");
};
