click1 = document.getElementById("Click1");
click2 = document.getElementById("Click2");


setTimeout(showClick, 700);

function showClick(){
    click1.classList.add("clickin");
   
    setTimeout(
    function(){
  
        click2.classList.add("clickin");
        NodeRotate(90, 0, function(){IconAnimate(0, 90)})
        //document.getElementById("subject_myWork").scrollIntoView({behavior: 'smooth' });
        setTimeout(
        function(){

            click2.classList.remove("clickin");
            click1.classList.remove("clickin");
            setTimeout(
            function(){
                click2.style.visibility = "hidden";
                click1.style.visibility = "hidden";
            }, 1000);
        }, 500);
    }, 700);
}