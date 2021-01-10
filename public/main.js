let nodeIcon = document.getElementById("svg_nodejs");
let javaIcon = document.getElementById("svg_java");
let postgreIcon = document.getElementById("svg_postgre");
let cssIcon = document.getElementById("svg_css");

let circles = document.getElementsByClassName("circles");
let arrow = document.getElementById('arrow1');

let icons = [nodeIcon,javaIcon,postgreIcon,cssIcon];
let nextIcon = [javaIcon, postgreIcon,cssIcon,nodeIcon];

let rotates = [90, 180, 270, 360];

for(var i=0; i<icons.length; i++){
    icons[i].addEventListener('click', NodeRotate.bind(null, rotates[i], i, IconAnimate.bind(null,i, rotates[i])));
}



function NodeRotate(rotation, i, callback){

    icons[i].style.opacity = 0;
    icons[i].style.visibility = "hidden";

    for(var j=0; j< circles.length; j++){
        circles[j].style.transform = "rotate(" + rotation + "deg)";
    }
    arrow.style.transform = "rotate(" + -rotation + "deg)";
    
    if(rotation == 360) BypassTrans(ReEnableTrans)
    

    setTimeout(function(){
        callback();
    }, 500)
    
}

function IconAnimate(i, rotation){
    nextIcon[i].style.visibility = "visible";
    nextIcon[i].style.opacity = 1;

    if(rotation ==360){
        nextIcon[i].style.pointerEvents = "none"
        setTimeout(function(){
            nextIcon[i].style.pointerEvents = "auto"
        },500)
    }
}

function BypassTrans(callback){
    setTimeout(function(){
        for(var j=0; j< circles.length; j++){
            circles[j].style.transition = "all 0s";
            circles[j].style.transform = "rotate(" + 0 + "deg)";
        }
        arrow.style.transform = "rotate(" + 0 + "deg)";
        arrow.style.transition = "all 0s";
        callback();
        
    }, 500)
}

function ReEnableTrans(){
    setTimeout(function(){
        for(var j=0; j< circles.length; j++){
            circles[j].style.transition = "all 0.5s ease-in";
        }
        arrow.style.transition = "all 0.5s ease-in";
    },500)
}