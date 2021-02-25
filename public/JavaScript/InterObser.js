
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementsByClassName("orangeBox")[0]);

function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    if(entry.isIntersecting){
        showArrow();
    }
  });
}


function showArrow(){

    //hide fake button while not overlapping real, until intersect occurs
    let arrow = document.getElementById("fakebutton");
    arrow.style.opacity = 1;
    arrow.style.left = "0em";
    

    setTimeout(()=>{
        arrow.style.opacity = 0;
        setTimeout(()=>{
          arrow.style.left = "200em";
      }, 500)

    }, 1000)
}
