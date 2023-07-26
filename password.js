
// 1. INPUT SHOULDNT BE EMPTY.
// 2. MIN 8 CHARS.
// 3. 20 CHARS.
// 4. OLD AND NEW PASSWORD SHOULD BE SAME LOKE A===B.
// 5. must have uppercase & digitd &  symbols


// function btn(event) {
//     event.preventDefault();
//     var newpass = document.getElementById("newpass").value;
//     let newmsg = document.getElementById("newmsg");
//     var confpass = document.getElementById("confpass").value
//     let confmsg = document.getElementById("confmsg");
//     let note= document.getElementById("note");

//     const uppercaseRegex = /[A-Z]/;
//     const numberRegex = /\d/;
//     const specialCharRegex = /[!@#$%^&*()?]/;



// if (newpass.trim()==="") {
//     newmsg.innerHTML= "insert a new password";
//     newmsg.style.display="block";


// }else if(newpass.length < 8 && newpass.length > 20) {
//     newmsg.innerHTML= "password must be atleast 8 and less than 20 chars ";
//     newmsg.style.display="block";
//     console.log("202 error");

// }
// else if (!uppercaseRegex.test(newpass) && !numberRegex.test(newpass) && !specialCharRegex.test(newpass)) {
//     note.innerHTML = `Password must contain at least one uppercase letter, one number, and one symbol (@, $, !, %, *, ?, or &)`;
//     note.style.display = "block";
//   } 

//   else {

//     note.innerHTML = "Password is strong!";
// } 


// if (confpass.trim()==="") {
//     confmsg.innerHTML= "insert a confirm password";
//     confmsg.style.display="block";

// }else if(confpass.length < 8 && confpass.length > 20) {
//     confmsg.innerHTML= "password must be atleast 8 and less than 20 chars ";
//     confmsg.style.display="block";
//     console.log("202 error");
// } 
// else if (!uppercaseRegex.test(confpass) && !numberRegex.test(confpass) && !specialCharRegex.test(confpass)) {
//     note.innerHTML = `Password must contain at least one uppercase letter, one number, and one symbol (@, $, !, %, *, ?, or &) `;
//     note.style.display = "block";
// }
//    else{

//     note.innerHTML = "Password is strong!";
// }



// // if (){

// //   note.style.display = "none";

// // }



// // if (newmsg.style.display === "none" && confmsg.style.display === "none" &&  note.innerHTML === "Password is strong!"  && newpass === confpass) {
// //     document.getElementById("myForm").submit();
// //   }else{
// //     newmsg.innerHTML= "your password should match"
// //     confmsg.innerHTML="your password should match"

// //     // confmsg.style.display="block";
// //     // newmsg.style.display="block";
// //   }
// if (!newpass.trim()==="" && !newpass.length < 8 && !newpass.length > 20 && uppercaseRegex.test(newpass) && numberRegex.test(newpass) && specialCharRegex.test(newpass) && !confpass.trim()==="" && !confpass.length < 8 && !confpass.length > 20 && uppercaseRegex.test(confpass) && numberRegex.test(confpass) && specialCharRegex.test(confpass) && newpass=== confpass) {
//   document.getElementById("myForm").submit();
// }else{
//   // newmsg.innerHTML= "your password should match"
//   // confmsg.innerHTML="your password should match"

//   // confmsg.style.display="block";
//   // newmsg.style.display="block";
// }


// }


function btn(event) {
  event.preventDefault();
  var newpass = document.getElementById("newpass").value;
  let newmsg = document.getElementById("newmsg");
  var confpass = document.getElementById("confpass").value
  let confmsg = document.getElementById("confmsg");
  let note = document.getElementById("note");

  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*()?]/;

  if (newpass.trim() == "") {
    newmsg.innerHTML = "insert a new password";
    newmsg.style.display = "block";
  }
  else if (newpass.length < 8 || newpass.length > 20) {
    newmsg.innerHTML = "password must be atleast 8 and less than 20 chars ";
    newmsg.style.display = "block";
    console.log("202 error");

  }
  else {
    newmsg.style.display = "none";
  }


  if (!uppercaseRegex.test(newpass)) {
    note.innerHTML = `Password must contain at least one uppercase letter, one number, and one symbol (@, $, !, %, *, ?, or &)`;
    note.style.display = "block";
  }
  else if (!numberRegex.test(newpass)) {
    note.innerHTML = `Password must contain at least one uppercase letter, one number, and one symbol (@, $, !, %, *, ?, or &)`;
    note.style.display = "block";
  }
  else if (!specialCharRegex.test(newpass)) {
    note.innerHTML = `Password must contain at least one uppercase letter, one number, and one symbol (@, $, !, %, *, ?, or &)`;
    note.style.display = "block";
  }else{
    note.style.display = "none";
  }








  if (confpass.trim() == "") {
    confmsg.innerHTML = "insert a confirm password";
    confmsg.style.display = "block";
  }

  else if (confpass.length < 8 || confpass.length > 20) {
    confmsg.innerHTML = "password must be atleast 8 and less than 20 chars ";
    confmsg.style.display = "block";
    console.log("202 error");
  }

  else {
    confmsg.style.display = "none";
  }


  if (!uppercaseRegex.test(confpass)) {
    note.innerHTML = `Password must contain at least one uppercase letter, one number, and one symbol (@, $, !, %, *, ?, or &) `;
    note.style.display = "block";
  }

  else if (!numberRegex.test(confpass)) {
    note.innerHTML = `Password must contain at least one uppercase letter, one number, and one symbol (@, $, !, %, *, ?, or &) `;
    note.style.display = "block";
  }
  else if (!specialCharRegex.test(confpass)) {
    note.innerHTML = `Password must contain at least one uppercase letter, one number, and one symbol (@, $, !, %, *, ?, or &) `;
    note.style.display = "block";
  } else {
    note.style.display = "none";
  }


  if (newpass != confpass) {
    newmsg.innerHTML = "your password should match";
    confmsg.innerHTML = "your password should match";
    newmsg.style.display = "block";
    confmsg.style.display = "block";

  }
  else {
    newmsg.style.display == "none";
    confmsg.style.display == "none";
  }



  if (newmsg.style.display == "none" && confmsg.style.display == "none" && note.style.display == "none") {
    document.getElementById("myForm").submit();
  }

}








function myFunction1() {

  if (newpass.type === "password") {
    newpass.type = "text";
  } else {
    newpass.type = "password";
  }
}

function myFunction2() {

  if (confpass.type === "password") {
    confpass.type = "text";
  } else {
    confpass.type = "password";
  }
}