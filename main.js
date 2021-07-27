const loadBg = document.querySelector('#loading');
const rects = document.querySelectorAll('#loading rect');

const hamburger = document.querySelector('#hamburger');
const hambCtnr = document.querySelector('#hamb_ctnr');
const hamburgerDiv = document.querySelector('#hamburger > div')
const hamburgerDivFirst = document.querySelector('#hamburger > div > div:nth-child(1)')
const hamburgerDivThird = document.querySelector('#hamburger > div > div:nth-child(3)')

let showing = false;

function toggleHamb() {
    if(showing == false) {
        showing = true;
        hambCtnr.style.transform = "translateX(0)"

        hamburgerDiv.style.backgroundColor = "var(--c03)"

        hamburgerDivFirst.style.transform = "translateX(0)"
        hamburgerDivFirst.style.backgroundColor = "var(--c01)";
        hamburgerDivThird.style.transform = "translateX(0)"
        hamburgerDivThird.style.backgroundColor = "var(--c01)";
    } else {
        showing = false;
        hambCtnr.style.transform = "translateX(100%)"

        hamburgerDiv.style.backgroundColor = "var(--c01)"

        hamburgerDivFirst.style.transform = "translateX(-0.7rem)"
        hamburgerDivFirst.style.backgroundColor = "var(--c03)";
        hamburgerDivThird.style.transform = "translateX(0.7rem)"
        hamburgerDivThird.style.backgroundColor = "var(--c03)";
    }
}


hamburger.addEventListener('click', function() {
    toggleHamb()
})
document.body.onscroll = function() {
    if(showing == true) {
        toggleHamb()
    }
    

    document.querySelector('#planilha').style.transform = "perspective(1700px) rotate3d(0, -1, 0, " + (15 + window.pageYOffset/80) + "deg)"
}

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
  

        // setTimeout(() => {
        //     loadBg.style.opacity = 0;
        //     loadBg.style.visibility = 'hidden';

        //     setTimeout(() => {
        //         loadBg.style.display = 'none';
        //     }, 500);

        // }, 900);
  
        // for(i = 0; i < rects.length; i++) {
        //     rects[i].style.transform = "translateY(-100rem)"
        //     rects[i].style.animation = "none"
        // }
        
    }
  }

