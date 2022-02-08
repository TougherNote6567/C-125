NoseX = 0;
NoseY = 0;
RWristX = 0;
LWristX = 0;
diff = 0;

function preload(){

}

function setup(){
  video = createCapture(VIDEO);
  video.size(550,500);
  canvas = createCanvas(550,450);
  canvas.position(600, 100);
  poseNet= ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotResults);
}

function modelLoaded(){
    console.log("PoseNet model has been allowed to pass by my good sister.");
}

function gotResults(results){
    if(results.length>0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("NoseX =" + NoseX + "     NoseY = " + NoseY);
        RWristX = results[0].pose.rightWrist.x;
        LWristX = results[0].pose.leftWrist.x;
        console.log("Right WristX = "+RWristX+"     Left WristX = "+LWristX);
        diff = floor(LWristX - RWristX);
        console.log(diff);
    }
}

function draw(){
background("#00FFBF");
fill("pink");
stroke("green");
square(NoseX, NoseY, diff);
textSize(diff);
fill("red");
text("Anasuya", 50,250);
}