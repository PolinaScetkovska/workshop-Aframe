

// // changing individual properties with code and using setInterval
var rotationSpeed = 1;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.xy += rotationSpeed;
console.log(myOtherBox.object3D.rotation.xy);
}

//setInterval(spin, 16); //equivalent to 60 fps
