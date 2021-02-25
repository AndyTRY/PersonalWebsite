
//Array of Project Text and Img data (read form public/)
var projectTexts = [];
projectTexts.push("ProjectTexts/Muqo.txt");
projectTexts.push("ProjectTexts/JavaFileSys.txt");
projectTexts.push("ProjectTexts/Scraper.txt");
var projectEle = [];
projectEle.push(document.getElementById("muqo"));
projectEle.push(document.getElementById("Jshell"));
projectEle.push(document.getElementById("searchArr"));

//Remove Opacity class of all Imgs except starting
for(var i=0; i<projectEle.length;i++){
    projectEle[i].classList.remove("opaqueImg");
}
document.getElementById("searchArr").classList.add("opaqueImg");

let nextButton = document.getElementById("nextButton");
//console.log("DS")

let projectImg = document.getElementById("searchArr");
let header1= document.getElementById("header1");
let header2= document.getElementById("header2");
let projectParagraph= document.getElementById("projectParagraph");
let techList = document.getElementById("techList");

let projectGithub = document.getElementById("projectGithub");
let projectWebsite = document.getElementById("projectWebsite");
projectWebsite.style.visibility = "hidden";


let projectIcons = [];
projectIcons.push(projectGithub);
projectIcons.push(projectWebsite);


document.getElementById("svg_java").addEventListener("click", function (){setProject(1)});
document.getElementById("svg_nodejs").addEventListener("click", function (){setProject(2)});
document.getElementById("svg_postgre").addEventListener("click", function (){setProject(0)});

nextButton.addEventListener("click", getProject);


function setProject(proNum){
    let proNumNext = proNum==(projectTexts.length -1)? 0:(+proNum+1);
    nextButton.dataset.project = proNumNext;
    ChangeProject(proNum);
}


function getProject(){
    let proNum = nextButton.dataset.project;
    let proNumNext = proNum==(projectTexts.length -1)? 0:(+proNum+1);
    nextButton.dataset.project = proNumNext;
    ChangeProject(proNum);
}

function ChangeProject(projectNum){
    //console.log("ProjectNumber " + projectNum);

    //Change Project Img
    //projectImg.src = projectEle[projectNum];
    switchImgs(projectNum);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", projectTexts[projectNum], true);
    xhr.onload = function(){
        if(this.status == 200){
        //console.log(this.responseText);
        ChangeText(this.responseText);
            }
        }
    xhr.send();
}

function switchImgs(projectNum){
    for(var i=0; i<projectEle.length;i++){
        projectEle[i].classList.remove("opaqueImg");
    }
    projectEle[projectNum].classList.add("opaqueImg")
}



function ChangeText(text){
    datalist = text.split('\n');
    //console.log(datalist);

    head1Data = "<u>" + datalist[0] + "</u>";
    head2Data = datalist[1];
    
    var i = 2;
    var paraData = ""
    while(datalist[i].localeCompare("") != 0){
        paraData = paraData + datalist[i] + "<br>";
        i++;
    }
    i++;

    listData = [];
    while(datalist[i].localeCompare("") != 0){
        listData.push(datalist[i]);
        i++;
    }
    i=i+2;
    

    //Project Icons
    for(var j=0;j<projectIcons.length;j++){
        projectIcons[j].style.visibility = "hidden";
    }

    for(var j=0;j<projectIcons.length;j++){
        if(datalist[i].localeCompare("n/a") != 0){
            projectIcons[j].style.visibility = "visible";
            projectIcons[j].href = datalist[i];
            //console.log("this data = " + datalist[i]);
        }
        i=i+2;
    }

    textShiftElements = [header1, header2, projectParagraph, techList];
    textShiftFunction= [innerReplace, innerReplace, innerReplace, ListShift];
    ShiftData = [head1Data, head2Data, paraData,listData];
    shiftClass = ["fade","fade","fade2","fade"];

    changeTextFunc = [];
    for(var i=0; i< textShiftElements.length;i++){
        changeTextFunc.push(textShiftFunction[i].bind(null,textShiftElements[i], ShiftData[i]));
    }

    for(var i=0; i<changeTextFunc.length;i++){
        textShiftElements[i].removeEventListener("transitionend", TransitionParam.bind(null,textShiftElements[i], shiftClass[i], changeTextFunc[i]));
        textShiftElements[i].addEventListener("transitionend", TransitionParam.bind(null, textShiftElements[i], shiftClass[i], changeTextFunc[i]));
        textShiftElements[i].classList.remove(shiftClass[i]);
    }
     
}

function innerReplace(element,text){
    element.innerHTML = text;
}

function ListShift(ulElement, datalist){
    ulElement.innerHTML = "";
    datalist.forEach(element => {
        var li = document.createElement("li");
        splitText = element.split("/b");
        ////console.log(splitText);
        li.innerHTML = "<b>" + splitText[0] + "</b>" + splitText[1];
        ulElement.appendChild(li);
    });

}

function TransitionParam(textElement, shiftClass, changeText){
    textElement.removeEventListener("transitionend", TransitionParam.bind(null,textElement,changeText));
    changeText();
    textElement.classList.add(shiftClass);
    
}

