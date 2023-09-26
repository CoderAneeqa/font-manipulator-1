function setup(){

    canvas = createCanvas(450,450);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("poseNet is initialised");
}

function gotPoses(results){
    if(results.length>0){

        console.log(results);
    }
}

function draw(){
    background('#43d969');
}