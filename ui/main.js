console.log('Loaded!');

//To change the value of main-text div

var element = document.getElementById('main-div');
element.innerHTML = "New Value";

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft  + 10;
    img.margin.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
};