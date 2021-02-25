let coolStuff = document.getElementsByClassName("coolstuff");
let Pcool = document.getElementById("coolStuff");
let Sketchfab = document.getElementsByClassName("sketchfab")
let CADArrow = document.getElementById("CADNext");
let SketchDiv = document.getElementById("SketchDiv");
let SketchLoad = document.getElementById("SketchLoad");

SketchLoad.style.display= "none";

let coolData;
var xhr = new XMLHttpRequest();
xhr.open("GET", "coolStuff.txt", true);
xhr.onload = function(){
    if(this.status == 200){
        //console.log(this.responseText);
        coolData = this.response.split("\n");
        }
    }
xhr.send();

let CADModels;
var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "Sketchfab.txt",true);
xhr2.onload = function(){
    if(this.status == 200){
        //console.log(this.responseText);
        CADModels = this.response.split("\n");
        }
    }
xhr2.send();



coolStuff[0].addEventListener("click", GetCool);
CADArrow.addEventListener("click", NextCAD);

function NextCAD(){
    var currentCAD = CADArrow.dataset.cad;
    var nextCAD = currentCAD==(CADModels.length -1)? 0:(+currentCAD+1);
    CADArrow.dataset.cad = nextCAD;
    ReplaceCAD(nextCAD);

    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
}


function ReplaceCAD(nextCAD){
    SketchDiv.innerHTML = CADModels[nextCAD];
    SketchDiv.style.visibility = "hidden";
    SketchLoad.style.display = "contents";
    setTimeout(
        function(){
        SketchDiv.style.visibility = "visible";
        SketchLoad.style.display= "none";
    }, 500);
}


function GetCool(){
    var currentCool = coolStuff[0].dataset.cool;
    var nextCool = currentCool==(coolData.length -1)? 0:(+currentCool+1);
    coolStuff[0].dataset.cool = nextCool;
    shiftCool(nextCool);
}

function shiftCool(nextCool){
    coolStuff[0].classList.toggle("toggleColor");
    Pcool.innerHTML = coolData[nextCool];
    if(coolData[nextCool].localeCompare("3D modeling") == 0){
        ShowExtraCool();
    } else{
        HideExtraCool();
    }
}

function ShowExtraCool(){
    Sketchfab[0].style.display = "contents"
    coolStuff[0].style.gridTemplateRows = "1fr 1fr"
    coolStuff[0].style.gridTemplateAreas = '\
    "Pgraph"\
    "sketchfab"\
    ';
    
}

function HideExtraCool(){
    Sketchfab[0].style.display = "none"
    coolStuff[0].style.gridTemplateRows = "1fr"
    coolStuff[0].style.gridTemplateAreas = "Pgraph"

}

/*
    function setProject(proNum){
        let proNumNext = proNum==(projectTexts.length -1)? 0:(+proNum+1);
        nextButton.dataset.project = proNumNext;
        ChangeProject(proNum);
    }
*/