img="";

function preload() {
    img=loadImage('index.jpg');
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
}


function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="  Detecting animal";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
   console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw() {
    image(img, 0, 0, 640, 420);
   fill("#00FF00");
   text("A cute Rabbit", 45, 75);
   noFill();
   stroke("#00FF00");
  rect(30, 60, 450, 350);
}