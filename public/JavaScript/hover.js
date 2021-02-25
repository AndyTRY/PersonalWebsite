/*
let nodeIcon = document.getElementById("svg_nodejs");
let javaIcon = document.getElementById("svg_java");
let postgreIcon = document.getElementById("svg_postgre");
let cssIcon = document.getElementById("svg_css");
*/
let changeArrow = document.getElementById('arrow1');


//console.log(changeArrow);

let hovercons = [nodeIcon,javaIcon,postgreIcon,cssIcon];
let iconNames = ["nodejs.svg", "java.svg", "postgre.svg","css.svg"]



    changeArrow.addEventListener('mouseover', function(){ChangeColor("White")});
    changeArrow.addEventListener('mouseout', function(){ChangeColor("Black")});


function ChangeColor(color){
    for(var i=0; i<hovercons.length; i++){
        console.log("Sfds");
        hovercons[i].src = "Pictures/Hero/" + color + "/" + iconNames[i];
    }
    
}
