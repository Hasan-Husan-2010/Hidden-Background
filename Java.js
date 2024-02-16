function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    strokeWeight(10);
    if(mouseIsPressed === true){
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
}