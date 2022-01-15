'use strict';
console.log('app.js connected!');

//add global variables to access the DOM
let chatForm = document.getElementById('chat-form');
let chatList = document.getElementById('chat-list');
let chatClear = document.getElementById('chat-clear');
let allMessage = [];




//add constructor function for chat objects
function Comment(userName, text){
  this.userName = userName;
  this.text = text;
}

//add prototype method to build chat elements for the render method
Comment.prototype.render = function(){
  let listItem = document.createElement('li');
  listItem.innerHTML = '<img width="100px" height="100px" src="images/' + this.userName + '.png" /><b>' + this.userName + ': </b><em>' + this.text + '</em>';
  console.log('list item',listItem);
  return listItem;
};



//add function to render all the comments
let renderAllMessages = function(){
  chatList.innerHTML = '';
  for(let i = 0; i < allMessage.length; i++){
    console.log('chat loggin', allMessage[i]);
    //call to build our html and pin to our chatList
    chatList.appendChild(allMessage[i].render());
  }
};





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


  let whoCommented = event.target.who.value;
  let messagePost = event.target.message.value;

  if(whoCommented === 'ScoobyDoo'){
    messagePost = 'Scooby dooby doo!';
  }
  if(whoCommented === 'Shaggy'){
    messagePost = 'Zoinks!';
  }
  if(whoCommented === 'Velma'){
    messagePost = messagePost.toUpperCase();
  }

  if(whoCommented === 'Fred'){
    messagePost = messagePost.toUpperCase();
  }
  if(whoCommented === 'Daphne'){
    messagePost = messagePost.toUpperCase();
  }


  let newComment = new Comment(whoCommented, messagePost);
  console.log('new comment object',newComment);
  console.log('current user: ' + event.target.who.value + ' at ' + Date());

  //reset our event targets.
  event.target.who.value = null;
  event.target.message.value = null;

  allMessage.push(newComment);

  //render new object
  renderAllMessages();

}//closes function


















//add SUBMIT EVENT eventlistener to the form submit button
chatForm.addEventListener('submit', handleChatSubmit);




//add CLICK EVENT to clear chat list
chatClear.addEventListener('click', function(){
  console.log('clickin on clear chat button!');
  allMessage = [];
  chatList.innerHTML ='';
});
