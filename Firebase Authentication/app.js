var signup = () =>{
var Email = document.getElementById("Email")
var password = document.getElementById("password")
firebase.auth().createUserWithEmailAndPassword(Email.value, password.value)
.then(function() {
    alert("Thank you for contacting us. ...")
    Email.value = ""
    password.value = ""
})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("something went wrong ")
    // ...
  });
}

var login = ()=> {
var Emaillog = document.getElementById("Emaillog")
var passwordlog = document.getElementById("passwordlog")
firebase.auth().signInWithEmailAndPassword(Emaillog.value, passwordlog.value)
.then(()=>{
  alert("successful login")
  Emaillog.value =""
  passwordlog.value =""
})
.catch(function(error) {
  alert("Someting went wrong...!")
  Emaillog.value =""
  passwordlog.value =""
  
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...

});

}



