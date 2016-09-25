// Console code
var loader = document.getElementById('counter');
loader.onload = function(){
    
    //Render the response in the correct span
    counter = counter + 1;
    var span = document.getElementById('times');
    span.innerHTML = counter.toString();
};