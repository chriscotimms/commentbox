 document.getElementById("comment_box1").addEventListener("submit", myFunction);

function myFunction(event) {
    document.getElementById("returnedname").innerHTML = ("name", document.getElementById("name").value);
    document.getElementById("returnedemail").innerHTML = ("email", document.getElementById("email").value);
    document.getElementById("returnedcomment").innerHTML = ("comment", document.getElementById("comment").value);
    event.preventDefault();
  }



