const formData = document.querySelectorAll('#myForm input');
let commentInfo = document.getElementById('comment');



window.addEventListener('load', myFunction1);
function myFunction1() {
    document.getElementById('charInfo').innerHTML = commentInfo.value.length + '/140';
};


commentInfo.addEventListener('input', myFunction2);
function myFunction2() {
  comment.classList.remove("error");
    document.getElementById('charInfo').innerHTML = commentInfo.value.length + '/140';
    
};

//document.getElementById('comment').addEventListener('input', myFunction2);
//function myFunction2() {
 //   document.getElementById('charInfo').innerHTML = document.getElementById('comment').value.length + '/140';
//};


document.getElementById('btn')
.addEventListener('click', myFunction);

function myFunction(event) {
  event.preventDefault;

 
  if (commentInfo.value.length > 140) {
    comment.classList.add("error");
    //alert("too many characters");
  } else {


  //document.getElementById("divvy").innerHTML = formData.item(0).value + '<br>' + formData.item(1).value + '<br>' + formData.item(2).value;
  const commentinput = formData.item(2).value;
 
  const divv = document.createElement("div"); 
  divv.className = 'white';

  const divv2 = document.createElement("div"); 
  divv2.className = 'blue';
  
  const text = document.createTextNode(formData.item(0).value);
  const texta = document.createElement("br"); 
  const textb = document.createTextNode(formData.item(1).value);
  const text2 = document.createTextNode(commentinput);  //formData.item(2).value

  divv.appendChild(text);
  divv.appendChild(texta);
  divv.appendChild(textb);
  divv2.appendChild(text2);

  document.getElementById("divvy").appendChild(divv).appendChild(divv2);

}
}






/*
  const text = document.createTextNode(formData.item(0).value + formData.item(1).value);
  const text2 = document.createTextNode(commentinput);  //formData.item(2).value

  divv.appendChild(text);
  divv2.appendChild(text2);

  document.getElementById("divvy").appendChild(divv).appendChild(divv2);
*/






























/*
var post = document.getElementById("post");

post.addEventListener("click", function(event)  {
    event.preventDefault;

    const commentBoxValue = document.getElementById("comment-box").value;
    const emailValue = document.getElementById("email").value;

   
    const divv = document.createElement("div")
    divv.className = 'white';
    const text = document.createTextNode(emailValue); 

    const divv1 = document.createElement("div")
    divv1.className = 'white1';
    const text1 = document.createTextNode(commentBoxValue); 

    divv.appendChild(text);
    document.getElementById("divvy").appendChild(divv);
    divv1.appendChild(text1);
    document.getElementById("divvy").appendChild(divv1);
 
});
*/





/*Working backup
var post = document.getElementById("post");

post.addEventListener("click", function(event)  {
    event.preventDefault;

    const commentBoxValue = document.getElementById("comment-box").value;
    const emailValue = document.getElementById("email").value;

   
    const divv = document.createElement("div")
    divv.className = 'white';

  
    const text = document.createTextNode(emailValue + commentBoxValue);

    divv.appendChild(text);
    document.getElementById("divvy").appendChild(divv);
 
});
*/































/*
document.getElementById("comment_box1").addEventListener("submit", myFunction);

function myFunction(event) {
    document.getElementById("returnedname").innerHTML = ("name", document.getElementById("name").value);
    document.getElementById("returnedemail").innerHTML = ("email", document.getElementById("email").value);
    document.getElementById("returnedcomment").innerHTML = ("comment", document.getElementById("comment").value);
    event.preventDefault();
  }

*/





/* A kind of solution, but resets email and name each time
// https://stackoverflow.com/questions/71547824/creating-comments-and-adding-it-into-a-comment-box

const field = document.querySelector('textarea');
const backUp = field.getAttribute('placeholder')
const btn = document.querySelector('.btn');
const clear = document.getElementById('clear')
const submit = document.querySelector('#submit')
// const comments = document.querySelector('#comment-box')
const comments = document.getElementById('comment-box');
let returnedname = document.getElementById('name');
let returnedemail = document.getElementById('email');


// array to store the comments
const comments_arr = [];



// to generate html list based on comments array
const display_comments = () => {
  let list = '<div class="comstylALL"><ul>';
   comments_arr.forEach(comment => {
    list += '<li>'+ returnedname.value + returnedemail.value + '<div class="comstyl">' + comment + '</div></li>'; //${ }
  })
  list += '</ul></div>';
  comments.innerHTML = list;
}


clear.onclick = function(event){
  event.preventDefault();
  // reset the array  
   //comments_arr.length = 0;
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

*/