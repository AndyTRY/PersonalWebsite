document.getElementById("svg_css").addEventListener('click',function(){ScrollInto("introHead")});
document.getElementById("li_myWork").addEventListener('click',function(){ScrollInto("subject_myWork")});
document.getElementById("li_aboutMe").addEventListener('click',function(){ScrollInto("aboutMeBody")});
document.getElementById("li_contact").addEventListener('click',function(){ScrollInto("subject_contact")});
document.getElementById("getToKnow").addEventListener('click',function(){ScrollInto("aboutMeBody")});


function ScrollInto(eleScroll){
    document.getElementById(eleScroll).scrollIntoView();
}