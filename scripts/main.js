var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/breath-of-the-wild.jpg') {
      myImage.setAttribute ('src','images/dark-souls-3.jpg');
    } else {
      myImage.setAttribute ('src','images/breath-of-the-wild.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading= document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML  = 'Games is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML  = 'Games is cool, ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
}