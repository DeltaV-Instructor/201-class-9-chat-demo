'use strict';
console.log('app.js connected!');

//add global variables to access the DOM
let chatForm = document.getElementById('chat-form');
let chatList = document.getElementById('chat-list');
let chatClear = document.getElementById('chat-clear');

 


//add constructor function for chat objects
function Comment(userName, text){
this.userName = userName;
this.text = text;
}

//add prototype method to build chat elements for the render method 

//add handle submit render function 
function handleChatSubmit(event){
console.log('button click:',event);
event.preventDefault();
console.log('form submission values', event.target.who.value);
console.log('form submission values', event.target.message.value);


//add submission validation
if(!event.target.who.value || !event.target.message.value){
  return alert('Looks like we\'ve got another mystery on our hands');
}

}//closes function


















//add SUBMIT EVENT eventlistener to the form submit button 
chatForm.addEventListener('submit', handleChatSubmit);




//add CLICK EVENT to clear chat list 
chatClear.addEventListener('click', function(){
console.log('clickin on clear chat button!');
});