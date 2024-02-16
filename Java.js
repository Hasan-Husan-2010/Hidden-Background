function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    strokeWeight(15);
    if(mouseIsPressed === true){
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
}