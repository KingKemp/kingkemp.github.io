var myImage = document.querySelector('img'); //sets image variable
myImage.onclick = function(){ //runs code when image is clicked
    var mySrc = myImage.getAttribute('src');//sets image root folder variable 
    if(mySrc === 'images/stussy.jpg'){//checks image file
        myImage.setAttribute('src','images/stussy2.jpg');//changes image file
    }else{
        myImage.setAttribute('src','images/stussy.jpg');//changes image file
    }
}
var myButton = document.querySelector('button');//creates button variable
myButton.onclick =function(){
    setUserName();//runs code when button is clicked
}
var myHeading = document.querySelector('h1');
function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Katana Vulture,' + myName;
}//function to personalize header and save in browser memory
if(! localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Katana Vulture, \n' + storedName;
}