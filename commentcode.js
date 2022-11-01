/*
document.getElementById("comment_box1").addEventListener("submit", myFunction);

function myFunction(event) {
    document.getElementById("returnedname").innerHTML = ("name", document.getElementById("name").value);
    document.getElementById("returnedemail").innerHTML = ("email", document.getElementById("email").value);
    document.getElementById("returnedcomment").innerHTML = ("comment", document.getElementById("comment").value);
    event.preventDefault();
  }

*/




// https://stackoverflow.com/questions/71547824/creating-comments-and-adding-it-into-a-comment-box

const field = document.querySelector('textarea');
const backUp = field.getAttribute('placeholder')
const btn = document.querySelector('.btn');
const clear = document.getElementById('clear')
const submit = document.querySelector('#submit')
// const comments = document.querySelector('#comment-box')
const comments = document.getElementById('comment-box');


// array to store the comments
const comments_arr = [];

// to generate html list based on comments array
const display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += '<li>'+comment+'</li>'; //${ }
  })
  list += '</ul>';
  comments.innerHTML = list;
}

clear.onclick = function(event){
  event.preventDefault();
  // reset the array  
   comments_arr.length = 0;
  // re-genrate the comment html list
  display_comments();
}


submit.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){ // if there is content
      // add the comment to the array
      comments_arr.push(content);
      // re-genrate the comment html list
      display_comments();
      // reset the textArea content 
      field.value = '';
    }
}