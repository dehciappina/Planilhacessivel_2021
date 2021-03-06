const loadBg = document.querySelector('#loading');
const rects = document.querySelectorAll('#loading rect');

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
            loadBg.style.opacity = 0;
            loadBg.style.visibility = 'hidden';

            setTimeout(() => {
                loadBg.style.display = 'none';
            }, 500);
        
    }
  }



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

const goUp = document.querySelector('#go_up')

hamburger.addEventListener('click', function() {
    toggleHamb()
})
document.body.onscroll = function() {
    if(showing == true) {
        toggleHamb()
    } else if(showingPoliticas == true) {
        togglePoliticas()
    }

    if(window.pageYOffset > (document.body.offsetHeight /2)) {
        goUp.style.opacity = 1;
        goUp.style.visibility = 'visible';
        goUp.style.transform = 'translateX(0)';
    } else {
        goUp.style.opacity = 0;
        goUp.style.visibility = 'hidden';
        goUp.style.transform = 'translateX(2rem)';
    }
}







const politicasWindow = document.querySelector('#politicas_venda')

const politicaBt = document.querySelector('#politicas')

let showingPoliticas = false;

function togglePoliticas() {
    if(showingPoliticas == false) {
        showingPoliticas = true;

        politicasWindow.style.transform = 'translateY(0)';
        politicasWindow.style.opacity = 1;
        politicasWindow.style.visibility = 'visible'
    } else {

        politicasWindow.style.transform = 'translateY(1rem)';
        politicasWindow.style.opacity = 0;
        politicasWindow.style.visibility = 'hidden'
        showingPoliticas = false;
    }
}


politicaBt.addEventListener('click', function() {
    togglePoliticas()
})





